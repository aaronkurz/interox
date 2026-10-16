"""Cross-path invariant tests for the interox core.

Each test relates two *independent* code paths that must stay consistent, so a
future change that breaks one side without the other is caught. These all pass
against the current code; they are properties the code is supposed to satisfy,
not values read off it.
"""
import pytest
from rulelearn_ri.trxf.core import Conjunction, Relation
from interox import InterOX
from interox.rule_analyzer import DnfRuleAnalyzer
from interox.helpers import ruleset_to_lambda
from conftest import make_predicate, make_ruleset


def test_single_rule_overall_metrics_equal_per_rule(
        case_log, outcome, rule_age_and_dept):
    """For a one-rule ruleset, the whole-ruleset metrics must equal the sole rule's."""
    analyzer = DnfRuleAnalyzer(make_ruleset(rule_age_and_dept), case_log, outcome)
    per_rule = analyzer.get_metrics_per_rule()[0]
    overall = analyzer.get_ruleset_metrics()
    for key in ('tp', 'fp', 'fn', 'tn', 'precision', 'recall'):
        assert per_rule[key] == overall[key], key


def test_stored_rule_pass_fail_counts_match_confusion_matrix(
        case_log, outcome, rule_age_and_dept):
    """Cases passing a rule == TP+FP; cases failing it == FN+TN."""
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    metrics = iox._stored_ruleset_analyzer.get_metrics_per_rule()[0]
    assert len(iox.get_data_stored_rule(0, pass_=True)) == metrics['tp'] + metrics['fp']
    assert len(iox.get_data_stored_rule(0, pass_=False)) == metrics['fn'] + metrics['tn']


def test_ruleset_positive_filter_matches_covered_count(
        case_log, outcome, rule_age_and_dept):
    """Cases the stored ruleset marks positive == the ruleset's TP+FP."""
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    overall = iox._stored_ruleset_analyzer.get_ruleset_metrics()
    covered = iox.get_whole_case_log(ruleset='positive')
    assert len(covered) == overall['tp'] + overall['fp']


def test_storing_duplicate_rule_does_not_grow_ruleset(
        case_log, outcome, rule_age_and_dept):
    """A rule with an already-stored predicate set must not be added twice."""
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    assert iox.get_len_stored_ruleset() == 1
    # Same predicates, freshly built object.
    duplicate = Conjunction([
        make_predicate('age', Relation.GE, 65.0),
        make_predicate('dept', Relation.EQ, 'ER'),
    ])
    iox.store_rule_raw(duplicate)
    assert iox.get_len_stored_ruleset() == 1


def test_empty_ruleset_matches_no_cases(case_log):
    """A DNF ruleset with no conjunctions is a disjunction over nothing -> always False."""
    lam = ruleset_to_lambda(make_ruleset())
    assert case_log.apply(lam, axis=1).tolist() == [False] * len(case_log)


def test_more_than_two_predicates_per_feature_is_rejected(case_log, outcome):
    """Documented limitation: >2 predicates on one feature in feat-alignment raises."""
    triple = Conjunction([
        make_predicate('age', Relation.GE, 10.0),
        make_predicate('age', Relation.LE, 100.0),
        make_predicate('age', Relation.GT, 5.0),
    ])
    analyzer = DnfRuleAnalyzer(make_ruleset(triple), case_log, outcome)
    with pytest.raises(NotImplementedError):
        analyzer.get_ruleset_feat_aligned()
