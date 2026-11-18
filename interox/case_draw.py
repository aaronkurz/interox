"""Drawing single cases out of a widget's categories.

The widgets show counts -- explained, wrongly claimed, remaining -- and never
the cases behind them. `CaseDrawMixin` lets a widget hand out one case of such a
category at a time: the frontend asks for a case, Python picks it, and only that
one id crosses over. The case log itself still never leaves Python.
"""
import random
from collections.abc import Hashable
from typing import Any, Callable, Dict, List, Optional, Tuple

import traitlets

#: The categories a case can be drawn from, as the frontend names them.
CATEGORIES = ('tp', 'fp', 'fn', 'tn')

#: `resolve(category, iox_rule_id)` -> the case ids of that category.
Resolver = Callable[[str, Optional[int]], Any]
#: `shared_of(category, iox_rule_id, case_id)` -> whether other rules cover the
#: case too, or `None` where the question does not apply.
SharedOf = Callable[[str, Optional[int], Hashable], Optional[bool]]

_DrawKey = Tuple[str, Optional[int]]


class CaseDrawMixin(traitlets.HasTraits): # pylint: disable=too-many-instance-attributes
    """Adds "draw a case" to an anywidget.

    ``draw_request`` is frontend-owned: Python never writes it back, and the
    observer ignores a ``request_id`` it has already handled (see
    DEVELOPMENT.md, "Frontend-owned request traits"). ``draw_result`` travels
    the other way. ``can_open_case`` tells the frontend whether anything is
    listening for a case to be opened, so it only offers that where it works.

    The first draw from a category shuffles its cases once; every further draw
    from the same category walks that order, so no case comes up twice before
    all of them have. A different category, or another rule's, has its own
    order.
    """

    draw_request = traitlets.Dict(default_value={}).tag(sync=True)
    draw_result = traitlets.Dict(default_value={}).tag(sync=True)
    can_open_case = traitlets.Bool(default_value=False).tag(sync=True)

    def __init__(self, *args, **kwargs):
        self._draw_resolve: Optional[Resolver] = None
        self._draw_shared_of: Optional[SharedOf] = None
        self._on_case_open: Optional[Callable[[Hashable], Any]] = None
        self._draw_orders: Dict[_DrawKey, List[Hashable]] = {}
        self._draw_cursors: Dict[_DrawKey, int] = {}
        self._last_drawn: List[Hashable] = []
        self._handled_draw_id: Any = None
        # An attribute rather than the module-level generator so that a test
        # can seed it.
        self._draw_rng = random.Random()
        super().__init__(*args, **kwargs)

    def set_draw_context(self,
                         resolve: Optional[Resolver],
                         on_case_open: Optional[Callable[[Hashable], Any]] = None,
                         shared_of: Optional[SharedOf] = None) -> None:
        """Say where drawn cases come from, and who wants to open one.

        Args:
            resolve: Called as ``resolve(category, iox_rule_id)`` when a case is
                first drawn from a category; returns its case ids. It is called
                at click time, not here, so nothing is computed for a category
                nobody draws from.
            on_case_open: Called as ``on_case_open(case_id)`` with the case-log
                index label of the case drawn last, when the user asks to open
                it.
            shared_of: Called as ``shared_of(category, iox_rule_id, case_id)``
                for each drawn case; see `SharedOf`.
        """
        self._draw_resolve = resolve
        self._draw_shared_of = shared_of
        self._on_case_open = on_case_open
        self.can_open_case = on_case_open is not None
        self._reset_draws()

    def _reset_draws(self) -> None:
        """Forget every draw order -- the categories no longer hold the same cases."""
        self._draw_orders = {}
        self._draw_cursors = {}
        self._last_drawn = []

    def _next_case(self, key: _DrawKey) -> Tuple[Hashable, int, int]:
        """The next case of a category, with its 1-based position and the total."""
        if key not in self._draw_orders:
            if self._draw_resolve is None:
                raise ValueError('Nothing to draw cases from.')
            order = list(self._draw_resolve(*key))
            self._draw_rng.shuffle(order)
            self._draw_orders[key] = order
            self._draw_cursors[key] = -1
        order = self._draw_orders[key]
        if not order:
            raise ValueError('There are no cases in this category.')
        cursor = (self._draw_cursors[key] + 1) % len(order)
        self._draw_cursors[key] = cursor
        return order[cursor], cursor + 1, len(order)

    @traitlets.observe('draw_request')
    def _handle_draw_request(self, change):
        request = change.get('new', {}) or {}
        request_id = request.get('request_id')
        if request_id is None or request_id == self._handled_draw_id:
            return
        self._handled_draw_id = request_id

        if request.get('kind') == 'open':
            if self._on_case_open is not None and self._last_drawn:
                self._on_case_open(self._last_drawn[0])
            return

        category = str(request.get('category'))
        rule_id_raw = request.get('iox_rule_id')
        try:
            iox_rule_id = None if rule_id_raw is None else int(rule_id_raw)
            if category not in CATEGORIES:
                raise ValueError(f'Unknown case category: {category}.')
            case_id, position, total = self._next_case((category, iox_rule_id))
            shared = None
            if self._draw_shared_of is not None:
                shared = self._draw_shared_of(category, iox_rule_id, case_id)
        except Exception as exc:  # pylint: disable=broad-except
            # Whatever goes wrong while resolving a category becomes a message
            # in the widget, not an exception out of the observer.
            self.draw_result = {'request_id': request_id, 'error': str(exc)}
            return

        self._last_drawn = [case_id]
        self.draw_result = {
            'request_id': request_id,
            'category': category,
            'iox_rule_id': iox_rule_id,
            'case_id': str(case_id),
            'position': position,
            'total': total,
            'shared': shared,
        }
