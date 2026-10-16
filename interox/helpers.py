"""Supporting functions for InterOX."""
import operator
from collections import defaultdict
from typing import Any, Callable, Dict, List, Tuple
import logging
from rulelearn_ri.trxf.core import Conjunction, DnfRuleSet, Feature
from rulelearn_ri.trxf.core.predicate import Relation
from pandas import Series

logger = logging.getLogger(__name__)

#: The comparison each trxf relation stands for. Rule evaluation compares values
#: directly rather than rendering them into an expression to `eval`, so a value
#: is only ever compared, never parsed.
_RELATION_OPS = {
    Relation.EQ: operator.eq,
    Relation.NEQ: operator.ne,
    Relation.LT: operator.lt,
    Relation.LE: operator.le,
    Relation.GT: operator.gt,
    Relation.GE: operator.ge,
}


def is_usable_feature_name(name) -> bool:
    """Whether a column name can carry a rule condition.

    `trxf` parses a feature name as an arithmetic expression, so a name is only
    usable if it happens to be a valid one. Most punctuation survives -- `.`,
    `:` and `::` are absorbed into a single token -- but `+ - * /` and
    parentheses are read as operators, and a name that then fails to parse
    (`*.concept:name::append`, `Payment_(late)::count`) cannot become a
    `Feature` at all.

    The failure modes are varied enough (`ValueError` from the expression
    validator, `TokenError` from the tokenizer, `IndexError` from an unbalanced
    parenthesis) that the only useful question is whether construction works.
    """
    try:
        Feature(str(name))
        return True
    except Exception:  # pylint: disable=broad-except
        return False


def rule_to_lambda(rule: Conjunction,
                   skip_feature=None,
                   only_feature=None) -> Callable[[Series], bool]:
    """Convert a rule (conjunction of predicates) to a lambda function
    that evaluates the rule on a case.

    A predicate becomes a column lookup and a comparison against the value the
    predicate carries, whatever that value is. Nothing is rendered into source
    text, so a category that looks like a number (`'nan'`, `'1e3'`), a value
    holding a quote, and a column name holding an apostrophe all compare as
    themselves. An empty conjunction -- every predicate filtered out, or none to
    begin with -- matches every case.

    Raises:
        KeyError: When evaluating a case that has no column for a predicate's
            feature.
    """
    if skip_feature is not None and only_feature is not None:
        raise ValueError("skip_feature and only_feature are mutually exclusive")
    tests: List[Tuple[str, Callable[[Any, Any], bool], Any]] = []
    for predicate in rule.predicates:
        feature = str(predicate.feature)
        if skip_feature is not None and feature == skip_feature:
            continue
        if only_feature is not None and feature != only_feature:
            continue
        logger.debug("Processing predicate: %s %s %s",
                     feature, predicate.relation.value, predicate.value)
        try:
            op = _RELATION_OPS[predicate.relation]
        except KeyError as exc:
            raise ValueError(f'Unknown relation {predicate.relation!r}') from exc
        tests.append((feature, op, predicate.value))

    return lambda case: all(op(case[feature], value) for feature, op, value in tests)


def conjunction_to_conditions(conjunction: Conjunction) -> List[Dict[str, Any]]:
    """Convert a rule into the condition list the rule builder canvas speaks.

    The builder holds at most one condition per attribute, so the predicates are
    grouped by feature first: a GE/LE pair on the same feature is the two sides
    of one `range` condition, and a lone bound keeps its own operator. Predicates
    beyond the first of each relation on a feature are dropped -- the canvas has
    nowhere to put them. So are whole relations the canvas cannot express: NEQ,
    LT and GT have no branch here, because a categorical condition is `==` only
    (RIPPER induces no negation) and a numeric one is an inclusive bound. Note
    this is narrower than `_RELATION_OPS` above, which still evaluates all six --
    a rule can carry a relation the builder would not let you author.

    This is the inverse of `RuleBuilderWidget._conditions_to_predicates`, and it
    is what lets an already-induced rule be loaded back into the builder (see
    `InterOX.send_rule_to_builder`).
    """
    by_attr: Dict[str, List[Any]] = defaultdict(list)
    for predicate in conjunction.predicates:
        # `str`, as in `rule_to_lambda`: a predicate's feature is a `Feature` when
        # it comes from the inducer but a bare column name when it was built by
        # hand, and both render as the column name.
        by_attr[str(predicate.feature)].append(predicate)

    conditions: List[Dict[str, Any]] = []
    for attr_name, preds in by_attr.items():
        ge = next((p for p in preds if p.relation == Relation.GE), None)
        le = next((p for p in preds if p.relation == Relation.LE), None)
        eq = next((p for p in preds if p.relation == Relation.EQ), None)
        if ge and le:
            conditions.append({'attr': attr_name, 'op': 'range',
                               'lo': float(ge.value), 'hi': float(le.value)})
        elif ge:
            conditions.append({'attr': attr_name, 'op': '>=', 'value': float(ge.value)})
        elif le:
            conditions.append({'attr': attr_name, 'op': '<=', 'value': float(le.value)})
        elif eq:
            conditions.append({'attr': attr_name, 'op': '==', 'value': str(eq.value)})
    return conditions


def ruleset_to_lambda(ruleset: DnfRuleSet, skip_feature=None) -> Callable[[Series], bool]:
    """Convert a ruleset (disjunction of conjunctions) to a lambda function
    that evaluates the ruleset on a case."""
    rule_lambdas = []
    for conji in ruleset.conjunctions:
        rule_lambdas.append(rule_to_lambda(conji, skip_feature))

    return lambda case: any(rule_lambda(case) for rule_lambda in rule_lambdas)
