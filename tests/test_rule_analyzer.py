"""Tests for interox.rule_analyzer.DnfRuleAnalyzer (the metrics engine).

All expectations are hand-derived from the synthetic case log in conftest and
verified independently; no RIPPER involvement, so these are fast.
"""
import pandas as pd
import pytest
from rulelearn_ri.trxf.core import Conjunction, Relation
from interox.rule_analyzer import DnfRuleAnalyzer
from conftest import make_predicate, make_ruleset


def test_metrics_per_rule_exact(case_log, outcome, rule_age_and_dept, rule_dept_only):
    ruleset = make_ruleset(rule_age_and_dept, rule_dept_only)
    metrics = DnfRuleAnalyzer(ruleset, case_log, outcome).get_metrics_per_rule()

    # Rule 0: age>=65 & dept==ER -> covers {0,1,4}, misses positive 6.
    assert (metrics[0]['tp'], metrics[0]['fp'], metrics[0]['fn'], metrics[0]['tn']) \
        == (3, 0, 1, 4)
    assert metrics[0]['precision'] == 1.0
    assert metrics[0]['recall'] == 0.75

    # Rule 1: dept==ER -> also picks up negatives 2 and 7 as false positives.
    assert (metrics[1]['tp'], metrics[1]['fp'], metrics[1]['fn'], metrics[1]['tn']) \
        == (3, 2, 1, 2)
    assert metrics[1]['precision'] == pytest.approx(0.6)
    assert metrics[1]['recall'] == 0.75


def test_ruleset_metrics_overall(case_log, outcome, rule_age_and_dept, rule_dept_only):
    ruleset = make_ruleset(rule_age_and_dept, rule_dept_only)
    overall = DnfRuleAnalyzer(ruleset, case_log, outcome).get_ruleset_metrics()
    # Union of the two rules equals the broader dept==ER rule.
    assert (overall['tp'], overall['fp'], overall['fn'], overall['tn']) == (3, 2, 1, 2)
    assert overall['precision'] == pytest.approx(0.6)
    assert overall['recall'] == 0.75


def test_empty_ruleset_metrics_do_not_raise(case_log, outcome):
    overall = DnfRuleAnalyzer(make_ruleset(), case_log, outcome).get_ruleset_metrics()
    assert overall['tp'] == 0 and overall['fp'] == 0
    assert overall['recall'] == 0.0  # nothing explained


def test_unique_tp_fp_dedup_across_overlapping_rules(
        case_log, outcome, rule_age_and_dept, rule_dept_only):
    ruleset = make_ruleset(rule_age_and_dept, rule_dept_only)
    unique = DnfRuleAnalyzer(ruleset, case_log, outcome).get_unique_TP_FP_per_rule()

    # Both rules cover the same TPs {0,1,4}, so neither has a unique TP.
    assert list(unique[0]['unique_tp_cases'].index) == []
    assert list(unique[1]['unique_tp_cases'].index) == []
    # Rule 0 has no FPs; the FPs {2,7} are unique to rule 1.
    assert list(unique[0]['unique_fp_cases'].index) == []
    assert sorted(unique[1]['unique_fp_cases'].index) == [2, 7]


def test_feature_impact_leave_one_out(case_log, outcome, rule_age_and_dept):
    analyzer = DnfRuleAnalyzer(make_ruleset(rule_age_and_dept), case_log, outcome)
    impact = analyzer.get_feature_impact_for_rule(0).set_index('Feature')

    # Dropping the age predicate widens the rule to dept==ER, exposing FPs 2 and 7.
    assert impact.loc['age', 'Unique TPs Removed'] == 0
    assert impact.loc['age', 'Unique FPs Removed'] == 2
    # Dropping the dept predicate widens to age>=65, exposing the ICU positive (6).
    assert impact.loc['dept', 'Unique TPs Removed'] == 1
    assert impact.loc['dept', 'Unique FPs Removed'] == 0


def test_feature_impact_out_of_range(case_log, outcome, rule_age_and_dept):
    analyzer = DnfRuleAnalyzer(make_ruleset(rule_age_and_dept), case_log, outcome)
    with pytest.raises(ValueError):
        analyzer.get_feature_impact_for_rule(5)


def test_aligned_metrics_empty_ruleset_is_empty_frame(case_log, outcome):
    analyzer = DnfRuleAnalyzer(make_ruleset(), case_log, outcome)
    assert analyzer.get_ruleset_aligned_with_metrics().empty


# --- categories that look like numbers --------------------------------------

def test_aligned_metrics_over_a_nan_string_category(outcome):
    """The path the notebook crashed on: a rule on the category 'nan'.

    A case log normalized with `astype('str')` renders every missing
    categorical as the string 'nan', and missingness is predictive often enough
    that RIPPER builds rules on it. Rendering that value into an expression to
    `eval` raised `NameError: name 'nan' is not defined` here.
    """
    log = pd.DataFrame({'dept': ['nan', 'nan', 'ER', 'ICU', 'nan', 'ER', 'nan', 'ER']})
    ruleset = make_ruleset(Conjunction([make_predicate('dept', Relation.EQ, 'nan')]))
    analyzer = DnfRuleAnalyzer(ruleset, log, outcome)

    aligned = analyzer.get_ruleset_aligned_with_metrics()
    assert len(aligned) == 1
    # Positives are 0,1,4,6; 'nan' covers 0,1,4,6 exactly.
    assert analyzer.get_metrics_per_rule()[0]['tp'] == 4
    assert analyzer.get_metrics_per_rule()[0]['fp'] == 0


def test_feature_impact_reports_the_value_uncoerced(outcome):
    """'nan' and '1e3' are categories, and the analysis table has to say so
    rather than reporting them as float nan and 1000.0."""
    log = pd.DataFrame({'dept': ['nan', 'nan', 'ER', 'ICU', 'nan', 'ER', 'nan', '1e3']})
    ruleset = make_ruleset(Conjunction([make_predicate('dept', Relation.EQ, 'nan')]))
    impact = DnfRuleAnalyzer(ruleset, log, outcome).get_feature_impact_for_rule(0)
    assert impact.set_index('Feature').loc['dept', 'Predicate Values'] == ['nan']
