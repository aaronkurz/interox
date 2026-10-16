"""A module for analyzing DNF rule sets in the context
of a filtered case log and an outcome variable."""
from typing import Callable, List, Union
import pandas as pd
from rulelearn_ri.trxf.core import DnfRuleSet
from sklearn.metrics import precision_score, recall_score
from .helpers import rule_to_lambda


class DnfRuleAnalyzer:
    """A class for analyzing DNF rule sets in the context
    of a filtered case log and an outcome variable."""
    def __init__(self, rule_set: DnfRuleSet, filtered_case_log: pd.DataFrame, outcome: pd.Series):
        self.rule_set: DnfRuleSet = rule_set
        self._filtered_case_log: pd.DataFrame = filtered_case_log
        self._outcome: pd.Series = outcome
        self._ruleset_feat_aligned: Union[pd.DataFrame, None] = None
        self._metrics_per_rule: Union[List[dict], None] = None
        self._ruleset_aligned_with_metrics: Union[pd.DataFrame, None] = None
        self._unique_tp_fp_per_rule: Union[dict, None] = None

    def _rule_lambdas(self) -> List[Callable[[pd.Series], bool]]:
        """One evaluation lambda per conjunction, in ruleset order."""
        return [rule_to_lambda(conjunction) for conjunction in self.rule_set.conjunctions]

    def get_ruleset_feat_aligned(self):
        """Get a DataFrame that contains the ruleset with one column per feature,
        where each cell contains the predicates for that feature in the rule
        (or empty if the rule does not contain that feature).
        
        This is useful for visualizing the ruleset in a way that is aligned by feature."""
        if self._ruleset_feat_aligned is not None:
            return self._ruleset_feat_aligned
        # extract features
        features = [str(predicate.feature)
                    for conjunction in self.rule_set.conjunctions
                        for predicate in conjunction.predicates]
        features = sorted(set(features))
        feat_rule_pred_str_table: dict[str, list[str]] = {feature: [] for feature in features}
        # For each conjunction and each feature, render the predicates that
        # conjunction places on that feature -- or an empty cell when it places
        # none, so every column stays one entry per rule.
        for conj in self.rule_set.conjunctions:
            for feature in features:
                if any(str(predicate.feature) == feature for predicate in conj.predicates):
                    rel_predicates = [predicate for predicate in conj
                                      .predicates if str(predicate.feature) == feature]
                    if len(rel_predicates) > 1:
                        if len(rel_predicates) == 2:
                            feat_rule_pred_str_table[feature].append(
                                ' & '.join(
                                    [
                                        str(predicate.relation.value) + ' ' + str(predicate.value)
                                            for predicate in rel_predicates
                                    ]
                                )
                            )
                        else:
                            raise NotImplementedError(
                                'More than 2 predicates for a feature is not supported yet.'
                            )
                    else:
                        feat_rule_pred_str_table[feature].append(
                            str(rel_predicates[0].relation.value) \
                                + ' ' + str(rel_predicates[0].value))
                else:
                    feat_rule_pred_str_table[feature].append('')
        feat_rule_pred_df = pd.DataFrame(feat_rule_pred_str_table)
        feat_rule_pred_df.index = [f'Rule {i}' for i in range(len(self.rule_set.conjunctions))]
        self._ruleset_feat_aligned = feat_rule_pred_df
        return feat_rule_pred_df

    def get_metrics_per_rule(self):
        """Calculate precision, recall, TP, FP, FN, TN for each rule in the rule set.

        Metrics are computed over the analyzer's own case log and outcome.

        Returns:
            list[dict]: One metrics dict per rule, in ruleset order.
        """
        if self._metrics_per_rule is not None:
            return self._metrics_per_rule

        metrics_per_rule = []
        for rule_lambda in self._rule_lambdas():
            explanation = self._filtered_case_log.apply(rule_lambda, axis=1)
            precision = precision_score(self._outcome, explanation, pos_label=True, zero_division=1)
            recall = recall_score(self._outcome, explanation, pos_label=True)
            cases_to_be_exp = len(self._filtered_case_log[self._outcome])
            tp = len(self._filtered_case_log[explanation & self._outcome])
            fp = len(self._filtered_case_log[explanation & ~self._outcome])
            assert tp + fp == len(self._filtered_case_log[explanation])
            fn = len(self._filtered_case_log[~explanation & self._outcome])
            tn = len(self._filtered_case_log[~explanation & ~self._outcome])
            assert tp + fp + fn + tn == len(self._filtered_case_log)
            metrics_per_rule.append({
                'precision': precision,
                'recall': recall,
                'tp': tp,
                'fp': fp,
                'fn': fn,
                'tn': tn,
                'n_cases': cases_to_be_exp,
            })
        self._metrics_per_rule = metrics_per_rule
        return metrics_per_rule

    def get_ruleset_aligned_with_metrics(self):
        """Get a DataFrame that contains the ruleset aligned with the metrics for each rule.
        for each rule, first all columns with all the metrics, and then the
        columns with the predicates for each feature.
        """
        if self._ruleset_aligned_with_metrics is not None:
            return self._ruleset_aligned_with_metrics
        if len(self.rule_set.list_conjunctions()) == 0:
            return pd.DataFrame()  # Return an empty DataFrame if there are no rules
        metrics_per_rule = self.get_metrics_per_rule()
        ruleset_feat_aligned = self.get_ruleset_feat_aligned()

        metrics_df = pd.DataFrame(metrics_per_rule)
        metrics_df = metrics_df[['precision', 'recall', 'tp', 'fp', 'fn', 'tn']].rename(columns={
            'precision': 'Precision',
            'recall': 'Recall',
            'tp': 'TP',
            'fp': 'FP',
            'fn': 'FN',
            'tn': 'TN',
        })
        metrics_df.index = [f'Rule {i}' for i in range(len(metrics_df))]

        assert len(metrics_df) == len(ruleset_feat_aligned), \
            'Metrics and ruleset tables must have equal row counts.'
        assert list(metrics_df.index) == list(ruleset_feat_aligned.index), \
            'Metrics and ruleset indices are misaligned.'

        self._ruleset_aligned_with_metrics = pd.concat([metrics_df, ruleset_feat_aligned], axis=1)
        return self._ruleset_aligned_with_metrics

    def get_feature_impact_for_rule(self, rule_index: int): # pylint: disable=too-many-locals
        """Get per-feature impact for one rule by removing all predicates of each feature.
        Args:
            rule_index (int): The index of the rule in the rule set.
            Returns:
                pd.DataFrame: A table with one row per feature showing how many additional
                TP/FP cases become covered when that feature is removed from the rule.
        """
        if rule_index < 0 or rule_index >= len(self.rule_set.conjunctions):
            raise ValueError('Rule index out of range.')
        # Create one row per feature and remove all predicates of that feature together.
        rule_to_analyze = self.rule_set.conjunctions[rule_index]
        analysis_table = pd.DataFrame()
        if len(rule_to_analyze.predicates) == 0:
            print(f"Rule {rule_index} has no predicates, no analysis to be done.")
        else:
            feature_to_predicates: dict[str, list[str]] = {}
            feature_to_values: dict[str, list] = {}
            for predicate in rule_to_analyze.predicates:
                feature = str(predicate.feature)
                feature_to_predicates.setdefault(feature, []).append(str(predicate))
                # As the predicate carries it: RIPPER and the rule builder type
                # values already (float for a numeric condition, str for a
                # nominal one), and coercing here would report the category
                # 'nan' as a float and '1e3' as 1000.0.
                feature_to_values.setdefault(feature, []).append(predicate.value)

            baseline_explanation = self._filtered_case_log.apply(
                rule_to_lambda(rule_to_analyze), axis=1
            )
            rows = []
            for feature, predicate_descriptions in feature_to_predicates.items():
                explanation_without_feature = self._filtered_case_log.apply(
                    rule_to_lambda(rule_to_analyze, skip_feature=feature),
                    axis=1,
                )
                cases_newly_covered_without_feature = \
                    explanation_without_feature & ~baseline_explanation
                unique_tps_removed = \
                    len(self._filtered_case_log[
                            cases_newly_covered_without_feature & self._outcome
                        ])
                unique_fps_removed = \
                    len(self._filtered_case_log[
                            cases_newly_covered_without_feature & ~self._outcome
                        ])
                rows.append({
                    'Feature': feature,
                    'Predicates Removed': ' & '.join(predicate_descriptions),
                    'Predicate Values': feature_to_values.get(feature, []),
                    'Unique TPs Removed': unique_tps_removed,
                    'Unique FPs Removed': unique_fps_removed,
                })
            analysis_table = pd.DataFrame(
                rows,
                columns=['Feature',
                         'Predicates Removed',
                         'Predicate Values',
                         'Unique TPs Removed',
                         'Unique FPs Removed'],
            )

        return analysis_table

    def get_per_feature_metrics_for_rule(self, rule_index: int):
        """Calculate precision and recall for each feature's predicates alone (as a
        standalone micro-rule) within a given rule.

        Args:
            rule_index (int): The index of the rule in the rule set.
        Returns:
            pd.DataFrame: A DataFrame with columns Feature, Precision, Recall.
        """
        if rule_index < 0 or rule_index >= len(self.rule_set.conjunctions):
            raise ValueError('Rule index out of range.')
        rule = self.rule_set.conjunctions[rule_index]
        feature_to_predicates: dict[str, list] = {}
        for predicate in rule.predicates:
            feature_to_predicates.setdefault(str(predicate.feature), []).append(predicate)

        rows = []
        for feature in feature_to_predicates:
            explanation = self._filtered_case_log.apply(
                rule_to_lambda(rule, only_feature=feature), axis=1
            )
            precision = precision_score(self._outcome, explanation, pos_label=True, zero_division=1)
            recall = recall_score(self._outcome, explanation, pos_label=True)
            rows.append({
                'Feature': feature,
                'Precision': float(precision),
                'Recall': float(recall),
            })

        return pd.DataFrame(rows, columns=['Feature', 'Precision', 'Recall'])

    def get_unique_TP_FP_per_rule(self): # pylint: disable=invalid-name, too-many-locals
        """Get the unique TP, FP cases for each rule in the rule set.
        Returns:
            dict: A dictionary containing the unique TP, FP cases for each rule.
        """
        if self._unique_tp_fp_per_rule is not None:
            return self._unique_tp_fp_per_rule
        cases_per_rule = {}
        for i, rule_lambda in enumerate(self._rule_lambdas()):
            explanation = self._filtered_case_log.apply(rule_lambda, axis=1)
            cases_per_rule[i] = {
                'tp_cases': self._filtered_case_log[explanation & self._outcome],
                'fp_cases': self._filtered_case_log[explanation & ~self._outcome],
            }

        unique_cases_per_rule = {}
        for rule_index, cases in cases_per_rule.items():
            other_tp_cases_indices = pd.Index([])
            other_fp_cases_indices = pd.Index([])

            for other_rule_index, other_cases in cases_per_rule.items():
                if rule_index != other_rule_index:
                    other_tp_cases_indices = \
                        other_tp_cases_indices.union(other_cases['tp_cases'].index)
                    other_fp_cases_indices = \
                        other_fp_cases_indices.union(other_cases['fp_cases'].index)

            unique_tp_cases = cases['tp_cases'][~cases['tp_cases']
                                                .index.isin(other_tp_cases_indices)]
            unique_fp_cases = cases['fp_cases'][~cases['fp_cases']
                                                .index.isin(other_fp_cases_indices)]

            unique_cases_per_rule[rule_index] = {
                'unique_tp_cases': unique_tp_cases,
                'unique_fp_cases': unique_fp_cases
            }

        self._unique_tp_fp_per_rule = unique_cases_per_rule
        return unique_cases_per_rule

    def get_ruleset_metrics(self):
        """ Get the metrics for overall ruleset, not per rule. This includes
        precision, recall, TP, FP, FN, TN for the entire ruleset."""
        explanations = [self._filtered_case_log.apply(rule_lambda, axis=1)
                        for rule_lambda in self._rule_lambdas()]
        if not explanations:
            explanation = pd.Series(False, index=self._filtered_case_log.index)
        else:
            explanation = pd.concat(explanations, axis=1).any(axis=1)

        precision = precision_score(self._outcome, explanation, pos_label=True, zero_division=1)
        recall = recall_score(self._outcome, explanation, pos_label=True)
        cases_to_be_exp = len(self._filtered_case_log[self._outcome])
        tp = len(self._filtered_case_log[explanation & self._outcome])
        fp = len(self._filtered_case_log[explanation & ~self._outcome])
        fn = len(self._filtered_case_log[~explanation & self._outcome])
        tn = len(self._filtered_case_log[~explanation & ~self._outcome])

        return {
            'precision': precision,
            'recall': recall,
            'tp': tp,
            'fp': fp,
            'fn': fn,
            'tn': tn,
            'n_cases': cases_to_be_exp,
        }
