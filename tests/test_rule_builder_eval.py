"""Tests for the rule builder's evaluation request.

The builder evaluates against every unclaimed case, negatives included, so that
FP can be counted at all. Its four counts therefore partition that pool, and
only TP + FN line up with the status widget's remaining (FN) count.

As in `test_rule_edit_transfer`, the widget is driven without a kernel: assign
`eval_request` and read `eval_result`.
"""
# pylint: disable=protected-access
from interox import InterOX


def evaluate(builder, conditions, request_id=1) -> dict:
    builder.eval_request = {'request_id': request_id, 'conditions': conditions}
    return builder.eval_result


def test_counts_partition_the_unclaimed_cases(case_log, outcome, rule_age_and_dept):
    iox = InterOX(outcome, case_log)
    iox.store_rule_raw(rule_age_and_dept)  # claims 0, 1, 4; leaves 2, 3, 5, 6, 7
    builder = iox.get_rule_builder(scope='remaining')

    # `dept == ICU` fires on 3, 5, 6 of the pool; only 6 is positive.
    result = evaluate(builder, [{'attr': 'dept', 'op': '==', 'value': 'ICU'}])

    assert (result['tp'], result['fp'], result['fn'], result['tn']) == (1, 2, 0, 2)
    assert result['tp'] + result['fp'] + result['fn'] + result['tn'] == result['total'] == 5
    assert result['tp'] + result['fn'] == iox._get_exp_status_data()['cases_tbe']
    assert builder.pool_label == 'unclaimed cases'


def test_the_whole_log_is_not_called_unclaimed(case_log, outcome):
    builder = InterOX(outcome, case_log).get_rule_builder(scope='all')
    assert builder.pool_label == 'cases'
