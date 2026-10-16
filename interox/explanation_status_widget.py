# pylint: disable=missing-module-docstring
import pathlib
import anywidget
import traitlets


class ExplanationStatusWidget(anywidget.AnyWidget): # pylint: disable=too-few-public-methods, abstract-method
    """A widget for displaying the status of an outcome explanation
    in terms of remaining (FN), explained (TP) and wrongly claimed (FP) cases,
    the negatives the explanation leaves alone (TN), and the number of rules the
    explanation is currently made of.

    The four case counts partition the case log, which lets the frontend draw
    the flow from the case log through the rule set to the prediction. All
    traits are Python-owned; the frontend never writes back."""
    _esm = pathlib.Path(__file__).parent / "static" / "explanation_status.js"

    cases_tbe = traitlets.Int(default_value=0).tag(sync=True)
    exp_tp = traitlets.Int(default_value=0).tag(sync=True)
    exp_fp = traitlets.Int(default_value=0).tag(sync=True)
    exp_tn = traitlets.Int(default_value=0).tag(sync=True)
    stored_rules = traitlets.Int(default_value=0).tag(sync=True)
