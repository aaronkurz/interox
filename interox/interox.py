"""Core InterOX class and rule induction logic."""
# pylint: disable=too-many-lines
import logging
import re
import importlib
from typing import Dict, List, Any, Tuple, Union, Literal, cast
from pandas import DataFrame, Series
import numpy as np
import pandas as pd
from rulelearn_ri.trxf.core import Conjunction, DnfRuleSet
from rulelearn_ri.algorithms.ripper import RipperExplainer
from coolname import generate_slug
from eclear.enrichment import describe_attribute, is_numeric_series, provenance_of
from .helpers import (conjunction_to_conditions, is_usable_feature_name,
                      rule_to_lambda, ruleset_to_lambda)
from .rule_analyzer import DnfRuleAnalyzer
from .ruleset_table_widget import RulesetTableWidget
from .explanation_status_widget import ExplanationStatusWidget

logger = logging.getLogger(__name__)

CaseFilter = Literal['any', 'positive', 'negative']

#: Columns of the rule table that carry a metric rather than a rule condition.
_METRIC_COLUMNS = frozenset({'Precision', 'Recall', 'TP', 'FP', 'FN', 'TN'})


def feature_is_hidden(column: str, hidden_feats: List[str]) -> bool:
    """Whether a column is covered by a hidden-feature entry.

    An entry is an exact column name or a regex, and the two are checked in
    that order. A name is not necessarily a valid pattern -- an enrichment
    column like `*.concept:name::append` starts with a regex quantifier -- so a
    pattern that does not compile only ever matches literally, rather than
    raising out of induction.
    """
    for pattern in hidden_feats:
        if column == pattern:
            return True
        try:
            if re.fullmatch(pattern, column):
                return True
        except re.error:
            continue
    return False


def rule_induction(case_log: DataFrame,
                   outcome: "Series[bool]",
                   hidden_feats: List[str]) -> DnfRuleSet:
    """Induce a ruleset from a case log, outcome, and hidden features.

    Returns an empty ruleset when there is nothing left to induce from, i.e.
    when the case log is empty or the outcome has a single unique value (for
    example, after a stored rule has explained every remaining positive case).
    The underlying RIPPER estimator requires at least two outcome classes.

    Columns whose name cannot become a rule condition are dropped alongside the
    hidden ones: RIPPER turns the name of every column it selects into a `trxf`
    `Feature`, and a name that does not parse takes down the whole induction
    rather than just its own rule.
    """
    if len(case_log) == 0 or outcome.nunique() < 2:
        return DnfRuleSet(conjunctions=[], then_part=1)

    x_train = case_log.copy()

    columns_to_drop = set()
    unusable = []
    for col in x_train.columns:
        if feature_is_hidden(col, hidden_feats):
            logger.debug('Dropping hidden feature %s.', col)
            columns_to_drop.add(col)
        elif not is_usable_feature_name(col):
            unusable.append(col)
            columns_to_drop.add(col)

    if unusable:
        logger.warning(
            'Dropping %d column(s) whose name cannot be used as a rule condition: %s. '
            'Rename them to remove the arithmetic operator.',
            len(unusable), ', '.join(repr(col) for col in unusable)
        )

    if columns_to_drop:
        x_train = x_train.drop(columns=list(columns_to_drop))
    estimator = RipperExplainer()
    estimator.fit(x_train, outcome, target_label=True)
    return estimator.explain()


class InterOX: # pylint: disable=too-many-instance-attributes, too-many-public-methods
    """Interactive manager for rule-based outcome explanation.

    The class tracks two rulesets over a case log:
    - Stored ruleset: rules accepted by the user.
    - Suggested ruleset: rules induced from the currently unclaimed cases
      (those no stored rule fires on).

    As rules are stored or visible features are changed, suggested rules are
    re-induced.
    """

    def __init__(self, outcome: "Series[bool]",
                 case_log: DataFrame,
                 hidden_feats: Union[List[str], None] = None):
        """Initialize InterOX state for an outcome and case log.

        Args:
            outcome: Boolean target label per case. `True` denotes the
                positive outcome to explain.
            case_log: Feature table indexed by case. Rows are evaluated by
                induced and stored rules.
            hidden_feats: List of exact feature names or regex patterns to
                exclude from suggested-rule induction.

        Notes:
            On initialization, InterOX induces an initial suggested ruleset
            over the full case log and marks all cases as unclaimed.
        """
        self._outcome = outcome
        self._case_log = case_log
        self._hidden_feats = hidden_feats if hidden_feats is not None else []
        self._explained_cases: "Series[bool]" = Series(
            [False] * len(self._outcome), index=self._outcome.index
        )
        self._stored_ruleset: DnfRuleSet = DnfRuleSet(conjunctions=[], then_part=1)
        # Annotations keyed by stable per-rule id (see _ensure_rule_id). Holds
        # only non-empty notes; missing ids resolve to ''.
        self._stored_annotations: Dict[int, str] = {}
        # Human-readable rule names keyed by iox_rule_id
        self._rule_names: Dict[int, str] = {}
        self._rule_id_counter = 0
        # One-shot confirmation handed to the next rule builder widget (see
        # `get_rule_builder`).
        self._pending_builder_flash = ''
        # The rule builder widget created last, i.e. the one the notebook is
        # currently showing -- `None` until a cell asks for one. It is what
        # `send_rule_to_builder` writes a rule into (see there).
        self._rule_builder: Any = None
        self._suggested_ruleset: DnfRuleSet = rule_induction(case_log, outcome, self._hidden_feats)
        self._suggested_ruleset_analyzer = DnfRuleAnalyzer(self._suggested_ruleset,
                                                           case_log,
                                                           outcome)
        self._stored_ruleset_analyzer = DnfRuleAnalyzer(self._stored_ruleset,
                                                        case_log,
                                                        outcome)


    def get_stored_ruleset_raw(self) -> DnfRuleSet:
        """Return the stored ruleset object.

        Returns:
            The current stored `DnfRuleSet`.
        """
        return self._stored_ruleset

    def get_suggested_ruleset_raw(self) -> DnfRuleSet:
        """Return the suggested ruleset object.

        Returns:
            The current suggested `DnfRuleSet`, induced from the unclaimed
            cases and visible features.
        """
        return self._suggested_ruleset



    def _get_exp_status_data(self) -> Dict[str, int]:
        """Return explanation progress counts.

        Returns:
            A dict with keys:
                - `cases_tbe`: Remaining positive cases (FN).
                - `exp_tp`: Explained cases (TP).
                - `exp_fp`: Wrongly claimed cases (FP).
                - `exp_tn`: Negative cases the explanation leaves alone (TN).

            The four counts partition the case log.
        """
        exp_tp = len(self._case_log[self._explained_cases & self._outcome])
        exp_fp = len(self._case_log[self._explained_cases & ~self._outcome])
        cases_tbe = len(self._case_log[~self._explained_cases & self._outcome])
        exp_tn = len(self._case_log[~self._explained_cases & ~self._outcome])
        return {
            "cases_tbe": cases_tbe,
            "exp_tp": exp_tp,
            "exp_fp": exp_fp,
            "exp_tn": exp_tn,
        }

    def get_exp_status(self) -> ExplanationStatusWidget:
        """Return a widget view of explanation status.

        Returns:
            `ExplanationStatusWidget` populated with current explanation
            progress counts and the size of the stored ruleset.
        """
        exp_status = self._get_exp_status_data()
        return ExplanationStatusWidget(
            cases_tbe=exp_status["cases_tbe"],
            exp_tp=exp_status["exp_tp"],
            exp_fp=exp_status["exp_fp"],
            exp_tn=exp_status["exp_tn"],
            stored_rules=self.get_len_stored_ruleset(),
        )

    def get_len_suggested_ruleset(self) -> int:
        """ Get number of rules in the suggested ruleset. """
        return len(self._suggested_ruleset.conjunctions)

    def get_len_stored_ruleset(self) -> int:
        """ Get the number of rules in the stored ruleset. """
        return len(self._stored_ruleset.conjunctions)

    def _ensure_rule_id(self, conjunction: Conjunction) -> int:
        """Return a stable unique id for a rule, assigning one if needed.

        The id is tagged directly onto the ``Conjunction`` object (which is
        unhashable and therefore cannot key a dict). Object identity is stable
        for a stored rule's lifetime, so its id and annotation follow it across
        re-induction, deduplication, and removals — independent of position.
        """
        iox_rule_id = getattr(conjunction, 'iox_rule_id', None)
        if iox_rule_id is None:
            iox_rule_id = self._rule_id_counter
            self._rule_id_counter += 1
            setattr(conjunction, 'iox_rule_id', iox_rule_id)
            # Generate a human-readable name for this rule
            self._rule_names[iox_rule_id] = self._generate_rule_name()
        return iox_rule_id

    def _generate_rule_name(self) -> str:
        """Generate a human-readable rule name using two words."""
        return generate_slug(2)

    def get_rule_name(self, iox_rule_id: int) -> str:
        """Return the human-readable name for a rule with the given iox_rule_id."""
        return self._rule_names.get(iox_rule_id, f'Rule {iox_rule_id}')

    def get_stored_rule_options(self) -> Dict[str, int]:
        """Return `{rule_name: iox_rule_id}` for the stored ruleset.

        Intended for selectors (dropdowns): rules are addressed by their stable
        id, so a selection survives re-induction, deduplication and removals,
        while the user sees the rule's human-readable name.
        """
        return self._rule_options(self._stored_ruleset.conjunctions)

    def get_suggested_rule_options(self) -> Dict[str, int]:
        """Return `{rule_name: iox_rule_id}` for the suggested ruleset.

        See `get_stored_rule_options`.
        """
        return self._rule_options(self._suggested_ruleset.conjunctions)

    def _rule_options(self, conjunctions: List[Conjunction]) -> Dict[str, int]:
        options: Dict[str, int] = {}
        for conjunction in conjunctions:
            iox_rule_id = self._ensure_rule_id(conjunction)
            options[self.get_rule_name(iox_rule_id)] = iox_rule_id
        return options

    def _require_stored_index(self, iox_rule_id: int) -> int:
        idx = self._stored_index_by_id(iox_rule_id)
        if idx is None:
            raise ValueError(f"No stored rule with id {iox_rule_id}.")
        return idx

    def _require_suggested_index(self, iox_rule_id: int) -> int:
        idx = self._suggested_index_by_id(iox_rule_id)
        if idx is None:
            raise ValueError(f"No suggested rule with id {iox_rule_id}.")
        return idx

    def _build_rule_detail_payload(self,  # pylint: disable=too-many-locals
                                    analyzer: DnfRuleAnalyzer,
                                    rule_index: int,
                                    case_log: DataFrame,
                                    outcome: "Series[bool]") -> dict:
        metrics_per_rule = analyzer.get_metrics_per_rule()
        rule_metrics = metrics_per_rule[rule_index]
        rule_df = analyzer.get_feature_impact_for_rule(rule_index)
        per_feat_metrics_df = analyzer.get_per_feature_metrics_for_rule(rule_index)
        per_feat_metrics = {
            row['Feature']: (float(row['Precision']), float(row['Recall']))
            for _, row in per_feat_metrics_df.iterrows()
        }

        rule_feature_names = list(rule_df['Feature']) if len(rule_df) > 0 else []
        feature_summaries = (
            self._build_feature_summaries(case_log, rule_feature_names, outcome)
            if rule_feature_names else {}
        )

        conjunction = analyzer.rule_set.conjunctions[rule_index]
        feat_predicate_info: dict[str, dict] = {}
        for predicate in conjunction.predicates:
            feat = str(predicate.feature)
            if feat not in feat_predicate_info:
                feat_predicate_info[feat] = {
                    'relations': [],
                    'boundaries': [],
                    'string_values': [],
                }
            feat_predicate_info[feat]['relations'].append(str(predicate.relation.value))
            val = predicate.value
            if hasattr(val, 'tolist'):
                val = val.tolist()
            if isinstance(val, (int, float)) and np.isfinite(val):
                feat_predicate_info[feat]['boundaries'].append(float(val))
                feat_predicate_info[feat]['string_values'].append('')
            else:
                feat_predicate_info[feat]['boundaries'].append(0.0)
                feat_predicate_info[feat]['string_values'].append(str(val))

        features = []
        max_total_removed = 0
        for _, row in rule_df.iterrows():
            unique_tp_removed = int(row['Unique TPs Removed'])
            unique_fp_removed = int(row['Unique FPs Removed'])
            total_removed = unique_tp_removed + unique_fp_removed
            max_total_removed = max(max_total_removed, total_removed)

            feature_name = str(row['Feature'])
            raw_values = row.get('Predicate Values', [])
            if hasattr(raw_values, 'tolist'):
                raw_values = raw_values.tolist()
            predicate_boundaries = []
            for val in raw_values:
                if isinstance(val, (int, float)) and np.isfinite(val):
                    predicate_boundaries.append(float(val))

            precision_alone, recall_alone = per_feat_metrics.get(
                feature_name, (0.0, 0.0)
            )

            pred_info = feat_predicate_info.get(feature_name, {
                'relations': [],
                'boundaries': [],
                'string_values': [],
            })

            features.append({
                'feature': feature_name,
                'predicates_removed': str(row['Predicates Removed']),
                'predicate_boundaries': predicate_boundaries,
                'predicate_relations': pred_info['relations'],
                'predicate_string_values': pred_info['string_values'],
                'unique_tp_removed': unique_tp_removed,
                'unique_fp_removed': unique_fp_removed,
                'precision_feature_alone': precision_alone,
                'recall_feature_alone': recall_alone,
                'summary': feature_summaries.get(feature_name, {}),
            })

        rule_name = self.get_rule_name(self._ensure_rule_id(conjunction))

        return {
            'rule_index': rule_index,
            'rule_name': rule_name,
            'precision': float(rule_metrics['precision']),
            'recall': float(rule_metrics['recall']),
            'features': features,
            'max_total_removed': max_total_removed,
        }

    def _new_rule_detail_widget(self, title: str, rule_data: dict) -> Any:
        widget_module = importlib.import_module('.rule_detail_widget', package=__package__)
        return widget_module.RuleDetailWidget(
            title=title,
            rule_data=rule_data,
        )

    def _new_rule_builder_widget(self, title: str, outcome_name: str,
                                 attributes: list) -> Any:
        widget_module = importlib.import_module('.rule_builder_widget', package=__package__)
        return widget_module.RuleBuilderWidget(
            title=title,
            outcome_name=outcome_name,
            attributes=attributes,
        )

    def _is_numeric_feature(self, series: Series) -> bool:
        """Whether a feature is numeric, by the same test the enrichers use."""
        return is_numeric_series(series)

    def _build_categorical_full_summary(self,
                                        series: Series,
                                        outcome_series: Series) -> dict:
        """Frequency-bar summary listing *every* category, count-ordered, each
        with its outcome-positive count (for the rule builder's clickable bars)."""
        missing_count = int(series.isna().sum())
        non_missing = series.dropna()
        total_count = int(len(series))

        if len(non_missing) == 0:
            return {
                'kind': 'empty',
                'total_count': total_count,
                'missing_count': missing_count,
            }

        str_series = non_missing.astype(str)
        outcome_aligned = outcome_series.reindex(non_missing.index).fillna(False)
        counts = str_series.value_counts()

        categories = []
        for label, count in counts.items():
            positive = int(outcome_aligned[(str_series == label).to_numpy()].sum())
            categories.append({
                'value': str(label),
                'count': int(count),
                'outcome_positive_count': positive,
            })

        return {
            'kind': 'categorical',
            'total_count': total_count,
            'missing_count': missing_count,
            'categories': categories,
            'outcome_positive_total': int(outcome_aligned.sum()),
        }

    def _compute_attribute_importances(self,  # pylint: disable=too-many-locals
                                       case_log: DataFrame,
                                       outcome: "Series[bool]",
                                       features: list) -> dict:
        """Rank attributes by predictive usefulness using a tree-based model.

        Returns a mapping ``feature -> importance`` in ``[0, 1]`` (normalized so
        the most important attribute is ``1.0``). The exact method is an
        implementation detail surfaced abstractly in the widget's (i) tooltip;
        on any failure all attributes fall back to a neutral importance.
        """
        fallback = {feat: 0.5 for feat in features}
        if not features:
            return fallback
        try:
            from sklearn.ensemble import RandomForestClassifier  # pylint: disable=import-outside-toplevel

            encoded = DataFrame(index=case_log.index)
            for feat in features:
                column = case_log[feat]
                if self._is_numeric_feature(column):
                    encoded[feat] = pd.to_numeric(column, errors='coerce')
                else:
                    encoded[feat] = column.astype(str).astype('category').cat.codes
            encoded = encoded.fillna(-1)

            target = outcome.astype(bool)
            if encoded.shape[1] == 0 or target.nunique() < 2:
                return fallback

            forest = RandomForestClassifier(n_estimators=100, random_state=0)
            forest.fit(encoded, target)
            importances = forest.feature_importances_
            max_importance = float(importances.max()) if len(importances) else 0.0
            if max_importance <= 0:
                return fallback

            return {
                feat: float(importance) / max_importance
                for feat, importance in zip(encoded.columns, importances)
            }
        except Exception:  # pylint: disable=broad-except
            return fallback

    def _build_rule_builder_attributes(self,
                                       case_log: DataFrame,
                                       outcome: "Series[bool]",
                                       features: list) -> list:
        importances = self._compute_attribute_importances(case_log, outcome, features)
        # Enrichment provenance, when the case log carries one: the enrichers
        # record what they produced, so the family and sources below are read
        # rather than guessed. Columns with no record -- written by hand, or by
        # an earlier version -- fall back to parsing the name.
        provenance = provenance_of(case_log)
        attributes = []
        for feat in features:
            series = case_log[feat]
            if self._is_numeric_feature(series):
                kind = 'num'
                summary = self._build_numeric_feature_summary(series, outcome)
            else:
                kind = 'cat'
                summary = self._build_categorical_full_summary(series, outcome)
            meta = describe_attribute(feat, provenance)
            attributes.append({
                'id': feat,
                'label': feat,
                'kind': kind,
                'importance': float(importances.get(feat, 0.5)),
                'summary': summary,
                'family': meta.family,
                'family_label': meta.family_label,
                'sources': list(meta.sources),
            })
        return attributes

    def _build_numeric_feature_summary(self, series: Series, outcome_series: Series) -> dict: # pylint: disable=too-many-locals
        numeric_values = pd.to_numeric(series, errors='coerce')
        missing_count = int(numeric_values.isna().sum())
        non_missing = numeric_values.dropna()
        total_count = int(len(numeric_values))

        assert missing_count + len(non_missing) == total_count

        if len(non_missing) == 0:
            return {
                'kind': 'empty',
                'total_count': total_count,
                'missing_count': missing_count,
            }

        min_value = float(non_missing.min())
        max_value = float(non_missing.max())
        median_value = float(non_missing.median())

        outcome_aligned = outcome_series.reindex(non_missing.index).fillna(False)
        positive_values = non_missing[outcome_aligned]
        outcome_positive_total = int(outcome_aligned.sum())

        distinct_values, distinct_counts = np.unique(non_missing.to_numpy(), return_counts=True)
        if len(distinct_values) <= 7:
            value_counts = [int(v) for v in distinct_counts.tolist()]
            exact_values = [float(v) for v in distinct_values.tolist()]

            assert sum(value_counts) == len(non_missing)

            outcome_positive_bin_counts = [
                int((positive_values == val).sum()) for val in exact_values
            ]

            return {
                'kind': 'numeric_discrete',
                'total_count': total_count,
                'missing_count': missing_count,
                'min': min_value,
                'median': median_value,
                'max': max_value,
                'bin_counts': value_counts,
                'bin_edges': exact_values,
                'outcome_positive_bin_counts': outcome_positive_bin_counts,
                'outcome_positive_total': outcome_positive_total,
            }

        histogram, bin_edges = np.histogram(non_missing.to_numpy(), bins=7)
        bin_counts = [int(v) for v in histogram.tolist()]
        bin_edges_list = [float(v) for v in bin_edges.tolist()]

        assert sum(bin_counts) == len(non_missing)

        positive_histogram, _ = np.histogram(positive_values.to_numpy(), bins=bin_edges)
        outcome_positive_bin_counts = [int(v) for v in positive_histogram.tolist()]

        return {
            'kind': 'numeric',
            'total_count': total_count,
            'missing_count': missing_count,
            'min': min_value,
            'median': median_value,
            'max': max_value,
            'bin_counts': bin_counts,
            'bin_edges': bin_edges_list,
            'outcome_positive_bin_counts': outcome_positive_bin_counts,
            'outcome_positive_total': outcome_positive_total,
        }

    def _build_categorical_feature_summary(self, series: Series) -> dict:
        missing_count = int(series.isna().sum())
        non_missing = series.dropna()
        total_count = int(len(series))

        if len(non_missing) == 0:
            return {
                'kind': 'empty',
                'total_count': total_count,
                'missing_count': missing_count,
            }

        counts = non_missing.astype(str).value_counts()
        top_categories = []
        total_non_missing = int(len(non_missing))

        for label, count in counts.head(3).items():
            top_categories.append({
                'label': str(label),
                'count': int(count),
                'ratio': float(count) / total_non_missing,
            })

        return {
            'kind': 'categorical',
            'total_count': total_count,
            'missing_count': missing_count,
            'top_categories': top_categories,
        }

    def _build_feature_summaries(self,
                                 case_log: DataFrame,
                                 feature_columns: list[str],
                                 outcome: Series) -> dict:
        summaries: dict[str, dict] = {}

        for feature in feature_columns:
            if feature not in case_log.columns:
                raise ValueError(f"Feature '{feature}' not found in case log columns.")

            series = case_log[feature]
            if self._is_numeric_feature(series):
                summaries[feature] = self._build_numeric_feature_summary(series, outcome)
            else:
                summaries[feature] = self._build_categorical_feature_summary(series)

        return summaries

    @staticmethod
    def _feature_columns(metrics_per_rule_df: DataFrame) -> List[str]:
        """The rule table's feature columns: everything that is not a metric."""
        return [col for col in metrics_per_rule_df.columns if col not in _METRIC_COLUMNS]

    def _build_ruleset_rows(self,  # pylint: disable=too-many-locals
                            analyzer: DnfRuleAnalyzer,
                            conjunctions: List[Conjunction],
                            with_annotations: bool) -> Tuple[List[dict], List[str]]:
        """Build the per-rule payload the ruleset table renders.

        Identical for both rulesets bar the annotation, which only stored rules
        carry. Returns the rows alongside the feature columns they were keyed by,
        since the widget needs both and they are derived from the same frame.
        """
        metrics_per_rule_df = analyzer.get_ruleset_aligned_with_metrics()
        unique_per_rule = analyzer.get_unique_TP_FP_per_rule()
        feature_columns = self._feature_columns(metrics_per_rule_df)

        rules_data = []
        for i, conjunction in enumerate(conjunctions):
            metrics = metrics_per_rule_df.iloc[i]
            u_tp = len(unique_per_rule[i]['unique_tp_cases'])
            u_fp = len(unique_per_rule[i]['unique_fp_cases'])
            t_tp = int(metrics['TP'])
            t_fp = int(metrics['FP'])
            iox_rule_id = self._ensure_rule_id(conjunction)

            rule_dict = {
                'iox_rule_id': iox_rule_id,
                'rule_name': self.get_rule_name(iox_rule_id),
                'precision': float(metrics['Precision']),
                'recall': float(metrics['Recall']),
                'tp': t_tp,
                'fp': t_fp,
                'fn': int(metrics['FN']),
                'unique_tp': u_tp,
                'non_unique_tp': t_tp - u_tp,
                'unique_fp': u_fp,
                'non_unique_fp': t_fp - u_fp,
            }
            if with_annotations:
                rule_dict['annotation'] = self._stored_annotations.get(iox_rule_id, '')
            rule_dict['features'] = {feat: str(metrics[feat]) for feat in feature_columns}
            rules_data.append(rule_dict)

        return rules_data, feature_columns

    def get_stored_ruleset(self, on_refresh=None) -> RulesetTableWidget:
        """Return a table widget for stored rules with *metrics computed over the whole case log*.

        The returned widget exposes inline controls to remove a stored rule
        (with an optional note) and to view/edit the annotation attached when
        the rule was stored.

        Args:
            on_refresh: Optional callback invoked after a rule is removed or its
                annotation is edited, e.g. to refresh dependent notebook cells.

        Returns:
            `RulesetTableWidget` with rule-level metrics, TP/FP uniqueness
            breakdown, and feature summaries computed on the full case log.
        """
        rules_data, feature_columns = self._build_ruleset_rows(
            self._stored_ruleset_analyzer,
            self._stored_ruleset.conjunctions,
            with_annotations=True,
        )

        feature_summaries = self._build_feature_summaries(
            self._case_log,
            feature_columns,
            self._outcome)

        ruleset_table_widget = RulesetTableWidget(
            rules=rules_data,
            features=feature_columns,
            feature_summaries=feature_summaries,
            mode='stored',
        )
        ruleset_table_widget.set_action_context(
            remove_callback=lambda rid, note: (
                self.remove_rule_by_id(rid),
                on_refresh() if on_refresh else None),
            annotate_callback=lambda rid, note: (
                self.set_stored_annotation_by_id(rid, note),
                on_refresh() if on_refresh else None),
        )
        return ruleset_table_widget

    def get_suggested_ruleset(self, on_refresh=None) -> RulesetTableWidget:
        """Return a table widget for suggested rules on unclaimed cases.

        The returned widget exposes an inline control to store a suggested rule
        (with an optional note), moving it into the stored ruleset.

        Args:
            on_refresh: Optional callback invoked after a rule is stored, e.g.
                to refresh dependent notebook cells.

        Returns:
            `RulesetTableWidget` with rule-level metrics, TP/FP uniqueness
            breakdown, and feature summaries *computed on unclaimed cases*.
        """
        rules_data, feature_columns = self._build_ruleset_rows(
            self._suggested_ruleset_analyzer,
            self._suggested_ruleset.conjunctions,
            with_annotations=False,
        )

        feature_summaries = self._build_feature_summaries(
            self._case_log[~self._explained_cases],
            feature_columns,
            self._outcome[~self._explained_cases]
        )

        ruleset_table_widget = RulesetTableWidget(
            rules=rules_data,
            features=feature_columns,
            feature_summaries=feature_summaries,
            mode='suggested',
        )
        # Editing does not touch the stored ruleset, so unlike storing it does
        # not refresh the notebook: the rule goes straight into the live builder
        # and the outcome is reported in this table, where the click happened.
        def edit(iox_rule_id, _note):
            sent, message = self.send_rule_to_builder(iox_rule_id)
            ruleset_table_widget.notify('edit', 'ok' if sent else 'warn', message)

        ruleset_table_widget.set_action_context(
            store_callback=lambda rid, note: (
                self.store_rule_by_id(rid, note),
                on_refresh() if on_refresh else None),
            edit_callback=edit,
        )
        return ruleset_table_widget

    def get_stored_rule_detail(self, rule_index: int, on_refresh=None):
        """Return a rule detail widget for a single stored rule.

        Args:
            rule_index: Index of the stored rule to show details for.

        Returns:
            A `RuleDetailWidget` showing feature distributions, predicate
            boundaries, per-feature impact, and per-feature precision/recall,
            *computed over the whole case log*.

        Raises:
            ValueError: If `rule_index` is out of range for the stored ruleset.
        """
        num_rules = len(self._stored_ruleset.conjunctions)
        if rule_index < 0 or rule_index >= num_rules:
            raise ValueError(
                f"Invalid rule index: {rule_index}. "
                f"Must be between 0 and {num_rules - 1}."
            )
        rule_data = self._build_rule_detail_payload(
            self._stored_ruleset_analyzer,
            rule_index,
            self._case_log,
            self._outcome,
        )
        widget = self._new_rule_detail_widget('Stored Rule Details', rule_data)
        widget.set_experiment_context(
            self._stored_ruleset.conjunctions[rule_index],
            self._case_log,
            self._outcome,
            store_callback=lambda rule, note='': (self.store_rule_raw(rule, note),
                                                  on_refresh() if on_refresh else None),
        )
        return widget

    def get_suggested_rule_detail(self, rule_index: int, on_refresh=None):
        """Return a rule detail widget for a single suggested rule.

        Args:
            rule_index: Index of the suggested rule to show details for.

        Returns:
            A `RuleDetailWidget` showing feature distributions, predicate
            boundaries, per-feature impact, and per-feature precision/recall,
            *computed for unclaimed cases*.

        Raises:
            ValueError: If `rule_index` is out of range for the suggested ruleset.
        """
        num_rules = len(self._suggested_ruleset.conjunctions)
        if rule_index < 0 or rule_index >= num_rules:
            raise ValueError(
                f"Invalid rule index: {rule_index}. "
                f"Must be between 0 and {num_rules - 1}."
            )
        case_log = self._case_log[~self._explained_cases]
        outcome = self._outcome[~self._explained_cases]
        rule_data = self._build_rule_detail_payload(
            self._suggested_ruleset_analyzer,
            rule_index,
            case_log,
            outcome,
        )
        widget = self._new_rule_detail_widget('Suggested Rule Details', rule_data)
        widget.set_experiment_context(
            self._suggested_ruleset.conjunctions[rule_index],
            case_log,
            outcome,
            store_callback=lambda rule, note='': (self.store_rule_raw(rule, note),
                                                  on_refresh() if on_refresh else None),
        )
        return widget

    def get_stored_rule_detail_by_id(self, iox_rule_id: int, on_refresh=None):
        """Return a rule detail widget for the stored rule with this stable id.

        Args:
            iox_rule_id: Stable id of a rule in the stored ruleset.
            on_refresh: Optional callback invoked after a rule is stored.

        Raises:
            ValueError: If no stored rule carries this id.
        """
        return self.get_stored_rule_detail(
            self._require_stored_index(iox_rule_id), on_refresh=on_refresh
        )

    def get_suggested_rule_detail_by_id(self, iox_rule_id: int, on_refresh=None):
        """Return a rule detail widget for the suggested rule with this stable id.

        Args:
            iox_rule_id: Stable id of a rule in the suggested ruleset.
            on_refresh: Optional callback invoked after a rule is stored.

        Raises:
            ValueError: If no suggested rule carries this id.
        """
        return self.get_suggested_rule_detail(
            self._require_suggested_index(iox_rule_id), on_refresh=on_refresh
        )

    def get_rule_builder(self, scope: Literal['remaining', 'all'] = 'remaining',
                         on_refresh=None):
        """Return an interactive widget for building a rule from scratch.

        The user drags/clicks attributes (ranked by tree-based importance) into
        a canvas and sets boundaries directly on each attribute's distribution
        (numerical) or picks values from count-ordered frequency bars
        (categorical). Conditions combine with ``AND``. Evaluation
        (precision/recall/TP/FP/FN) is computed on the Python side, and storing
        the assembled rule appends it to the stored ruleset via
        `store_rule_raw` (re-inducing suggestions).

        Args:
            scope: Data the builder operates on. ``'remaining'`` (default) uses
                the unclaimed cases (no stored rule fires on them), negatives
                included so that FP can be counted — the natural place to add
                a new rule. ``'all'`` uses the whole case log.
            on_refresh: Optional callback invoked after a rule is stored, e.g.
                to refresh dependent notebook cells.

        Returns:
            A `RuleBuilderWidget` populated with per-attribute summaries and
            tree-based importances.

        Raises:
            ValueError: If `scope` is not ``'remaining'`` or ``'all'``.
        """
        if scope == 'all':
            case_log = self._case_log
            outcome = self._outcome
            title = 'Rule builder'
            pool_label = 'cases'
        elif scope == 'remaining':
            case_log = self._case_log[~self._explained_cases]
            outcome = self._outcome[~self._explained_cases]
            title = 'Rule builder (unclaimed cases)'
            pool_label = 'unclaimed cases'
        else:
            raise ValueError(
                f"Invalid scope: {scope}. Must be 'remaining' or 'all'."
            )

        features = [feat for feat in self.get_unhidden_features()
                    if feat in case_log.columns]
        attributes = self._build_rule_builder_attributes(case_log, outcome, features)
        outcome_name = str(outcome.name) if outcome.name is not None else 'outcome'

        # Restrict the builder's working data to the unhidden features so that
        # evaluation and (crucially) the RIPPER optimizer can never use hidden
        # columns such as the outcome itself — mirroring `rule_induction`, which
        # drops hidden features before fitting. Otherwise the optimizer would
        # pick the outcome column as a perfect (leaking) predictor.
        builder_case_log = case_log[features]

        # Storing a rule re-creates this widget (the host re-runs the cell on the
        # now-smaller unclaimed case log), which would swallow the builder's own
        # "stored" toast. Hand the confirmation to the successor widget instead;
        # it is consumed here so it shows exactly once.
        flash = self._pending_builder_flash
        self._pending_builder_flash = ''

        widget = self._new_rule_builder_widget(title, outcome_name, attributes)
        widget.flash = flash
        widget.pool_label = pool_label
        widget.set_context(
            builder_case_log,
            outcome,
            store_callback=lambda rule, note='': self._store_from_rule_builder(
                rule, note, on_refresh),
        )
        self._rule_builder = widget
        return widget

    def send_rule_to_builder(self, iox_rule_id: int) -> Tuple[bool, str]:
        """Load a suggested rule into the rule builder so it can be edited.

        Unlike storing or removing, this changes nothing in `InterOX`: the rule
        is written straight into the builder widget the notebook is currently
        showing, which puts it on the canvas and evaluates it. Whatever was being
        built there is discarded.

        Args:
            iox_rule_id: Stable id of a rule in the suggested ruleset.

        Returns:
            ``(True, message)`` once the rule is on its way to the builder, or
            ``(False, message)`` if this notebook has no rule builder to send it
            to. The message is meant to be shown to the user as-is.

        Raises:
            ValueError: If no suggested rule carries this id.
        """
        rule = self._suggested_ruleset.conjunctions[
            self._require_suggested_index(iox_rule_id)
        ]
        name = self.get_rule_name(iox_rule_id)
        if self._rule_builder is None:
            return False, ('No rule builder in this notebook — '
                           'add a cell with iox.get_rule_builder() first.')
        self._rule_builder.load_conditions(conjunction_to_conditions(rule), label=name)
        return True, f'{name} is now editable in the rule builder below.'

    def _store_from_rule_builder(self, rule: Conjunction, note: str, on_refresh):
        self.store_rule_raw(rule, note)
        stored_rule = self._stored_ruleset.conjunctions[
            self._stored_ruleset.conjunctions.index(rule)
        ]
        name = self.get_rule_name(self._ensure_rule_id(stored_rule))
        self._pending_builder_flash = f'Stored ✓ {name}'
        if on_refresh:
            on_refresh()

    def get_hidden_features(self) -> List[str]:
        """Return currently hidden feature patterns.

        Returns:
            List of feature names or regex patterns excluded from suggested
            rule induction.
        """
        return self._hidden_feats

    def get_unhidden_features(self) -> List[str]:
        """ Get a list of all available features in the
        whole case log that are not currently hidden. """
        return [feat for feat in self._case_log.columns
                if not feature_is_hidden(feat, self._hidden_feats)]

    def _reinduce_suggestions(self):
        """Re-induce the suggested ruleset over the currently unclaimed cases.

        Called whenever the input to induction changes: the stored ruleset (which
        moves the boundary between claimed and unclaimed) or the hidden
        features (which change the columns induction may use).
        """
        remaining = ~self._explained_cases
        self._suggested_ruleset = rule_induction(
            self._case_log[remaining], self._outcome[remaining], self._hidden_feats
        )
        self._suggested_ruleset_analyzer = DnfRuleAnalyzer(
            self._suggested_ruleset,
            self._case_log[remaining],
            self._outcome[remaining]
        )

    def _refresh_after_ruleset_change(self):
        """Recompute every piece of state derived from the stored ruleset."""
        self._explained_cases = self._case_log.apply(
            ruleset_to_lambda(self._stored_ruleset), axis=1
        )
        self._reinduce_suggestions()
        self._stored_ruleset_analyzer = DnfRuleAnalyzer(
            self._stored_ruleset,
            self._case_log,
            self._outcome
        )

    def store_rule_raw(self, rule: Conjunction, annotation: str = ''):
        """Store a raw rule and recompute derived explanation state.

        This is the advanced variant of `store_rule` and accepts any
        `Conjunction`, including rules not currently present in the suggested
        ruleset.

        Args:
            rule: Rule conjunction to append to the stored ruleset.
            annotation: Optional free-text note explaining why this rule was
                stored. Retained alongside the rule and viewable in the stored
                ruleset table.

        Notes:
            This method updates claimed-case flags, re-induces the suggested
            ruleset on the unclaimed cases, and rebuilds analyzers.
            Might fail if the provided rule is not compatible with the case log features.
        """
        self._stored_ruleset.add_conjunction(rule)
        # add_conjunction dedups on predicate-set equality, so the object now in
        # the ruleset is either the pre-existing duplicate or the one just added.
        stored_rule = self._stored_ruleset.conjunctions[
            self._stored_ruleset.conjunctions.index(rule)
        ]
        iox_rule_id = self._ensure_rule_id(stored_rule)
        if annotation:
            self._stored_annotations[iox_rule_id] = str(annotation)
        self._refresh_after_ruleset_change()

    def store_rule(self, i: int, annotation: str = ''):
        """Store one rule from the suggested ruleset.

        Args:
            i: Index of the suggested rule to store.
            annotation: Optional free-text note explaining why this rule was
                stored.

        Raises:
            ValueError: If `i` is out of range for the suggested ruleset.

        Notes:
            Delegates to `store_rule_raw` and therefore updates claimed-case
            flags, re-induces suggestions, and refreshes analyzers.
        """
        if i < 0 or i >= len(self._suggested_ruleset.conjunctions):
            raise ValueError(
                f"Invalid rule index: {i}. "
                f"Must be between 0 and {len(self._suggested_ruleset.conjunctions) - 1}."
            )
        rule_to_store = self._suggested_ruleset.conjunctions[i]
        self.store_rule_raw(rule_to_store, annotation)

    def remove_rule(self, i: int):
        """Remove a rule from the stored ruleset.

        Args:
            i: Index of the rule to remove.

        Raises:
            ValueError: If `i` is out of range for the stored ruleset.

        Notes:
            Updates claimed-case
            flags, re-induces suggestions, and refreshes analyzers.
        """
        if i < 0 or i >= len(self._stored_ruleset.conjunctions):
            raise ValueError(
                f"Invalid rule index: {i}. "
                f"Must be between 0 and {len(self._stored_ruleset.conjunctions) - 1}."
            )
        rule_to_remove = self._stored_ruleset.conjunctions[i]
        iox_rule_id = getattr(rule_to_remove, 'iox_rule_id', None)
        self._stored_ruleset.remove_conjunction(rule_to_remove)
        if iox_rule_id is not None:
            self._stored_annotations.pop(iox_rule_id, None)
            self._rule_names.pop(iox_rule_id, None)
        self._refresh_after_ruleset_change()

    def get_stored_annotation(self, i: int) -> str:
        """Return the annotation attached to stored rule `i`.

        Args:
            i: Index of the stored rule.

        Returns:
            The free-text annotation, or an empty string if none was set.

        Raises:
            ValueError: If `i` is out of range for the stored ruleset.
        """
        self._validate_rule_index(i, len(self._stored_ruleset.conjunctions), 'stored')
        iox_rule_id = self._ensure_rule_id(self._stored_ruleset.conjunctions[i])
        return self._stored_annotations.get(iox_rule_id, '')

    def set_stored_annotation(self, i: int, annotation: str):
        """Set or update the annotation attached to stored rule `i`.

        Args:
            i: Index of the stored rule.
            annotation: Free-text note to store for the rule.

        Raises:
            ValueError: If `i` is out of range for the stored ruleset.
        """
        self._validate_rule_index(i, len(self._stored_ruleset.conjunctions), 'stored')
        iox_rule_id = self._ensure_rule_id(self._stored_ruleset.conjunctions[i])
        if annotation:
            self._stored_annotations[iox_rule_id] = str(annotation)
        else:
            self._stored_annotations.pop(iox_rule_id, None)

    def _stored_index_by_id(self, iox_rule_id: int):
        for idx, conj in enumerate(self._stored_ruleset.conjunctions):
            if getattr(conj, 'iox_rule_id', None) == iox_rule_id:
                return idx
        return None

    def _suggested_index_by_id(self, iox_rule_id: int):
        for idx, conj in enumerate(self._suggested_ruleset.conjunctions):
            if getattr(conj, 'iox_rule_id', None) == iox_rule_id:
                return idx
        return None

    def store_rule_by_id(self, iox_rule_id: int, annotation: str = ''):
        """Store the suggested rule with the given stable id.

        Args:
            iox_rule_id: Stable id of a rule currently in the suggested ruleset.
            annotation: Optional note attached to the stored rule.

        Notes:
            No-op if no suggested rule currently carries this id (e.g. a stale
            id from a superseded induction).
        """
        idx = self._suggested_index_by_id(iox_rule_id)
        if idx is not None:
            self.store_rule(idx, annotation)

    def remove_rule_by_id(self, iox_rule_id: int):
        """Remove the stored rule with the given stable id.

        Notes:
            No-op if no stored rule currently carries this id.
        """
        idx = self._stored_index_by_id(iox_rule_id)
        if idx is not None:
            self.remove_rule(idx)

    def set_stored_annotation_by_id(self, iox_rule_id: int, annotation: str):
        """Set or update the annotation of the stored rule with this id.

        Notes:
            No-op if no stored rule currently carries this id.
        """
        idx = self._stored_index_by_id(iox_rule_id)
        if idx is not None:
            self.set_stored_annotation(idx, annotation)

    def hide_feature(self, feature: str):
        """Hide a feature pattern from future suggested-rule induction.

        Args:
            feature: Feature name or regex pattern to hide.

        Raises:
            ValueError: If `feature` is already hidden.

        Notes:
            Stored rules are not modified. Suggested rules are re-induced from
            the unclaimed cases with the updated hidden-feature list.
        """
        if feature in self._hidden_feats:
            raise ValueError(f"Feature '{feature}' is already hidden.")
        self._hidden_feats.append(feature)
        self._reinduce_suggestions()

    def unhide_feature(self, feature: str):
        """Unhide a previously hidden feature pattern.

        Args:
            feature: Feature name or regex pattern to remove from hidden
                features.

        Raises:
            ValueError: If `feature` is not currently hidden.

        Notes:
            Stored rules are not modified. Suggested rules are re-induced from
            the unclaimed cases with the updated hidden-feature list.
        """
        if feature not in self._hidden_feats:
            raise ValueError(f"Feature '{feature}' is not hidden.")
        self._hidden_feats.remove(feature)
        self._reinduce_suggestions()

    def set_hidden_features(self, features: List[str]):
        """Replace the hidden-feature patterns in one step.

        Args:
            features: Feature names or regex patterns to hide; every pattern
                not in this list is unhidden.

        Notes:
            Stored rules are not modified. Suggested rules are re-induced once,
            however many features change, which is why hiding several features
            should go through here rather than repeated `hide_feature` calls.
        """
        # Copied so the caller's list (e.g. a UI element's value) and ours
        # can never change each other.
        self._hidden_feats = list(features)
        self._reinduce_suggestions()

    def _validate_case_filter(self, filter_name: str, value: CaseFilter) -> CaseFilter:
        normalized = str(value).lower()
        valid_values = {'any', 'positive', 'negative'}
        if normalized not in valid_values:
            raise ValueError(
                f"Invalid {filter_name} filter: {value}. "
                "Expected one of {'any', 'positive', 'negative'}."
            )
        return cast(CaseFilter, normalized)

    def _validate_rule_index(self, i: int, num_rules: int, ruleset_name: str):
        if i < 0 or i >= num_rules:
            raise ValueError(
                f"Invalid rule index: {i}. "
                f"Must be between 0 and {num_rules - 1} for {ruleset_name} ruleset."
            )

    def _mask_by_outcome(self, index: pd.Index, outcome_filter: CaseFilter) -> "Series[bool]":
        normalized = self._validate_case_filter('outcome', outcome_filter)
        mask = self._outcome.loc[index]
        if normalized == 'positive':
            return mask
        if normalized == 'negative':
            return ~mask
        return Series([True] * len(index), index=index)

    def _mask_by_ruleset(self, index: pd.Index,
                         ruleset_filter: CaseFilter,
                         ruleset_positive_mask: "Series[bool]") -> "Series[bool]":
        normalized = self._validate_case_filter('ruleset', ruleset_filter)
        mask = ruleset_positive_mask.loc[index]
        if normalized == 'positive':
            return mask
        if normalized == 'negative':
            return ~mask
        return Series([True] * len(index), index=index)

    def _combine_case_filters(self,
                              case_log: DataFrame,
                              outcome: CaseFilter,
                              ruleset: CaseFilter,
                              ruleset_positive_mask: "Series[bool]") -> "Series[bool]":
        outcome_mask = self._mask_by_outcome(case_log.index, outcome)
        ruleset_mask = self._mask_by_ruleset(case_log.index, ruleset, ruleset_positive_mask)
        return outcome_mask & ruleset_mask

    def get_whole_case_log(self,
                           outcome: CaseFilter = 'any',
                           ruleset: CaseFilter = 'any') -> DataFrame:
        """Return the full original case log, optionally filtered.

        Filter semantics for this method:
        - `outcome='positive'|'negative'` filters by ground-truth outcome.
        - `ruleset='positive'|'negative'` filters by the stored ruleset
          evaluation over the full case log (`positive` means explained/
          matched by stored ruleset).
        - `outcome` and `ruleset` are combined with logical AND.

        Returns:
            DataFrame used to initialize this `InterOX` instance, filtered by
            `outcome` and `ruleset` if provided.

        Raises:
            ValueError: If either filter is not one of
                `{'any', 'positive', 'negative'}`.
        """
        combined_mask = self._combine_case_filters(
            self._case_log,
            outcome,
            ruleset,
            self._explained_cases
        )
        return self._case_log[combined_mask]

    def get_remaining_unexpl_case_log(self,
                                      outcome: CaseFilter = 'any',
                                      ruleset: CaseFilter = 'any') -> DataFrame:
        """Return the unclaimed cases, optionally filtered.

        Filter semantics for this method:
        - baseline subset is the unclaimed cases (no stored rule fires on
          them), negatives included.
        - `outcome='positive'|'negative'` filters by ground-truth outcome.
        - `ruleset='positive'|'negative'` filters by suggested ruleset
          evaluation on the unclaimed cases (`positive` means matched
          by suggested ruleset).
        - `outcome` and `ruleset` are combined with logical AND.

        Returns:
            Subset of the case log where stored rules currently evaluate to
            `False`, optionally filtered by `outcome` and suggested-ruleset
            evaluation.

        Raises:
            ValueError: If either filter is not one of
                `{'any', 'positive', 'negative'}`.
        """
        remaining_case_log = self._case_log[~self._explained_cases]
        suggested_ruleset_mask = remaining_case_log.apply(
            ruleset_to_lambda(self._suggested_ruleset), axis=1
        )
        combined_mask = self._combine_case_filters(
            remaining_case_log,
            outcome,
            ruleset,
            suggested_ruleset_mask
        )
        return remaining_case_log[combined_mask]

    def get_data_suggested_rule(self,
                                i: int,
                                outcome: CaseFilter = 'any',
                                pass_: bool = True) -> DataFrame:
        """Return unclaimed cases that pass/fail suggested rule `i`.

        Args:
            i: Index of the suggested rule.
            outcome: Ground-truth outcome filter (`any`, `positive`,
                or `negative`) applied before rule pass/fail filtering.
            pass_: If `True`, return cases where rule `i` evaluates to `True`.
                If `False`, return cases where rule `i` evaluates to `False`.

        Returns:
            DataFrame of unclaimed cases selected by pass/fail
            evaluation for suggested rule `i`.

        Raises:
            ValueError: If `i` is out of range for the suggested ruleset.
            ValueError: If `outcome` is not one of
                `{'any', 'positive', 'negative'}`.
        """
        num_rules = len(self._suggested_ruleset.conjunctions)
        self._validate_rule_index(i, num_rules, 'suggested')

        filtered_case_log = self.get_remaining_unexpl_case_log(outcome=outcome, ruleset='any')
        rule_mask = filtered_case_log.apply(
            rule_to_lambda(self._suggested_ruleset.conjunctions[i]), axis=1
        )
        return filtered_case_log[rule_mask] if pass_ else filtered_case_log[~rule_mask]

    def get_data_stored_rule(self,
                             i: int,
                             outcome: CaseFilter = 'any',
                             pass_: bool = True) -> DataFrame:
        """Return full-case-log data that pass/fail stored rule `i`.

        Args:
            i: Index of the stored rule.
            outcome: Ground-truth outcome filter (`any`, `positive`,
                or `negative`) applied before rule pass/fail filtering.
            pass_: If `True`, return cases where rule `i` evaluates to `True`.
                If `False`, return cases where rule `i` evaluates to `False`.

        Returns:
            DataFrame of full case-log rows selected by optional `outcome`
            filtering and pass/fail evaluation for stored rule `i`.

        Raises:
            ValueError: If `i` is out of range for the stored ruleset.
            ValueError: If `outcome` is not one of
                `{'any', 'positive', 'negative'}`.
        """
        num_rules = len(self._stored_ruleset.conjunctions)
        self._validate_rule_index(i, num_rules, 'stored')

        filtered_case_log = self.get_whole_case_log(outcome=outcome, ruleset='any')
        rule_mask = filtered_case_log.apply(
            rule_to_lambda(self._stored_ruleset.conjunctions[i]), axis=1
        )
        return filtered_case_log[rule_mask] if pass_ else filtered_case_log[~rule_mask]

    def get_data_stored_rule_by_id(self,
                                   iox_rule_id: int,
                                   outcome: CaseFilter = 'any',
                                   pass_: bool = True) -> DataFrame:
        """Return full-case-log data that pass/fail the stored rule with this id.

        See `get_data_stored_rule`.

        Raises:
            ValueError: If no stored rule carries this id.
        """
        return self.get_data_stored_rule(
            self._require_stored_index(iox_rule_id), outcome=outcome, pass_=pass_
        )

    def get_data_suggested_rule_by_id(self,
                                      iox_rule_id: int,
                                      outcome: CaseFilter = 'any',
                                      pass_: bool = True) -> DataFrame:
        """Return unclaimed cases that pass/fail the suggested rule with this
        id.

        See `get_data_suggested_rule`.

        Raises:
            ValueError: If no suggested rule carries this id.
        """
        return self.get_data_suggested_rule(
            self._require_suggested_index(iox_rule_id), outcome=outcome, pass_=pass_
        )
