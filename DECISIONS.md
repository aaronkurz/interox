# Decision Log

Choices a future reader would otherwise have to reverse-engineer from the code:
why the system is shaped the way it is, not how it works. Newest first.

**Add an entry** when a change closes off an alternative that was genuinely open
— a constraint accepted, a boundary drawn, a dependency taken on. Not for
features, fixes or refactors that only follow from decisions already recorded.

**Entries dated before 2026-08-18 were reconstructed** from git history and the
code in August 2026, not written at the time. They are accurate about *what* was
decided; the reasoning is inferred from the implementation and the commit that
introduced it.

---

### 2026-10-16 — interox is its own package, with the built widgets committed

**Decision.** interox moved out of `interox-playground` into its own repo,
packaged with uv and hatchling for PyPI. The widget sources moved to `js/`; the
esbuild output in `interox/static/` is committed and ships in the wheel.

**Why.** Notebooks should install interox like any other dependency, without
Node. Committing the bundles (as eclear does) means a build from a clean
checkout needs no JavaScript toolchain, and what is in git is exactly what
ships.

**Consequence.** Every change under `js/src` must be followed by
`npm run build` and a commit of the regenerated bundles. The notebooks and
their helpers (`case_explorer.py`, `case_timeline.py`) live in separate notebook
repos that depend on interox from PyPI.

### 2026-10-16 — The rulelearn fork is consumed from PyPI

**Decision.** interox depends on the fork as published on PyPI,
`rulelearn-ripper-interactive` (imported as `rulelearn_ri`), instead of an
editable install of a local checkout.

**Why.** The editable checkout was the only setup step that couldn't be
reproduced from `requirements.txt` alone, and it kept CI's
`pip install -r requirements.txt` from resolving. The published release carries
everything interox relies on: `fixed_predicates`, forbidden features and the
pandas 3 fix.

**Consequence.** Every import goes through `rulelearn_ri`, not `rulelearn`. The
fork ships under its own import name, so it installs alongside IBM's `rulelearn`
without shadowing it. Changes to the fork now need a release before interox can
pin them.

### 2026-10-09 — The enrichment widget lives in eclear

**Decision.** The enrichment engine and widget were extracted into
[eclear](https://github.com/aaronkurz/eclear) and are installed from PyPI
(`eclear~=0.1.0`) rather than kept as `interox/enrichment/`. interox reads it in
one place: `InterOX` takes `provenance_of` and `describe_attribute` from
`eclear.enrichment` to group rule-builder attributes by what produced them.

**Why.** The widget runs before the explanation flow and never touched InterOX
state, so it was already a separate tool living in this package. Keeping a copy
here as well would mean two versions drifting apart, and eclear's copy was
already ahead (a pandas 3 fix for `append` over a categorical, neighbour coverage
in the delta pane).

**Consequence.** eclear requires pandas 3, so interox moved from pandas 2.3.3 to
pandas 3. interox's own code needed no changes for that. rulelearn's RIPPER
did: `init_encoder` could not read pandas 3's `StringDtype`, and copy-on-write
handed its numba kernels read-only arrays. The rulelearn checkout must include
that fix (it has since shipped in the PyPI release, see 2026-10-16). The
notebooks' case-log normalization now selects time columns by kind
(`datetimetz`, `timedelta`) rather than by `[ns]` dtype, because pandas 3 may
return microsecond resolution. The provenance record is now stored under
`eclear_enrichment` instead of `interox_enrichment`. The three enrichment entries
below were decided here; they now describe eclear, and the file paths they name
are in that repository.

### 2026-09-07 — Every multi-carrier attribute is offered under each event type

**Decision.** `trackable_attributes` offers an attribute carried by more than one
event type both log-wide *and* under each carrier. Only a single-carrier
attribute is offered one way, under its carrier. This replaces two heuristics
that used to force an attribute log-wide: one carried by *every* activity, and
one that never changes within a case.

**Why.** Those heuristics guessed at which fold the user meant, and guessed
wrong often enough to matter. `append` over one activity's events is a genuinely
different column from `append` over the whole case — the sequence of departments
a patient passed through at triage is not the sequence over every event — and no
rule here is better placed than the user to say which is wanted. The
constant-within-case rule was the weaker of the two: `latest` really does read
the same under every scope, but `count`, `append` and `is_unique` do not.

**Consequence.** The tracking pane is longer on a wide log: every event type now
lists the columns every event carries. Accepted deliberately — the alternative
was hiding columns that cannot be reached any other way. One column also moved:
an attribute on one event type that never changes within a case used to be named
`all_events.dept::latest` and is now `Register.dept::latest`. Same values, and
the name now says where they came from.

### 2026-09-04 — An event-log enrichment names its own column

**Decision.** A case-log column name is *derived* from its spec (`column_name`
is the authority). An event-log column name is a stored field on
`EventEnrichmentSpec`: the widget suggests one, the user may overwrite it, and
Python keeps whatever comes back.

**Why.** The event categories take heterogeneous arguments — an operand pair, a
neighbour rule, a list of bin edges, a part of a timestamp — with no readable
canonical rendering. And the name is a *feature* name: rule induction will put it
in front of a domain expert, who is better placed than a naming scheme to choose
it.

**Consequence.** Uniqueness is validated rather than guaranteed, by
`validate_event_spec` with the widget disabling *Stage column* on the same
conditions. `suggestColumn` in `src/enrichment/event/naming.ts` mirrors
`suggest_column` in `event_specs.py` only so that clicking and scripting produce
the same default; unlike `staging.ts`, a drift there is harmless.

### 2026-09-04 — Applying an event enrichment does not recompute the case log

**Decision.** Applying on the event tab rebuilds the catalog — so the new column
is immediately trackable — but leaves `case_log` untouched. Removing an event
column that an applied case column tracks, or that a later event column derives
from, is refused rather than cascaded.

**Why.** A case column that already exists was computed from a log that did not
have this column; recomputing it silently would move numbers the user has already
read and reasoned about. The mirror image holds for removal: deleting the
dependants along with the column would destroy work nobody asked to lose.

**Consequence.** The event tab's apply bar says so, and the two tabs cannot both
have staged changes — a tab with pending work locks the other, because applying is
one request per side. `EnrichmentWidget._blocked_removals` is the guard; it lives
in Python because only Python knows the applied case specs.

### 2026-08-18 — Forbidden attributes are a search setting, not a condition

**Decision.** The rule builder can mark an attribute as one the optimizer must
never use. Unlike a pin, it belongs to no condition: forbidding an attribute
also removes its card from the canvas, and while forbidden it cannot get one.
The list is scoped to a single rule and resets when one is stored.

**Why.** `optimize_single_rule` rejects an attribute that is both forced and
forbidden, so an attribute that can hold no card can hold no pin either — the
conflict is made unreachable rather than validated against. Resetting per rule
follows from the same invisibility: a forbidden entry that outlived its rule
would constrain the next one without appearing anywhere on the canvas.

**Consequence.** `forbid` and `addAttr` in `src/rule_builder/index.tsx` are the
two ends of that invariant. A run that finds no rule under the constraints
leaves the canvas alone rather than clearing it.

### 2026-08-12 — One binding vocabulary for classification outcomes

**Decision.** *Explained* (TP), *wrongly claimed* (FP), *remaining* (FN), in
code, tests, docs and discussion. "Left to be explained", "explained correctly"
and "correctly claimed" are not used. See [ubiquitous-language.md](ubiquitous-language.md).

**Why.** "Explained" already implies correctness. Qualifying it suggests a
second, weaker category of explanation that the model does not have.

**Consequence.** The widget labels and prose follow it. Trait and variable names
coined earlier (`cases_tbe`, `COLORS.toBeExplained`) do not yet — renaming them
crosses the Python↔JS trait boundary and is still open.

### 2026-08-12 — Editing a suggested rule bypasses the refresh cycle

**Decision.** Widgets reach each other by re-creation: an action changes
`InterOX` state, `on_refresh()` runs, marimo re-runs the dependent cells.
Sending a suggested rule to the builder is the one exception — `InterOX` keeps a
reference to the builder it created last and writes the rule into that widget's
`loaded_rule` trait directly.

**Why.** Editing changes no `InterOX` state, so there is nothing to refresh.
Skipping the re-run also keeps the table the user clicked in alive, which is
where the outcome has to be reported.

**Consequence.** That same reference is how the table knows when there is no
builder to send to. See DEVELOPMENT.md, "One widget acting on another", and
`InterOX.send_rule_to_builder`.

### 2026-08-12 — Request traits are frontend-owned; Python never writes them back

**Decision.** Traits named `*_request`, and the `store_*` triggers, travel only
from the frontend to Python. Every observer ignores a request id it has already
handled.

**Why.** marimo applies each frontend state message twice — once through the
widget comm, once through `UIElement._convert_value`. A write-back turns the
replay into a second request and, because the replay runs in the creating cell's
execution context, suppresses that cell's reactive re-run.

**Consequence.** Every request carries an id. See DEVELOPMENT.md, "Frontend-owned
request traits", which four widget docstrings point at.

### 2026-08-12 — An enrichment is a spec recorded on the frame, not a column name to parse

**Decision.** Applying an enrichment records its `EnrichmentSpec` on the case
log. Consumers ask `describe_attribute` what a column means; deriving it by
parsing the column name survives only as a fallback.

**Why.** The column name is a rendering of the spec, not the other way round.
Re-parsing it made every consumer re-implement the naming rules and broke on
hand-written columns.

**Consequence.** A case log carries its own provenance. Column names are still
derived in two places — `column_name` in `enrichment/specs.py` is the authority,
`src/enrichment/staging.ts` mirrors it for staged specs and must agree.

### 2026-08-12 — The enrichment widget sits before `InterOX`, not inside it

**Decision.** `EnrichmentWidget` is the one widget `InterOX` does not create. It
takes an event log and hands back a case log; nothing in it reads or writes
`InterOX` state.

**Why.** A case log almost always needs a manual adjustment before it is worth
explaining. Putting enrichment inside the explanation flow would have meant
either forbidding that adjustment or letting `InterOX` own the event log too.

**Consequence.** A notebook cell sits between the two and can edit the frame.

### 2026-08-12 — Partial rule induction runs on a fork of `rulelearn`

**Decision.** Pinned predicates are handed to `optimize_single_rule` as
`fixed_predicates`, from a custom checkout of `rulelearn` rather than the
released package.

**Why.** RIPPER as shipped induces a rule from scratch or not at all. Steering
it with predicates the user has already committed to needs a hook the release
does not expose.

**Consequence.** `rulelearn` is not installable from PyPI, so the editable
install of the fork must come before `pip install -r requirements.txt`
(superseded 2026-10-16: the fork is now on PyPI). It also
bounds what the builder canvas can say: RIPPER's literals are `LE`/`GE`/`EQ`
only.

### 2026-08-12 — Notebook-facing helpers stay outside the package

**Decision.** `case_explorer.py`, `case_timeline.py` and `helpers.py` live
beside the notebooks, not in `interox/`. They are still linted and typechecked.

**Why.** They carry plotting and event-log concerns that rule induction should
not depend on. Keeping them out of the package keeps that boundary honest.

**Consequence.** `code-check.sh` and the CI workflow name them explicitly
alongside `interox`, so leaving the package does not mean leaving coverage.

### 2026-06-18 — Rules are addressed by stable id, not by position

**Decision.** Every rule carries an `iox_rule_id` that survives re-induction and
reordering. The `*_by_id` methods are the ones to use; the positional ones of
the same name remain for direct indexing.

**Why.** Storing or removing a rule re-induces the suggestions, so an index
taken before the change refers to a different rule after it. Any UI action
built on positions was a race with its own side effect.

**Consequence.** Annotations and names are keyed by id
(`InterOX._ensure_rule_id`), and `coolname` supplies readable names so an id
does not have to be shown to be referred to.

### 2026-05-19 — React + TypeScript widgets, with every summary computed in Python

**Decision.** The widgets are React 18 + TypeScript bundled by esbuild, replacing
hand-written vanilla JS. Histograms, frequency bars and metrics are computed in
Python and synced as summaries; the case log itself never reaches the frontend.

**Why.** The vanilla widgets had outgrown direct DOM manipulation. Keeping the
computation in Python keeps one implementation of each metric and keeps payload
size independent of how many cases there are.

**Consequence.** A build step (`npm run build`) stands between source and
notebook, and esbuild does not typecheck — `npm run typecheck` is separate. Every
new widget follows the same shape; see DEVELOPMENT.md, "Adding a New Widget".
