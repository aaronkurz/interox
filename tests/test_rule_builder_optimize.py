"""Tests for the rule builder's optimize request, the three-constraint path.

The builder hands RIPPER three kinds of constraint about one attribute:
``fixed_attributes`` (pinned — must appear), ``fixed_predicates`` (held boundary —
must appear as given) and ``forbidden_attributes`` (must not appear at all). Only
the last is exercised here; the first two are covered by their own behaviour in
the widget and by rulelearn's own suite.

As in `test_rule_edit_transfer`, the widget is driven without a kernel: assign
`optimize_request` and read `optimize_result`.
"""
import pytest

from interox import InterOX


@pytest.fixture
def builder(case_log, outcome):
    """A rule builder over the whole 8-row fixture case log."""
    return InterOX(outcome, case_log).get_rule_builder(scope='all')


def request_optimize(builder, request_id=1, **constraints) -> dict:
    """Send one optimize request and hand back whatever came out."""
    builder.optimize_request = {'request_id': request_id, **constraints}
    return builder.optimize_result


def attrs_of(result) -> list:
    return [condition['attr'] for condition in result['conditions']]


def test_a_forbidden_attribute_stays_out_of_the_optimized_rule(builder):
    """Forbidding alone is constraint enough to run, and RIPPER honours it."""
    result = request_optimize(builder, forbidden_attributes=['age'])

    assert result.get('error') is None
    assert result['conditions'], 'the remaining attribute should still yield a rule'
    assert 'age' not in attrs_of(result)


def test_forbidding_is_compatible_with_pinning_another_attribute(builder):
    """The two constraints coexist as long as they name different attributes."""
    result = request_optimize(builder, fixed_attributes=['dept'],
                              forbidden_attributes=['age'])

    assert result.get('error') is None
    assert 'dept' in attrs_of(result)
    assert 'age' not in attrs_of(result)


def test_forbidding_a_pinned_attribute_is_reported_not_raised(builder):
    """`optimize_single_rule` rejects the clash; the observer must not blow up.

    The builder makes this unreachable by keeping forbidden attributes off the
    canvas, so this is the backstop for a request that says both anyway.
    """
    result = request_optimize(builder, fixed_attributes=['age'],
                              forbidden_attributes=['age'])

    assert result['conditions'] == []
    assert 'age' in result['error']


def test_an_unknown_column_is_dropped_rather_than_raising(builder):
    """A stale attribute id constrains nothing instead of failing the lookup."""
    result = request_optimize(builder, fixed_attributes=['dept'],
                              forbidden_attributes=['no_such_column'])

    assert result.get('error') is None
    assert 'dept' in attrs_of(result)


def test_a_request_with_no_constraint_at_all_is_ignored(builder):
    """An unconstrained run is rule induction, which the notebook offers already."""
    request_optimize(builder, fixed_attributes=[], fixed_predicates=[],
                     forbidden_attributes=[])

    assert builder.optimize_result == {}


def test_forbidding_every_attribute_yields_no_rule_rather_than_an_error(builder):
    """Nothing left to grow from is an empty result, not a failure."""
    result = request_optimize(builder, forbidden_attributes=['age', 'dept'])

    assert result.get('error') is None
    assert result['conditions'] == []
