# Development Guide

The widgets in `interox/` use **React 18 + TypeScript** bundled with
**esbuild** via the [anywidget](https://anywidget.dev) framework.

## Quick Start

```bash
uv sync                # Python deps + dev group, interox installed editable
cd js
npm ci                 # install React, esbuild, TypeScript tooling
npm run build          # bundle widgets → ../interox/static/*.js
```

Rule induction comes from
[`rulelearn-ripper-interactive`](https://pypi.org/project/rulelearn-ripper-interactive/),
the extended fork of rulelearn, imported as `rulelearn_ri`. You only need an
editable checkout of [its repo](https://github.com/aaronkurz/rulelearn-ripper-interactive)
if you are changing the fork itself.

To try a change in a real notebook, point a notebook project at this checkout
instead of PyPI, e.g. from
[interox-nodebook-sepsis](https://github.com/aaronkurz/interox-nodebook-sepsis):

```bash
uv add --editable ../interox     # revert with: uv add interox
```

## Architecture

```
Python                              JavaScript / TypeScript
──────                              ──────────────────────
traitlets (synced data)
       │
       ▼
anywidget.AnyWidget  ───_esm──►  interox/static/rule_detail.js
                                        ▲
                                   esbuild (bundle)
                                        ▲
                              js/src/rule_detail/index.tsx
                              js/src/rule_detail/App.tsx
                              js/src/rule_detail/...
                              js/src/common/utils.ts
```

Python builds a data dict and assigns it to a trait; anywidget syncs the trait
to the JS model; the entry point reads it with `useModelState`:

```tsx
function Widget() {
  const [ruleData] = useModelState<RawRuleData>("rule_data");
  const [title] = useModelState<string>("title");
  const norm = React.useMemo(() => getData(title, ruleData), [title, ruleData]);
  return <App rule={norm} />;
}
```

`createRender(Widget)` from `@anywidget/react` mounts the React component into
the DOM element provided by the anywidget host, and returns an unmount cleanup
function on teardown.

Every summary the frontend draws — histograms, frequency bars, metrics — is
computed in Python and arrives as a trait. The case log itself is never sent.

### Frontend-owned request traits

Traits named `*_request` (and the `store_*` triggers) travel the other way: the
frontend writes them, Python observes them, and **Python never writes them
back**. marimo applies every frontend state message twice — once through the
widget comm, once through `UIElement._convert_value` — so a write-back would turn
the replay into a spurious second request, and, because the replay runs inside the
creating cell's execution context, would also suppress that cell's reactive
re-run. Every observer therefore ignores any request whose id it has already
handled.

### One widget acting on another

Widgets do not talk to each other; `InterOX` is the only thing they share. Most
actions therefore reach a sibling widget by *re-creation* — the action changes
`InterOX` state, calls `on_refresh()`, marimo re-runs the dependent cells, and
anything that has to survive the swap is handed to the successor widget through a
pending field (`_pending_builder_flash`).

Editing a suggested rule is the exception, and the reason is that it changes no
`InterOX` state at all: there is nothing to refresh. `InterOX` keeps a reference
to the rule builder widget it created last — the one on screen — and
`send_rule_to_builder` writes the rule into its `loaded_rule` trait, which
anywidget syncs over that widget's own comm. No cell re-runs, so the table the
user clicked in survives to show the outcome in its `action_result` trait. That
reference is also how the table knows to warn instead: no builder was ever
created in this notebook, so there is nowhere to send the rule.

## Directory Structure

Every widget is a directory under `js/src/` with the same shape: `index.tsx` (entry
point), `App.tsx` (root component), `types.ts`, `data.ts` (normalization),
`styles.css` (inlined by esbuild), `tokens.ts` where it has its own colors, and
its React components alongside. A few carry one extra module for the logic that
does not belong in a component — `rule_builder/engine.ts`,
`explanation_status/geometry.ts`.

```
interox/                             # repo root
├── pyproject.toml · uv.lock         # package metadata, uv-managed deps
├── code-check.sh                    # pylint + mypy + pytest
├── tests/
├── js/                              # widget sources (not in the wheel)
│   ├── src/
│   │   ├── common/                  # shared: utils.ts, types.ts, data.ts (feature summaries)
│   │   ├── rule_detail/             # rule detail widget
│   │   ├── ruleset_table/           # ruleset table widget
│   │   ├── explanation_status/      # explanation status widget
│   │   ├── rule_builder/            # rule builder widget (histogram-first)
│   │   └── global.d.ts              # ambient declarations (*.css)
│   ├── build.mjs                    # esbuild bundler script
│   ├── package.json
│   └── tsconfig.json                # IDE typechecking (not used by esbuild)
└── interox/                         # the Python package (what the wheel ships)
    ├── static/                      # bundled output, one .js per widget (committed)
    ├── {rule_detail,ruleset_table,explanation_status,rule_builder}_widget.py
    ├── __init__.py                  # package docstring / public surface
    ├── interox.py                   # core orchestration
    ├── rule_analyzer.py             # analysis engine
    └── helpers.py                   # rule -> predicate evaluation
```

The notebook-facing helpers (`case_explorer.py`, `case_timeline.py`) are not
part of this package; they live with the notebooks that use them.

## Where the Enrichment Widget Sits

`EnrichmentWidget` is not part of this package: it lives in
[eclear](https://github.com/aaronkurz/eclear), installed from PyPI. It runs
*before* the explanation flow: it takes an event log and hands back both an
enriched event log through `enricher.event_log` and a case log through
`enricher.case_log`, so a notebook cell can adjust either frame by hand before
`InterOX(...)` ever sees it.

```
                    ┌── event tab ──► event_log ──► (case explorer)
event log ──► eclear.EnrichmentWidget          │
                    └── case tab ──► case_log ◄┘ ──► (notebook cell) ──► InterOX
```

The one place interox reads eclear is provenance. Applying an enrichment records
its spec on the frame, which is how the rule builder learns what each attribute
was derived from: `InterOX` calls `eclear.enrichment.provenance_of` and
`describe_attribute`, which fall back to parsing the column name for columns with
no record. Anything about how the widget itself behaves — staging, naming, what
applying an event column does to the case log — is eclear's to document.

## What the Rule Builder Canvas Can Say

The builder's condition vocabulary is bounded by what RIPPER can work with, not
by what TRXF can express. RIPPER's literals are `LE`/`GE`/`EQ` only
(`rulelearn_ri/algorithms/ripper/binding.py`), so a categorical condition on the
canvas is `==` — there is no `!=` to author.

That is deliberately narrower than the rest of the stack: `rule_to_lambda` in
`helpers.py` still evaluates all six relations, because a stored rule need not
have come from the builder. The asymmetry lives in `conjunction_to_conditions`;
its docstring is the reference.

## Build Pipeline

`js/build.mjs` bundles each entry point into one self-contained ES module under
`interox/static/`. Three things about it are not obvious:

- `.css` is loaded with esbuild's `text` loader, so a stylesheet import arrives
  as a string the widget injects itself.
- `npm run build` minifies and uses React's production build, because that
  output is committed and shipped in the wheel. `npm run dev` does neither.
- esbuild **does not typecheck**. Run `npm run typecheck` separately;
  `tsconfig.json` is `"noEmit": true` and exists for that and for IDE support.

## Adding a New Widget

1. Create `js/src/<widget>/` following the shape above, with at minimum an
   `index.tsx` exporting `{ render: createRender(Component) }`. Shared helpers
   come from `js/src/common/utils.ts`.

2. Add the entry point to `js/build.mjs`. The map is keyed by output name, so the
   bundle lands at `interox/static/<widget>.js`:
   ```js
   entryPoints: {
     "rule_detail": "src/rule_detail/index.tsx",
     "<widget>": "src/<widget>/index.tsx",
   },
   ```

3. Create the Python widget class with `_esm` pointing at that bundle — copy the
   header of any existing `*_widget.py` — then `npm run build`, verify in a
   notebook, and commit the new bundle.

## Scripts and Checks

Frontend, from `js/`:

| Command | Description |
|---|---|
| `npm run build` | One-shot, minified bundle of all widgets |
| `npm run dev` | Watch mode — rebuilds on file changes |
| `npm run typecheck` | Run `tsc --noEmit` to validate types |

Python, from the repo root:

```bash
./code-check.sh    # pylint + mypy + pytest, all through uv run
```

`.github/workflows/quality.yml` runs the same three checks plus
`npm run typecheck` on push and PR.

## HMR / Hot Reload

`npm run dev` starts esbuild in watch mode, rebuilding `interox/static/*.js` on change; a
notebook host that supports anywidget's HMR picks the new bundle up without a
kernel restart. For React Fast Refresh, see the
[anywidget bundling guide](https://anywidget.dev/en/bundling).
