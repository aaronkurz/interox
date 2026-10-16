# pylint: disable=missing-module-docstring, duplicate-code
import pathlib
import pandas as pd
import anywidget
import traitlets
from rulelearn_ri.trxf.core.predicate import Predicate, Relation
from rulelearn_ri.trxf.core.feature import Feature
from rulelearn_ri.trxf.core.dnf_ruleset import Conjunction
from rulelearn_ri.algorithms.ripper.single_rule import optimize_single_rule
from .helpers import conjunction_to_conditions, is_usable_feature_name


# Maps the operator strings sent from the JS widget to TRXF relations.
_NUM_RELATIONS = {
    '>=': Relation.GE,
    '<=': Relation.LE,
    '>': Relation.GT,
    '<': Relation.LT,
}


class RuleBuilderWidget(anywidget.AnyWidget): # pylint: disable=too-many-instance-attributes, abstract-method
    """An interactive widget for *building* a rule from scratch.

    The user drags or clicks attributes (ranked by tree-based importance) into
    a canvas and sets boundaries directly on each attribute's distribution
    (numerical) or picks values from count-ordered frequency bars
    (categorical). Conditions are combined with ``AND``.

    Mirroring the data architecture of the other widgets, the per-attribute
    histograms and frequency bars are pre-computed summaries sent from Python.
    Evaluation (precision / recall / TP / FP / FN / TN) is computed on the
    Python side against the supplied case log, and storing a rule is handled through a
    callback, analogous to the rule detail widget.

    ``eval_request``, ``optimize_request``, ``store_trigger`` and ``store_note``
    are frontend-owned; Python never writes them back, and the observers below
    ignore any request id they have already handled (see DEVELOPMENT.md,
    "Frontend-owned request traits"). ``loaded_rule`` goes the other way: it is
    how an existing rule is put on the canvas from Python (see
    :meth:`load_conditions`).
    """
    _esm = pathlib.Path(__file__).parent / "static" / "rule_builder.js"

    title = traitlets.Unicode(default_value="Rule Builder").tag(sync=True)
    outcome_name = traitlets.Unicode(default_value="outcome").tag(sync=True)
    # What the supplied case log is, as the footer names it after its counts
    # ("TP … TN 762 of 828 unclaimed cases").
    pool_label = traitlets.Unicode(default_value="cases").tag(sync=True)
    attributes = traitlets.List(default_value=[]).tag(sync=True) # type: ignore
    flash = traitlets.Unicode(default_value="").tag(sync=True)
    eval_request = traitlets.Dict(default_value={}).tag(sync=True)
    eval_result = traitlets.Dict(default_value={}).tag(sync=True)
    store_trigger = traitlets.Int(default_value=-1).tag(sync=True)
    store_result = traitlets.Dict(default_value={}).tag(sync=True)
    store_note = traitlets.Unicode(default_value="").tag(sync=True)
    optimize_request = traitlets.Dict(default_value={}).tag(sync=True)
    optimize_result = traitlets.Dict(default_value={}).tag(sync=True)
    loaded_rule = traitlets.Dict(default_value={}).tag(sync=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._case_log = None
        self._outcome = None
        self._store_callback = None
        self._eval_counter = 0
        self._store_counter = 0
        self._load_counter = 0
        self._handled_eval_id = None
        self._handled_optimize_id = None
        self._handled_store_trigger = -1

    def set_context(self, case_log, outcome, store_callback=None):
        """Provide the data the widget evaluates and stores rules against.

        Args:
            case_log: Feature table the built rule is evaluated on.
            outcome: Boolean target label per case (``True`` == positive).
            store_callback: Called with the assembled ``Conjunction`` when the
                user stores the rule.
        """
        self._case_log = case_log
        self._outcome = outcome
        self._store_callback = store_callback

    def load_conditions(self, conditions, label: str = '') -> None:
        """Put an existing rule on the canvas, replacing what is there.

        Whatever the user had built -- conditions, pins, note, evaluation -- is
        discarded; the loaded rule is then evaluated straight away, so the
        metrics shown are the loaded rule's own. Conditions on attributes this
        builder does not expose (a hidden feature, say) are dropped by the
        frontend rather than silently entering the rule.

        The ``load_id`` makes each load distinguishable from the last, so
        loading the same rule twice still reaches the canvas.

        Args:
            conditions: Condition dicts as produced by
                `helpers.conjunction_to_conditions`.
            label: Rule name, shown in the builder's confirmation toast.
        """
        self._load_counter += 1
        self.loaded_rule = {
            'conditions': list(conditions),
            'label': str(label),
            'load_id': self._load_counter,
        }

    # ------------------------------------------------------------------
    # condition -> mask / predicate helpers
    # ------------------------------------------------------------------
    def _conditions_mask(self, conditions) -> "pd.Series[bool]":
        mask = pd.Series(True, index=self._case_log.index)
        for cond in conditions:
            attr = cond.get('attr')
            if attr is None or attr not in self._case_log.columns:
                continue
            column = self._case_log[attr]
            op = cond.get('op')
            if op == 'range':
                numeric = pd.to_numeric(column, errors='coerce')
                lo = float(cond.get('lo'))
                hi = float(cond.get('hi'))
                mask &= (numeric >= lo) & (numeric <= hi)
            elif op in _NUM_RELATIONS:
                numeric = pd.to_numeric(column, errors='coerce')
                value = float(cond.get('value'))
                if op == '>=':
                    mask &= numeric >= value
                elif op == '<=':
                    mask &= numeric <= value
                elif op == '>':
                    mask &= numeric > value
                else:
                    mask &= numeric < value
            elif op == '==':
                mask &= column.astype(str) == str(cond.get('value'))
        return mask.fillna(False).astype(bool)

    def _attribute_impacts(self, conditions, explanation) -> list:
        """Per-attribute removal impact for the rule currently being evaluated.

        Mirrors ``DnfRuleAnalyzer.get_feature_impact_for_rule``: for each
        condition, drop it from the conjunction and count the cases that only
        the remaining conditions cover. Those are the cases the condition keeps
        out — split into positives (``tp_removed``) and negatives
        (``fp_removed``), so a condition that excludes many FPs and few TPs is
        earning its place in the rule.

        Entries are keyed by attribute id; the builder allows at most one
        condition per attribute, so the key is unique.
        """
        impacts = []
        for i, cond in enumerate(conditions):
            attr = cond.get('attr')
            if attr is None:
                continue
            others = [c for j, c in enumerate(conditions) if j != i]
            explanation_without = self._conditions_mask(others)
            newly_covered = explanation_without & ~explanation
            impacts.append({
                'attr': attr,
                'tp_removed': int((newly_covered & self._outcome).sum()),
                'fp_removed': int((newly_covered & ~self._outcome).sum()),
            })
        return impacts

    def _conditions_to_predicates(self, conditions) -> list:
        predicates = []
        for cond in conditions:
            attr = cond.get('attr')
            if attr is None:
                continue
            if not is_usable_feature_name(attr):
                # TRXF cannot parse the name into a Feature, so the condition
                # cannot be expressed as a predicate. Skipping keeps the rest of
                # the rule workable instead of raising out of the observer.
                print(f"[RuleBuilder] skipping {attr!r}: not a usable feature name")
                continue
            feature = Feature(attr)
            op = cond.get('op')
            if op == 'range':
                predicates.append(Predicate(feature, Relation.GE, float(cond.get('lo'))))
                predicates.append(Predicate(feature, Relation.LE, float(cond.get('hi'))))
            elif op in _NUM_RELATIONS:
                predicates.append(Predicate(feature, _NUM_RELATIONS[op], float(cond.get('value'))))
            elif op == '==':
                predicates.append(Predicate(feature, Relation.EQ, str(cond.get('value'))))
        return predicates

    # ------------------------------------------------------------------
    # trait observers
    # ------------------------------------------------------------------
    @traitlets.observe('eval_request')
    def _handle_eval_request(self, change):
        request = change.get('new', {})
        conditions = request.get('conditions', [])
        if not conditions or self._case_log is None or self._outcome is None:
            return

        request_id = request.get('request_id')
        if request_id is not None and request_id == self._handled_eval_id:
            return
        self._handled_eval_id = request_id

        if len(self._case_log) == 0:
            self._eval_counter += 1
            self.eval_result = {
                'precision': None, 'recall': None,
                'tp': 0, 'fp': 0, 'fn': 0, 'tn': 0,
                'total': 0,
                'importance': [],
                'eval_id': self._eval_counter,
            }
            return

        explanation = self._conditions_mask(conditions)
        tp = int((explanation & self._outcome).sum())
        fp = int((explanation & ~self._outcome).sum())
        fn = int((~explanation & self._outcome).sum())
        tn = int((~explanation & ~self._outcome).sum())

        # Precision is undefined when the rule matches nothing (no predicted
        # positives) and recall is undefined when there are no actual positives;
        # report these as ``None`` (shown as "–") rather than a misleading value.
        matched = tp + fp
        actual_positives = tp + fn
        precision = tp / matched if matched > 0 else None
        recall = tp / actual_positives if actual_positives > 0 else None

        importance = self._attribute_impacts(conditions, explanation)

        self._eval_counter += 1
        self.eval_result = {
            'precision': precision,
            'recall': recall,
            'tp': tp,
            'fp': fp,
            'fn': fn,
            'tn': tn,
            'total': int(len(self._case_log)),
            'importance': importance,
            'eval_id': self._eval_counter,
        }

    @traitlets.observe('optimize_request')
    def _handle_optimize_request(self, change):
        """Re-derive the rule with RIPPER under the constraints the user set.

        Three constraints reach the optimizer, and each says something different
        about one attribute: ``fixed_attributes`` (a pinned card) must appear
        with boundaries of the optimizer's choosing, ``fixed_predicates`` (a held
        boundary) must appear exactly as given, and ``forbidden_attributes`` must
        not appear at all. `optimize_single_rule` rejects an attribute that is
        both forced and forbidden; the builder makes that unreachable by keeping
        forbidden attributes off the canvas, and the ``except`` below turns any
        that slips through into a message rather than an exception out of the
        observer.

        A request carrying none of the three is ignored: an unconstrained run is
        rule induction, which the notebook already offers elsewhere.
        """
        request = change.get('new', {})
        if not request:
            return
        fixed_attributes = request.get('fixed_attributes', [])
        fixed_predicate_conditions = request.get('fixed_predicates', [])
        forbidden_attributes = request.get('forbidden_attributes', [])
        request_id = request.get('request_id', 0)
        if (not fixed_attributes and not fixed_predicate_conditions
                and not forbidden_attributes) \
                or self._case_log is None or self._outcome is None:
            return
        if request_id == self._handled_optimize_id:
            return
        self._handled_optimize_id = request_id
        try:
            # ``optimize_single_rule`` looks every forbidden name up in the
            # column index, so an attribute the case log does not have would
            # raise rather than simply constrain nothing. Same defence as in
            # `_conditions_mask`.
            forbidden = [attr for attr in forbidden_attributes
                         if attr in self._case_log.columns]
            fixed_predicates = self._conditions_to_predicates(fixed_predicate_conditions)
            conjunction = optimize_single_rule(
                self._case_log,
                self._outcome,
                target_label=True,
                fixed_attributes=fixed_attributes or None,
                fixed_predicates=fixed_predicates or None,
                forbidden_attributes=forbidden or None,
            )
            conditions = conjunction_to_conditions(conjunction)
            self.optimize_result = {'conditions': conditions, 'request_id': request_id}
        except Exception as exc:  # pylint: disable=broad-except
            self.optimize_result = {'conditions': [], 'request_id': request_id, 'error': str(exc)}

    @traitlets.observe('store_trigger')
    def _handle_store(self, change):
        trigger = change.get('new', -1)
        if trigger < 0 or self._store_callback is None:
            return
        if trigger <= self._handled_store_trigger:
            return
        self._handled_store_trigger = trigger

        conditions = self.eval_request.get('conditions', [])
        predicates = self._conditions_to_predicates(conditions)
        if not predicates:
            return

        conjunction = Conjunction(predicates)

        self._store_counter += 1
        result = self.eval_result if self.eval_result else {}
        self.store_result = {
            'stored': True,
            'precision': result.get('precision'),
            'recall': result.get('recall'),
            'store_id': self._store_counter,
        }

        self._store_callback(conjunction, self.store_note)
