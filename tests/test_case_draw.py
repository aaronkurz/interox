"""Tests for drawing single cases out of the widgets' categories.

As in `test_rule_builder_eval`, the widgets are driven without a kernel: assign
`draw_request` and read `draw_result`.

On the fixtures, storing `age >= 65 & dept == ER` claims cases 0, 1, 4 (all
positive) and leaves 6 remaining; storing `dept == ER` as well also claims the
negatives 2 and 7.
"""
# pylint: disable=protected-access
import itertools

import pytest

from interox import InterOX

_request_ids = itertools.count(1)


def draw(widget, category, iox_rule_id=None) -> dict:
    widget.draw_request = {
        'request_id': next(_request_ids),
        'kind': 'draw',
        'category': category,
        'iox_rule_id': iox_rule_id,
    }
    return widget.draw_result


def open_drawn(widget) -> None:
    widget.draw_request = {'request_id': next(_request_ids), 'kind': 'open'}


def draw_all(widget, category, iox_rule_id=None) -> list:
    """Every case of a category, in the order *Another* hands them out."""
    first = draw(widget, category, iox_rule_id)
    results = [first] + [draw(widget, category, iox_rule_id)
                         for _ in range(first['total'] - 1)]
    assert [r['position'] for r in results] == list(range(1, first['total'] + 1))
    return [r['case_id'] for r in results]


@pytest.fixture
def iox_two_rules(case_log, outcome, rule_age_and_dept, rule_dept_only) -> InterOX:
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    iox.store_rule_raw(rule_dept_only)
    return iox


def rule_id(iox, conjunction) -> int:
    return iox._ensure_rule_id(conjunction)


# ---------------------------------------------------------------------------
# explanation status
# ---------------------------------------------------------------------------
def test_status_draws_from_each_of_the_four_groups(iox_two_rules):
    status = iox_two_rules.get_exp_status()

    assert sorted(draw_all(status, 'tp')) == ['0', '1', '4']
    assert sorted(draw_all(status, 'fp')) == ['2', '7']
    assert sorted(draw_all(status, 'fn')) == ['6']
    assert sorted(draw_all(status, 'tn')) == ['3', '5']


def test_status_totals_are_the_counts_on_screen(iox_two_rules):
    status = iox_two_rules.get_exp_status()

    assert draw(status, 'fn')['total'] == status.cases_tbe
    assert draw(status, 'tp')['total'] == status.exp_tp
    assert draw(status, 'fp')['total'] == status.exp_fp
    assert draw(status, 'tn')['total'] == status.exp_tn


def test_another_wraps_around_after_the_last_case(iox_two_rules):
    status = iox_two_rules.get_exp_status()
    first_round = draw_all(status, 'tp')

    again = draw(status, 'tp')

    assert len(set(first_round)) == 3
    assert (again['case_id'], again['position']) == (first_round[0], 1)


def test_each_category_keeps_its_own_place(iox_two_rules):
    status = iox_two_rules.get_exp_status()
    draw(status, 'tp')
    draw(status, 'fp')

    assert draw(status, 'tp')['position'] == 2


def test_a_replayed_request_does_not_advance(iox_two_rules):
    status = iox_two_rules.get_exp_status()
    request = {'request_id': 'r1', 'kind': 'draw', 'category': 'tp'}
    status.draw_request = request
    first = status.draw_result

    # marimo delivers every frontend message twice (DEVELOPMENT.md).
    status._handle_draw_request({'new': dict(request)})

    assert status.draw_result == first


def test_an_empty_category_is_a_message_not_an_exception(case_log, outcome):
    status = InterOX(outcome, case_log).get_exp_status()  # nothing stored: no TP

    result = draw(status, 'tp')

    assert 'case_id' not in result
    assert result['error']


def test_an_unknown_category_is_a_message(iox_two_rules):
    assert draw(iox_two_rules.get_exp_status(), 'bogus')['error']


@pytest.mark.parametrize('bad_rule_id', ['abc', ['x'], {}])
def test_a_malformed_rule_id_is_a_message_not_an_exception(iox_two_rules, bad_rule_id):
    status = iox_two_rules.get_exp_status()

    result = draw(status, 'tp', bad_rule_id)

    assert 'case_id' not in result
    assert result['error']


def test_a_request_without_a_request_id_is_ignored(iox_two_rules):
    status = iox_two_rules.get_exp_status()
    status.draw_result = {'sentinel': True}

    status.draw_request = {'kind': 'draw', 'category': 'tp'}

    assert status.draw_result == {'sentinel': True}


def test_a_request_without_a_kind_is_treated_as_a_draw(iox_two_rules):
    status = iox_two_rules.get_exp_status()

    status.draw_request = {'request_id': next(_request_ids), 'category': 'fn'}

    assert status.draw_result['category'] == 'fn'
    assert 'case_id' in status.draw_result


# ---------------------------------------------------------------------------
# opening a drawn case
# ---------------------------------------------------------------------------
def test_open_hands_the_last_drawn_case_to_the_callback(iox_two_rules):
    opened = []
    status = iox_two_rules.get_exp_status(on_case_open=opened.append)
    drawn = draw(status, 'fn')

    open_drawn(status)

    # The case log's own index label, not the string shown in the browser.
    assert opened == [6]
    assert drawn['case_id'] == '6'
    assert status.can_open_case is True


def test_open_before_any_draw_does_nothing(iox_two_rules):
    opened = []
    status = iox_two_rules.get_exp_status(on_case_open=opened.append)

    open_drawn(status)

    assert not opened


def test_without_a_callback_the_frontend_is_told_not_to_offer_it(iox_two_rules):
    status = iox_two_rules.get_exp_status()
    draw(status, 'fn')

    open_drawn(status)  # must not raise

    assert status.can_open_case is False


# ---------------------------------------------------------------------------
# ruleset tables
# ---------------------------------------------------------------------------
def test_stored_rule_draws_over_the_whole_case_log(
        iox_two_rules, rule_age_and_dept, rule_dept_only):
    table = iox_two_rules.get_stored_ruleset()
    narrow = rule_id(iox_two_rules, rule_age_and_dept)
    broad = rule_id(iox_two_rules, rule_dept_only)

    assert sorted(draw_all(table, 'tp', narrow)) == ['0', '1', '4']
    assert sorted(draw_all(table, 'fn', narrow)) == ['6']
    assert sorted(draw_all(table, 'fp', broad)) == ['2', '7']
    assert draw(table, 'fp', narrow)['error']  # the narrow rule has no FP


def test_stored_rule_totals_are_the_counts_in_its_row(iox_two_rules):
    table = iox_two_rules.get_stored_ruleset()

    for row in table.rules:
        for category in ('tp', 'fp', 'fn'):
            if row[category] > 0:
                result = draw(table, category, row['iox_rule_id'])
                assert result['total'] == row[category], (row['rule_name'], category)


def test_suggested_rule_totals_are_the_counts_in_its_row(
        case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)
    table = iox.get_suggested_ruleset()
    unclaimed = {str(i) for i in iox.get_remaining_unexpl_case_log().index}

    for row in table.rules:
        for category in ('tp', 'fp', 'fn'):
            if row[category] > 0:
                drawn = draw_all(table, category, row['iox_rule_id'])
                assert len(drawn) == row[category], (row['rule_name'], category)
                assert set(drawn) <= unclaimed


def test_a_drawn_case_says_whether_other_rules_cover_it_too(
        iox_two_rules, rule_age_and_dept, rule_dept_only):
    table = iox_two_rules.get_stored_ruleset()
    narrow = rule_id(iox_two_rules, rule_age_and_dept)
    broad = rule_id(iox_two_rules, rule_dept_only)

    # Every TP of either rule is also the other's; the FPs are the broad rule's alone.
    assert draw(table, 'tp', narrow)['shared'] is True
    assert draw(table, 'tp', broad)['shared'] is True
    assert draw(table, 'fp', broad)['shared'] is False
    assert draw(table, 'fn', narrow)['shared'] is None


def test_a_rule_table_has_no_tn_and_needs_a_rule(iox_two_rules, rule_dept_only):
    table = iox_two_rules.get_stored_ruleset()

    assert draw(table, 'tn', rule_id(iox_two_rules, rule_dept_only))['error']
    assert draw(table, 'tp')['error']
    assert draw(table, 'tp', 99999)['error']


# ---------------------------------------------------------------------------
# rule builder
# ---------------------------------------------------------------------------
def evaluate(builder, conditions, request_id) -> dict:
    builder.eval_request = {'request_id': request_id, 'conditions': conditions}
    return builder.eval_result


def test_builder_draws_from_the_rule_evaluated_last(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)  # leaves 2, 3, 5, 6, 7
    builder = iox.get_rule_builder(scope='remaining')

    # `dept == ICU` fires on 3, 5, 6 of the pool; only 6 is positive.
    counts = evaluate(builder, [{'attr': 'dept', 'op': '==', 'value': 'ICU'}], 1)

    assert sorted(draw_all(builder, 'tp')) == ['6']
    assert sorted(draw_all(builder, 'fp')) == ['3', '5']
    assert sorted(draw_all(builder, 'tn')) == ['2', '7']
    assert draw(builder, 'fn')['error']
    assert (counts['tp'], counts['fp'], counts['tn']) == (1, 2, 2)


def test_builder_forgets_its_draws_when_the_rule_is_re_evaluated(case_log, outcome):
    builder = InterOX(outcome, case_log).get_rule_builder(scope='all')
    evaluate(builder, [{'attr': 'dept', 'op': '==', 'value': 'ICU'}], 1)
    draw(builder, 'fp')
    draw(builder, 'fp')

    evaluate(builder, [{'attr': 'dept', 'op': '==', 'value': 'ER'}], 2)
    result = draw(builder, 'fp')

    assert result['position'] == 1
    assert result['case_id'] in {'2', '7'}


def test_builder_cannot_draw_before_an_evaluation(case_log, outcome):
    builder = InterOX(outcome, case_log).get_rule_builder(scope='all')

    assert draw(builder, 'tp')['error']


def test_builder_opens_a_drawn_case(case_log, outcome):
    opened = []
    builder = InterOX(outcome, case_log).get_rule_builder(
        scope='all', on_case_open=opened.append)
    evaluate(builder, [{'attr': 'age', 'op': '>=', 'value': 85}], 1)
    draw(builder, 'tp')

    open_drawn(builder)

    assert opened == [6]
