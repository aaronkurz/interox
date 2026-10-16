"""
# InterOX: Interactive Outcome Explanation for Case Logs

`interox` exposes the `InterOX` class, which supports iterative, rule-based
outcome explanation over a case log. The workflow is typically:

1. Inspect explanation progress.
2. Compare stored and suggested rules.
3. Store rules that improve coverage.
4. Optionally hide or unhide features and re-induce suggestions.

Start here
----------
- `InterOX.get_exp_status` — where the explanation stands.
- `InterOX.get_stored_ruleset` / `InterOX.get_suggested_ruleset` — the two
  rulesets, with metrics, as table widgets.
- `InterOX.get_rule_builder` — build a rule from scratch instead of taking a
  suggested one.
- `InterOX.send_rule_to_builder` — take a suggested rule into that builder to
  adjust it before storing (the ✎ button on a suggested row).
- `InterOX.store_rule_by_id` / `InterOX.remove_rule_by_id` — change the stored
  ruleset; both re-induce suggestions.

A rule is addressed by its **stable id**, which survives re-induction and
reordering: prefer the `*_by_id` methods over the positional ones of the same
name. `InterOX.get_stored_rule_options` maps rule names to those ids.

The rest of the class -- rule detail widgets, annotations, hidden features, and
the `get_*_case_log` / `get_data_*` accessors for analysis outside the provided
widgets -- is documented on the methods themselves, below.
"""
import logging
from .interox import InterOX

logging.getLogger(__name__).addHandler(logging.NullHandler())

__all__ = ["InterOX"]
