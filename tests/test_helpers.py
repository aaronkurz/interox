"""Tests for interox.helpers: rule/ruleset -> lambda evaluation."""
import numpy as np
import pandas as pd
import pytest
from rulelearn_ri.trxf.core import Conjunction, Relation
from interox.helpers import (
    rule_to_lambda,
    ruleset_to_lambda,
)
from conftest import make_predicate, make_ruleset


def test_rule_to_lambda_numeric_predicate(case_log):
    lam = rule_to_lambda(Conjunction([make_predicate('age', Relation.GE, 65.0)]))
    result = case_log.apply(lam, axis=1).tolist()
    # ages: 70,80,60,40,66,30,90,NaN  ->  >=65 for 0,1,4,6 (NaN compares False)
    assert result == [True, True, False, False, True, False, True, False]


def test_rule_to_lambda_string_predicate(case_log):
    lam = rule_to_lambda(Conjunction([make_predicate('dept', Relation.EQ, 'ER')]))
    result = case_log.apply(lam, axis=1).tolist()
    assert result == [True, True, True, False, True, False, False, True]


def test_rule_to_lambda_negated_nan_category():
    """`!=` against the category 'nan' is the usual way a rule says "this
    attribute was recorded", so it has to compare as a string like any other."""
    df = pd.DataFrame({'dept': ['nan', 'ER', 'nan', 'ICU']})
    lam = rule_to_lambda(Conjunction([make_predicate('dept', Relation.NEQ, 'nan')]))
    assert df.apply(lam, axis=1).tolist() == [False, True, False, True]


def test_rule_to_lambda_numeric_predicate_over_real_nan():
    """A genuine float NaN in a numeric column: every comparison is False, and
    none of them raise."""
    df = pd.DataFrame({'crp': [10.0, np.nan, 200.0]})
    for relation in (Relation.GE, Relation.LE, Relation.GT, Relation.LT, Relation.EQ):
        lam = rule_to_lambda(Conjunction([make_predicate('crp', relation, 50.0)]))
        assert df.apply(lam, axis=1).tolist()[1] is False, relation


def test_rule_to_lambda_missing_column_raises(case_log):
    lam = rule_to_lambda(Conjunction([make_predicate('not_a_column', Relation.EQ, 'x')]))
    with pytest.raises(KeyError):
        case_log.apply(lam, axis=1)


def test_rule_to_lambda_conjunction(case_log, rule_age_and_dept):
    lam = rule_to_lambda(rule_age_and_dept)
    result = case_log.apply(lam, axis=1).tolist()
    assert result == [True, True, False, False, True, False, False, False]


def test_rule_to_lambda_skip_feature(case_log, rule_age_and_dept):
    # Dropping the age predicate leaves `dept == 'ER'`.
    lam = rule_to_lambda(rule_age_and_dept, skip_feature='age')
    result = case_log.apply(lam, axis=1).tolist()
    assert result == [True, True, True, False, True, False, False, True]


def test_rule_to_lambda_only_feature(case_log, rule_age_and_dept):
    # Keeping only the age predicate leaves `age >= 65`.
    lam = rule_to_lambda(rule_age_and_dept, only_feature='age')
    result = case_log.apply(lam, axis=1).tolist()
    assert result == [True, True, False, False, True, False, True, False]


def test_rule_to_lambda_skip_and_only_are_mutually_exclusive(rule_age_and_dept):
    with pytest.raises(ValueError):
        rule_to_lambda(rule_age_and_dept, skip_feature='age', only_feature='dept')


def test_rule_to_lambda_empty_conjunction_is_true(case_log):
    lam = rule_to_lambda(Conjunction([]))
    assert case_log.apply(lam, axis=1).tolist() == [True] * len(case_log)


def test_ruleset_to_lambda_is_disjunction(case_log, rule_age_and_dept, rule_dept_only):
    # age>=65&ER covers {0,1,4}; dept==ER covers {0,1,2,4,7}; OR == dept==ER here.
    ruleset = make_ruleset(rule_age_and_dept, rule_dept_only)
    lam = ruleset_to_lambda(ruleset)
    result = case_log.apply(lam, axis=1).tolist()
    assert result == [True, True, True, False, True, False, False, True]
