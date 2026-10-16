"""Shared fixtures for the interox test suite.

The synthetic case log below is intentionally small and hand-verifiable so that
metric assertions (TP/FP/FN/TN, precision/recall, unique coverage) can be spelled
out as exact literals in the tests rather than recomputed by the code under test.

Layout of the case log (index 0..7):

    idx  age   dept  returns
    0     70   ER    True     <- covered by "age>=65 & dept==ER"
    1     80   ER    True     <-   "
    2     60   ER    False
    3     40   ICU   False
    4     66   ER    True     <-   "
    5     30   ICU   False
    6     90   ICU   True     <- positive but ICU (not covered by ER rules)
    7    NaN   ER    False    <- missing age, exercises dropna paths
"""
import numpy as np
import pandas as pd
import pytest
from rulelearn_ri.trxf.core import Conjunction, DnfRuleSet, Predicate, Relation


def make_predicate(feature: str, relation: Relation, value):
    """Build a single trxf predicate."""
    return Predicate(feature, relation, value)


def make_ruleset(*conjunctions: Conjunction) -> DnfRuleSet:
    """Build a DNF ruleset from conjunctions (``then_part=1`` as in production)."""
    return DnfRuleSet(list(conjunctions), then_part=1)


@pytest.fixture
def case_log() -> pd.DataFrame:
    """8-row case log with one numeric and one categorical feature."""
    return pd.DataFrame({
        'age':  [70, 80, 60, 40, 66, 30, 90, np.nan],
        'dept': ['ER', 'ER', 'ER', 'ICU', 'ER', 'ICU', 'ICU', 'ER'],
    })


@pytest.fixture
def outcome() -> "pd.Series[bool]":
    """Boolean target aligned to ``case_log``. Positives are cases 0, 1, 4, 6."""
    return pd.Series(
        [True, True, False, False, True, False, True, False], name='returns'
    )


@pytest.fixture
def rule_age_and_dept() -> Conjunction:
    """`age >= 65 & dept == 'ER'` — perfect precision, recall 0.75 on the fixtures."""
    return Conjunction([
        make_predicate('age', Relation.GE, 65.0),
        make_predicate('dept', Relation.EQ, 'ER'),
    ])


@pytest.fixture
def rule_dept_only() -> Conjunction:
    """`dept == 'ER'` — broader rule that fully overlaps ``rule_age_and_dept``'s TPs."""
    return Conjunction([make_predicate('dept', Relation.EQ, 'ER')])
