# pylint: disable=missing-module-docstring
import pathlib
import anywidget
import traitlets


class RulesetTableWidget(anywidget.AnyWidget): # pylint: disable=abstract-method
    """A widget for displaying a DNF ruleset with contextual analysis in a
    table format.

    In addition to displaying rules, the widget exposes inline controls on the
    left of each row to store a suggested rule or remove a stored rule, each
    with an optional textual annotation, and to view/edit the annotation that
    was attached to a stored rule.

    The ``mode`` trait selects the available controls:
    - ``"suggested"``: each row shows a *store* (＋) button and an *edit* (✎)
      button that hands the rule to the rule builder.
    - ``"stored"``: each row shows a *remove* (🗑) button and a *view note*
      button.

    Actions performed in the browser are sent back to Python through the
    ``action_request`` trait and dispatched to the callbacks registered via
    :meth:`set_action_context`. ``action_request`` is frontend-owned and the
    observer ignores an ``action_id`` it has already handled (see
    DEVELOPMENT.md, "Frontend-owned request traits"); ``action_result`` travels
    the other way and carries the one-shot toast :meth:`notify` publishes.
    """
    _esm = pathlib.Path(__file__).parent / "static" / "ruleset_table.js"

    rules = traitlets.List(default_value=[]).tag(sync=True) # type: ignore
    features = traitlets.List(default_value=[]).tag(sync=True) # type: ignore
    feature_summaries = traitlets.Dict(default_value={}).tag(sync=True)
    mode = traitlets.Unicode(default_value="stored").tag(sync=True)
    action_request = traitlets.Dict(default_value={}).tag(sync=True)
    action_result = traitlets.Dict(default_value={}).tag(sync=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._store_callback = None
        self._remove_callback = None
        self._annotate_callback = None
        self._edit_callback = None
        self._result_counter = 0
        self._handled_action_id = None

    def set_action_context(self, store_callback=None, remove_callback=None,
                           annotate_callback=None, edit_callback=None):
        """Register callbacks invoked when the user acts on a rule.

        Each callback receives the rule's stable id (``iox_rule_id``) and the note:

        Args:
            store_callback: Called as ``store_callback(iox_rule_id, note)`` when a
                suggested rule is stored.
            remove_callback: Called as ``remove_callback(iox_rule_id, note)`` when a
                stored rule is removed.
            annotate_callback: Called as ``annotate_callback(iox_rule_id, note)``
                when the annotation of a stored rule is edited.
            edit_callback: Called as ``edit_callback(iox_rule_id, note)`` when a
                suggested rule is sent to the rule builder for editing. The note
                is always empty -- editing carries no rationale -- and the
                callback is expected to report back through :meth:`notify`.
        """
        self._store_callback = store_callback
        self._remove_callback = remove_callback
        self._annotate_callback = annotate_callback
        self._edit_callback = edit_callback

    def notify(self, kind: str, level: str, message: str) -> None:
        """Show a one-shot toast in the browser.

        Args:
            kind: The action being reported on, e.g. ``'edit'``.
            level: ``'ok'`` for a confirmation, ``'warn'`` for a warning.
            message: Text shown to the user.
        """
        self._result_counter += 1
        self.action_result = {
            'kind': kind,
            'level': level,
            'message': message,
            'result_id': self._result_counter,
        }

    @traitlets.observe('action_request')
    def _handle_action_request(self, change):
        request = change.get('new', {})
        if not request:
            return
        action_id = request.get('action_id')
        if action_id is not None and action_id == self._handled_action_id:
            return
        self._handled_action_id = action_id
        kind = request.get('kind')
        iox_rule_id_raw = request.get('iox_rule_id')
        note = str(request.get('note', '') or '')
        try:
            iox_rule_id = int(iox_rule_id_raw)
        except (TypeError, ValueError):
            return
        if kind == 'store' and self._store_callback is not None:
            self._store_callback(iox_rule_id, note)
        elif kind == 'remove' and self._remove_callback is not None:
            self._remove_callback(iox_rule_id, note)
        elif kind == 'annotate' and self._annotate_callback is not None:
            self._annotate_callback(iox_rule_id, note)
        elif kind == 'edit' and self._edit_callback is not None:
            self._edit_callback(iox_rule_id, note)
