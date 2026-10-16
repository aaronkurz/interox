# pylint: disable=missing-module-docstring
import pathlib
import numpy as np
import anywidget
import traitlets
from sklearn.metrics import precision_score, recall_score
from rulelearn_ri.trxf.core.predicate import Predicate
from rulelearn_ri.trxf.core.dnf_ruleset import Conjunction


class RuleDetailWidget(anywidget.AnyWidget): # pylint: disable=too-many-instance-attributes, abstract-method
    """A widget for displaying detailed information about a rule,
    including feature distributions, predicate boundaries,
    per-feature impact, and per-feature precision/recall.

    ``experiment_request``, ``store_experiment_trigger`` and ``store_note`` are
    frontend-owned; Python never writes them back, and the observers ignore any
    request id they have already handled (see DEVELOPMENT.md, "Frontend-owned
    request traits").
    """
    _esm = pathlib.Path(__file__).parent / "static" / "rule_detail.js"

    title = traitlets.Unicode(default_value="Rule Details").tag(sync=True)
    rule_data = traitlets.Dict(default_value={}).tag(sync=True)
    experiment_request = traitlets.Dict(default_value={}).tag(sync=True)
    experiment_result = traitlets.Dict(default_value={}).tag(sync=True)
    store_experiment_trigger = traitlets.Int(default_value=-1).tag(sync=True)
    store_note = traitlets.Unicode(default_value="").tag(sync=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._experiment_conjunction = None
        self._experiment_case_log = None
        self._experiment_outcome = None
        self._store_callback = None
        self._eval_counter = 0
        self._handled_request_id = None
        self._handled_store_trigger = -1

    def set_experiment_context(self, conjunction, case_log, outcome, store_callback=None):
        """Register the rule and data an experiment is evaluated against.

        Args:
            conjunction: The rule whose predicates the experiment varies.
            case_log: Cases the varied rule is evaluated on.
            outcome: Ground-truth outcome for those cases.
            store_callback: Called as ``store_callback(conjunction, note)`` when
                the user stores an experiment's rule.
        """
        self._experiment_conjunction = conjunction
        self._experiment_case_log = case_log
        self._experiment_outcome = outcome
        self._store_callback = store_callback

    @traitlets.observe('experiment_request')
    def _handle_experiment_request(self, change): # pylint: disable=too-many-locals, too-many-branches
        """Evaluate the varied rule the frontend asked about."""
        request = change.get('new', {})
        enabled_features = request.get('enabled_features', [])
        if not enabled_features or self._experiment_conjunction is None:
            return

        request_id = request.get('request_id')
        if request_id is not None and request_id == self._handled_request_id:
            return
        self._handled_request_id = request_id

        modified_boundaries = request.get('modified_boundaries', {})

        feat_preds = {}
        for pred in self._experiment_conjunction.predicates:
            feat = str(pred.feature)
            if feat not in feat_preds:
                feat_preds[feat] = []
            feat_preds[feat].append(pred)

        rule_str = ''
        for feat, preds in feat_preds.items():
            if feat not in enabled_features:
                continue
            mod_vals = modified_boundaries.get(feat, [])
            for idx, pred in enumerate(preds):
                if idx < len(mod_vals):
                    val = mod_vals[idx]
                    if isinstance(val, str):
                        try:
                            val = float(val)
                        except ValueError:
                            pass
                else:
                    val = pred.value

                if isinstance(val, (int, float)) and np.isfinite(float(val)):
                    val_repr = str(val)
                else:
                    val_repr = f'"{val}"'

                rule_str += f'(case[\'{feat}\'] {pred.relation.value} {val_repr}) & '

        rule_str = rule_str[:-3] if rule_str else 'True'
        # pylint: disable-next=eval-used,unnecessary-lambda-assignment
        rule_lambda = lambda case: eval(rule_str, {'__builtins__': {}}, {'case': case})

        explanation = self._experiment_case_log.apply(rule_lambda, axis=1)

        precision = precision_score(self._experiment_outcome, explanation,
                                    pos_label=True, zero_division=1)
        recall = recall_score(self._experiment_outcome, explanation,
                              pos_label=True)
        tp = int((explanation & self._experiment_outcome).sum())
        fp = int((explanation & ~self._experiment_outcome).sum())
        fn = int((~explanation & self._experiment_outcome).sum())

        self._eval_counter += 1
        self.experiment_result = {
            'precision': float(precision),
            'recall': float(recall),
            'tp': tp,
            'fp': fp,
            'fn': fn,
            'eval_id': self._eval_counter,
        }

    @traitlets.observe('store_experiment_trigger')
    def _handle_store_experiment(self, change):
        """Store the rule currently shown in the experiment panel."""
        trigger = change.get('new', -1)
        if trigger < 0 or self._store_callback is None:
            return
        if self._experiment_conjunction is None:
            return
        if trigger <= self._handled_store_trigger:
            return
        self._handled_store_trigger = trigger

        request = self.experiment_request
        enabled_features = request.get('enabled_features', [])
        if not enabled_features:
            return

        modified_boundaries = request.get('modified_boundaries', {})

        predicates = []
        for pred in self._experiment_conjunction.predicates:
            feat = str(pred.feature)
            if feat not in enabled_features:
                continue
            mod_vals = modified_boundaries.get(feat, [])
            pred_idx_in_feat = sum(
                1 for p in predicates if str(p.feature) == feat
            )
            if pred_idx_in_feat < len(mod_vals):
                val = mod_vals[pred_idx_in_feat]
                if isinstance(val, str):
                    try:
                        val = float(val)
                    except ValueError:
                        pass
            else:
                val = pred.value

            predicates.append(Predicate(pred.feature, pred.relation, val))

        new_conjunction = Conjunction(predicates)
        self._store_callback(new_conjunction, self.store_note)
