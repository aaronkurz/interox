"""Specification-based tests for interox.helpers.rule_to_lambda.

These assert how rule evaluation is *supposed* to behave, independent of the
current implementation. They were written against an implementation that built a
Python expression string and ``eval``d it, and the four cases below were marked
``xfail`` for as long as it did: interpolating a value into source text cannot
distinguish the category ``'nan'`` from the float, nor survive a quote in a
value or a feature name. ``rule_to_lambda`` now compares values directly, so
they pass -- and they are the reason to keep comparing rather than rendering.
"""
import pandas as pd
from rulelearn_ri.trxf.core import Conjunction, Relation
from conftest import make_predicate


def _matches(df, feature, relation, value):
    """Evaluate a single-predicate rule over ``df`` and return the boolean mask."""
    from interox.helpers import rule_to_lambda  # local import: keeps xfail failures here
    lam = rule_to_lambda(Conjunction([make_predicate(feature, relation, value)]))
    return df.apply(lam, axis=1).tolist()


# --- values and names that carry no special meaning ------------------------

def test_categorical_value_with_space_matches():
    df = pd.DataFrame({'dept': ['Emergency Room', 'ICU']})
    assert _matches(df, 'dept', Relation.EQ, 'Emergency Room') == [True, False]


def test_feature_name_with_space_matches():
    df = pd.DataFrame({'my dept': ['ER', 'ICU']})
    assert _matches(df, 'my dept', Relation.EQ, 'ER') == [True, False]


def test_categorical_value_with_double_quote_matches():
    df = pd.DataFrame({'dept': ['A"B', 'CD']})
    assert _matches(df, 'dept', Relation.EQ, 'A"B') == [True, False]


def test_categorical_value_nan_string_matches():
    """`astype('str')` renders a missing value as the category 'nan', which is a
    perfectly ordinary string and must not be confused with the float."""
    df = pd.DataFrame({'dept': ['nan', 'ER']})
    assert _matches(df, 'dept', Relation.EQ, 'nan') == [True, False]


def test_numeric_looking_string_category_matches():
    df = pd.DataFrame({'dept': ['1e3', 'ER']})
    assert _matches(df, 'dept', Relation.EQ, '1e3') == [True, False]


def test_feature_name_with_apostrophe_matches():
    df = pd.DataFrame({"de'pt": ['ER', 'ICU']})
    assert _matches(df, "de'pt", Relation.EQ, 'ER') == [True, False]
