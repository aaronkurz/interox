"""Tests for interox.interox: the rule_induction function and InterOX state machine.

These exercise the real RIPPER inducer, so they are kept to a handful of cases on
the small fixture log. Assertions about explanation state and filtering are exact;
assertions about *what* RIPPER induces are limited to structural invariants.
"""
import pandas as pd
import pytest
from rulelearn_ri.trxf.core import Conjunction, Relation
from interox import InterOX
from interox.interox import rule_induction
from interox.helpers import rule_to_lambda
from conftest import make_predicate


# --- rule_induction ---------------------------------------------------------

def test_rule_induction_empty_case_log(case_log, outcome):
    ruleset = rule_induction(case_log.iloc[:0], outcome.iloc[:0], [])
    assert ruleset.conjunctions == []


def test_rule_induction_single_outcome_class(case_log, outcome):
    constant = outcome.copy()
    constant[:] = True
    assert rule_induction(case_log, constant, []).conjunctions == []


def features_used(ruleset) -> set:
    """Column names referenced by any predicate of a ruleset."""
    return {
        str(predicate.feature)
        for conjunction in ruleset.conjunctions
        for predicate in conjunction.predicates
    }


def test_rule_induction_drops_hidden_feature(case_log, outcome):
    ruleset = rule_induction(case_log, outcome, ['dep.*'])
    # No induced predicate may reference the hidden `dept` column.
    assert 'dept' not in features_used(ruleset)


# A column name TRXF reads as an arithmetic expression: the leading `*` is a
# multiplication with nothing to its left. eclear's enrichments no longer emit
# one, but a hand-built or previously saved frame still can.
UNPARSEABLE = '*.concept:name::append'


@pytest.fixture
def unparseable_outcome() -> "pd.Series[bool]":
    return pd.Series([i % 2 == 0 for i in range(20)])


@pytest.fixture
def unparseable_log(unparseable_outcome) -> pd.DataFrame:
    """A log whose only signal sits in a column TRXF cannot parse.

    `filler` cycles independently of the outcome, so RIPPER can only build a
    rule out of `UNPARSEABLE` -- verified: offered this frame with no guard in
    place, it selects that column and `explain()` raises. That is what makes the
    tests below prove the column was dropped rather than merely passed over.
    """
    return pd.DataFrame({
        'filler': [float(i % 3) for i in range(20)],
        UNPARSEABLE: ['yes' if positive else 'no' for positive in unparseable_outcome],
    })


def test_rule_induction_drops_column_that_cannot_be_a_feature(
        unparseable_log, unparseable_outcome):
    ruleset = rule_induction(unparseable_log, unparseable_outcome, [])
    assert UNPARSEABLE not in features_used(ruleset)


def test_rule_induction_hides_a_name_that_is_not_a_valid_regex(
        unparseable_log, unparseable_outcome):
    """Hidden entries are names first, patterns second.

    `*.concept:name::append` is not a compilable pattern, so matching it as one
    used to raise `re.error` out of induction instead of hiding the column.
    """
    ruleset = rule_induction(unparseable_log, unparseable_outcome, [UNPARSEABLE])
    assert UNPARSEABLE not in features_used(ruleset)


def test_hidden_features_still_match_as_regexes(case_log, outcome):
    iox = InterOX(outcome, case_log, [r'dep.*'])
    assert 'dept' not in iox.get_unhidden_features()
    assert 'age' in iox.get_unhidden_features()


def test_get_unhidden_features_survives_an_invalid_pattern(
        unparseable_log, unparseable_outcome):
    iox = InterOX(unparseable_outcome, unparseable_log, [UNPARSEABLE])
    unhidden = iox.get_unhidden_features()
    assert UNPARSEABLE not in unhidden
    assert 'filler' in unhidden


def test_hide_feature_accepts_a_name_that_is_not_a_valid_regex(
        unparseable_log, unparseable_outcome):
    """The notebook's Hide dropdown offers raw column names, so hiding one must
    work whatever characters it contains."""
    iox = InterOX(unparseable_outcome, unparseable_log)
    assert UNPARSEABLE in iox.get_unhidden_features()
    iox.hide_feature(UNPARSEABLE)
    assert UNPARSEABLE in iox.get_hidden_features()
    assert UNPARSEABLE not in iox.get_unhidden_features()
    iox.unhide_feature(UNPARSEABLE)
    assert UNPARSEABLE in iox.get_unhidden_features()


# --- InterOX: initial state -------------------------------------------------

def test_init_state(case_log, outcome):
    iox = InterOX(outcome, case_log)
    assert iox.get_len_stored_ruleset() == 0
    assert iox.get_len_suggested_ruleset() > 0  # RIPPER finds something on this data
    status = iox._get_exp_status_data()
    assert status['exp_tp'] == 0 and status['exp_fp'] == 0
    assert status['cases_tbe'] == 4  # positives 0,1,4,6 all unexplained
    assert status['exp_tn'] == 4  # negatives 2,3,5,7, none of them claimed
    assert sum(status.values()) == len(case_log)  # the four counts partition the log


# --- InterOX: storing / removing rules --------------------------------------

def test_store_rule_updates_explanation_state(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    assert iox.get_len_stored_ruleset() == 1
    status = iox._get_exp_status_data()
    # Rule covers TPs {0,1,4}; positive 6 remains to be explained.
    assert status['exp_tp'] == 3
    assert status['exp_fp'] == 0
    assert status['cases_tbe'] == 1
    assert status['exp_tn'] == 4  # no negative is claimed, so all four stay untouched
    assert sum(status.values()) == len(case_log)


def test_remove_rule_restores_state(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    iox.remove_rule(0)
    assert iox.get_len_stored_ruleset() == 0
    status = iox._get_exp_status_data()
    assert status['exp_tp'] == 0
    assert status['cases_tbe'] == 4  # back to all positives unexplained


def test_remove_rule_out_of_range(case_log, outcome):
    iox = InterOX(outcome, case_log)
    with pytest.raises(ValueError):
        iox.remove_rule(0)


# --- InterOX: stable rule ids ----------------------------------------------

def test_stable_rule_id_survives_further_stores(
        case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    options = iox.get_stored_rule_options()
    assert len(options) == 1
    name, rule_id = next(iter(options.items()))

    # Store a second, different rule (covers the ICU positive, case 6).
    iox.store_rule_raw(Conjunction([make_predicate('dept', Relation.EQ, 'ICU')]))
    # The original rule keeps its id and name across the re-induction.
    assert iox.get_rule_name(rule_id) == name
    assert rule_id in iox.get_stored_rule_options().values()


# --- InterOX: annotations ---------------------------------------------------

def test_annotation_round_trip(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept, 'stored because precise')
    assert iox.get_stored_annotation(0) == 'stored because precise'
    iox.set_stored_annotation(0, 'updated')
    assert iox.get_stored_annotation(0) == 'updated'
    iox.set_stored_annotation(0, '')  # empty clears
    assert iox.get_stored_annotation(0) == ''


# --- InterOX: hiding features ----------------------------------------------

def test_hide_and_unhide_feature(case_log, outcome):
    iox = InterOX(outcome, case_log)
    iox.hide_feature('dept')
    assert 'dept' not in iox.get_unhidden_features()
    assert 'dept' in iox.get_hidden_features()
    with pytest.raises(ValueError):
        iox.hide_feature('dept')  # already hidden

    iox.unhide_feature('dept')
    assert 'dept' in iox.get_unhidden_features()
    with pytest.raises(ValueError):
        iox.unhide_feature('dept')  # not hidden anymore


def test_set_hidden_features_hides_and_unhides_at_once(case_log, outcome):
    iox = InterOX(outcome, case_log)
    iox.set_hidden_features(['dept', 'ward'])  # a pattern need not match a column
    assert set(iox.get_hidden_features()) == {'dept', 'ward'}
    assert iox.get_unhidden_features() == ['age']

    # Unhide one and hide another in the same call.
    selection = ['age']
    iox.set_hidden_features(selection)
    assert iox.get_hidden_features() == ['age']
    assert iox.get_unhidden_features() == ['dept']

    selection.append('dept')  # the caller's list is not ours
    assert iox.get_hidden_features() == ['age']


# --- InterOX: case-log filters ---------------------------------------------

def test_whole_case_log_outcome_filter(case_log, outcome):
    iox = InterOX(outcome, case_log)
    assert sorted(iox.get_whole_case_log(outcome='positive').index) == [0, 1, 4, 6]
    assert sorted(iox.get_whole_case_log(outcome='negative').index) == [2, 3, 5, 7]


def test_whole_case_log_ruleset_filter(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    # Cases matched by the stored ruleset.
    assert sorted(iox.get_whole_case_log(ruleset='positive').index) == [0, 1, 4]


def test_invalid_filter_raises(case_log, outcome):
    iox = InterOX(outcome, case_log)
    with pytest.raises(ValueError):
        iox.get_whole_case_log(outcome='bogus')


def test_remaining_case_log_shrinks_after_store(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    assert len(iox.get_remaining_unexpl_case_log()) == 8
    iox.store_rule_raw(rule_age_and_dept)
    assert sorted(iox.get_remaining_unexpl_case_log().index) == [2, 3, 5, 6, 7]


def test_get_data_stored_rule_pass_fail(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    passing = iox.get_data_stored_rule(0, pass_=True)
    failing = iox.get_data_stored_rule(0, pass_=False)
    assert sorted(passing.index) == [0, 1, 4]
    assert sorted(failing.index) == [2, 3, 5, 6, 7]


def test_get_data_stored_rule_out_of_range(case_log, outcome):
    iox = InterOX(outcome, case_log)
    with pytest.raises(ValueError):
        iox.get_data_stored_rule(0)


def test_get_data_suggested_rule_matches_direct_evaluation(case_log, outcome):
    iox = InterOX(outcome, case_log)
    assert iox.get_len_suggested_ruleset() > 0
    conjunction = iox.get_suggested_ruleset_raw().conjunctions[0]
    remaining = iox.get_remaining_unexpl_case_log()
    expected = set(remaining[remaining.apply(rule_to_lambda(conjunction), axis=1)].index)
    assert set(iox.get_data_suggested_rule(0, pass_=True).index) == expected


def test_rule_builder_attribute_payload_shape(case_log, outcome):
    """The widget contract: every attribute carries its enrichment provenance."""
    iox = InterOX(outcome, case_log)
    attributes = iox._build_rule_builder_attributes(  # pylint: disable=protected-access
        case_log, outcome, ['age', 'dept'])

    assert [attr['id'] for attr in attributes] == ['age', 'dept']
    for attr in attributes:
        assert set(attr) == {
            'id', 'label', 'kind', 'importance', 'summary',
            'family', 'family_label', 'sources',
        }
        # Fixture columns follow no enrichment scheme.
        assert attr['family'] == 'other'
        assert attr['family_label']
        # Lists, not tuples: this is what crosses the traitlets sync boundary.
        assert isinstance(attr['sources'], list)
        assert all(isinstance(source, str) for source in attr['sources'])
