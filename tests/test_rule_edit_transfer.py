"""Tests for sending a suggested rule to the rule builder to be edited.

The transfer is the one path that links two widgets: the ruleset table's edit
action asks `InterOX` to write the rule into the rule builder widget the notebook
is currently showing. Everything here runs without a kernel -- the widgets are
driven by assigning their request traits and reading the traits they publish.
"""
import pytest
from rulelearn_ri.trxf.core import Conjunction, Relation

from interox import InterOX
from interox.helpers import conjunction_to_conditions
from interox.ruleset_table_widget import RulesetTableWidget
from conftest import make_predicate


# --- conjunction_to_conditions ----------------------------------------------

def test_a_ge_le_pair_on_one_feature_becomes_a_single_range():
    conditions = conjunction_to_conditions(Conjunction([
        make_predicate('age', Relation.GE, 65.0),
        make_predicate('age', Relation.LE, 80.0),
    ]))
    assert conditions == [{'attr': 'age', 'op': 'range', 'lo': 65.0, 'hi': 80.0}]


def test_a_lone_bound_keeps_its_own_operator(rule_age_and_dept):
    assert conjunction_to_conditions(rule_age_and_dept) == [
        {'attr': 'age', 'op': '>=', 'value': 65.0},
        {'attr': 'dept', 'op': '==', 'value': 'ER'},
    ]


def test_a_negation_is_dropped_because_the_builder_cannot_express_it():
    """A categorical condition on the canvas is `==` only, so NEQ has nowhere to go.

    RIPPER's literals are LE/GE/EQ -- it neither induces a negation nor accepts
    one as a fixed predicate -- so the builder does not offer `!=` to author. A
    NEQ arriving from elsewhere is dropped the same way LT and GT are, rather
    than raising or landing on the canvas as an operator nothing can render.
    `rule_to_lambda` still evaluates NEQ; this is only about what is editable.
    """
    conditions = conjunction_to_conditions(Conjunction([
        make_predicate('age', Relation.LE, 40.0),
        make_predicate('dept', Relation.NEQ, 'ICU'),
    ]))
    assert conditions == [{'attr': 'age', 'op': '<=', 'value': 40.0}]


def test_the_conversion_round_trips_through_the_builder(case_log, outcome,
                                                        rule_age_and_dept):
    """What comes out of a rule goes back in as the same rule.

    Compared as conditions rather than as conjunctions: the builder always names
    its features with a `Feature`, and a hand-built predicate may carry a bare
    string, which `Predicate.__eq__` counts as different.
    """
    iox = InterOX(outcome, case_log)
    builder = iox.get_rule_builder()
    conditions = conjunction_to_conditions(rule_age_and_dept)

    predicates = builder._conditions_to_predicates(  # pylint: disable=protected-access
        conditions)
    assert conjunction_to_conditions(Conjunction(predicates)) == conditions


# --- InterOX.send_rule_to_builder -------------------------------------------

@pytest.fixture
def iox(case_log, outcome) -> InterOX:
    iox = InterOX(outcome, case_log)
    assert iox.get_len_suggested_ruleset() > 0, 'fixtures must suggest something to edit'
    return iox


def first_suggested_id(iox: InterOX) -> int:
    return next(iter(iox.get_suggested_rule_options().values()))


def test_without_a_builder_the_transfer_is_refused(iox):
    """A notebook with no rule builder cell gets a warning, not an exception."""
    sent, message = iox.send_rule_to_builder(first_suggested_id(iox))
    assert sent is False
    assert 'rule builder' in message


def test_the_rule_lands_on_the_builder_canvas(iox):
    builder = iox.get_rule_builder()
    iox_rule_id = first_suggested_id(iox)
    rule = iox.get_suggested_ruleset_raw().conjunctions[
        iox._require_suggested_index(iox_rule_id)]  # pylint: disable=protected-access

    sent, message = iox.send_rule_to_builder(iox_rule_id)

    assert sent is True
    assert iox.get_rule_name(iox_rule_id) in message
    assert builder.loaded_rule['conditions'] == conjunction_to_conditions(rule)
    assert builder.loaded_rule['label'] == iox.get_rule_name(iox_rule_id)


def test_loading_the_same_rule_twice_still_reaches_the_canvas(iox):
    """Without a fresh id the second load would be an unchanged trait, i.e. a no-op."""
    builder = iox.get_rule_builder()
    iox_rule_id = first_suggested_id(iox)

    iox.send_rule_to_builder(iox_rule_id)
    first_load_id = builder.loaded_rule['load_id']
    iox.send_rule_to_builder(iox_rule_id)

    assert builder.loaded_rule['load_id'] > first_load_id


def test_the_transfer_goes_to_the_builder_shown_now(iox):
    """A re-run builder cell replaces its predecessor; the rule follows the new one."""
    stale = iox.get_rule_builder()
    current = iox.get_rule_builder()

    iox.send_rule_to_builder(first_suggested_id(iox))

    assert current.loaded_rule['conditions']
    assert stale.loaded_rule == {}


def test_editing_leaves_the_stored_ruleset_alone(iox):
    iox.get_rule_builder()
    iox.send_rule_to_builder(first_suggested_id(iox))
    assert iox.get_stored_ruleset_raw().conjunctions == []


def test_an_unknown_rule_id_is_rejected(iox):
    iox.get_rule_builder()
    with pytest.raises(ValueError):
        iox.send_rule_to_builder(-1)


# --- the table's edit action ------------------------------------------------

def test_the_edit_action_reaches_the_callback():
    widget = RulesetTableWidget(mode='suggested')
    calls = []
    widget.set_action_context(edit_callback=lambda rid, note: calls.append((rid, note)))

    widget.action_request = {'kind': 'edit', 'iox_rule_id': 7, 'note': '', 'action_id': 1}

    assert calls == [(7, '')]


def test_an_action_id_is_dispatched_only_once():
    """The guard against marimo applying each frontend state message twice.

    The second application carries the same action in a fuller payload, so the
    trait genuinely changes and only the action id marks it as a replay. An edit
    does not re-run the notebook, so a replay would land the rule -- and the
    toast -- in the builder twice.
    """
    widget = RulesetTableWidget(mode='suggested')
    calls = []
    widget.set_action_context(edit_callback=lambda rid, note: calls.append(rid))

    widget.action_request = {'kind': 'edit', 'iox_rule_id': 7, 'note': '', 'action_id': 1}
    widget.action_request = {'kind': 'edit', 'iox_rule_id': 7, 'note': 'x', 'action_id': 1}
    widget.action_request = {'kind': 'edit', 'iox_rule_id': 8, 'note': '', 'action_id': 2}

    assert calls == [7, 8]


def test_the_suggested_table_reports_the_outcome_of_an_edit(iox):
    """The table shows the result where the click happened, warning included."""
    table = iox.get_suggested_ruleset()
    iox_rule_id = first_suggested_id(iox)

    table.action_request = {'kind': 'edit', 'iox_rule_id': iox_rule_id,
                            'note': '', 'action_id': 1}
    assert table.action_result['level'] == 'warn'

    iox.get_rule_builder()
    table.action_request = {'kind': 'edit', 'iox_rule_id': iox_rule_id,
                            'note': '', 'action_id': 2}
    assert table.action_result['level'] == 'ok'
    assert table.action_result['result_id'] == 2
