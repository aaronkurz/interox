# interox

Interactive outcome explanation for process-mining case logs.

`interox` helps you find out *why* some cases of a process end the way they do.
You hand it a case log and a boolean outcome; it suggests DNF rules (via a fork
of RIPPER rule induction) that tell the outcome cases apart from the rest, and
gives you notebook widgets to inspect, store, edit and build rules until the
outcome is explained.

```bash
uv add interox        # or: pip install interox
```

The widgets ship pre-built inside the package, so using interox needs no Node
or JavaScript toolchain.

## Use

```python
from interox import InterOX

iox = InterOX(outcome, case_log)   # outcome: bool Series, case_log: DataFrame, same index

iox.get_exp_status()               # how much of the outcome the stored rules explain
iox.get_suggested_ruleset()        # induced suggestions, as a table widget
iox.get_stored_ruleset()           # the rules you kept
iox.get_rule_builder()             # build a rule from scratch
```

Rendering needs a notebook that speaks [anywidget](https://anywidget.dev):
marimo, Jupyter, VS Code. The API reference is generated from the docstrings:

```bash
uv run pdoc interox
```

A complete walkthrough on a public event log lives in
[interox-nodebook-sepsis](https://github.com/aaronkurz/interox-nodebook-sepsis).

## Requirements

Python 3.13+ and pandas 3. Case-log enrichment comes from
[eclear](https://pypi.org/project/eclear/) and rule induction from
[rulelearn-ripper-interactive](https://pypi.org/project/rulelearn-ripper-interactive/)
(imported as `rulelearn_ri`); both install as dependencies.

## Development

Everything Python goes through uv:

```bash
uv sync                # creates .venv with interox (editable) + the dev group
./code-check.sh        # pylint + mypy + pytest
```

The widgets are React 18 + TypeScript in `js/`, bundled with esbuild into
`interox/static/*.js`:

```bash
cd js
npm ci                 # install React, esbuild, TypeScript tooling
npm run build          # minified production bundles → ../interox/static/
npm run dev            # watch mode, unminified, for working on a widget
npm run typecheck      # esbuild does not typecheck; run this separately
```

See [DEVELOPMENT.md](DEVELOPMENT.md) for the architecture,
[DECISIONS.md](DECISIONS.md) for why it is shaped this way, and
[ubiquitous-language.md](ubiquitous-language.md) for the agreed vocabulary.

### How the compiled widgets get into the package

Each widget class points `_esm` at a file next to it, e.g.
`pathlib.Path(__file__).parent / "static" / "rule_builder.js"`. anywidget reads
that file when the widget is created, so the bundle has to be *inside* the
installed package. Two things make sure it is:

- `interox/static/*.js` is **committed on purpose** (the same choice as eclear).
  Whatever is in git is what a build from a clean checkout ships, and a notebook
  user never runs npm.
- `[tool.hatch.build.targets.wheel] packages = ["interox"]` puts the whole
  `interox/` directory, `static/` included, into the wheel. `js/` and `tests/`
  stay out of the wheel; the sdist carries them so it can be rebuilt.

So the rule is: **whenever anything under `js/src` changes, run
`npm run build` and commit the regenerated `interox/static/*.js` together with
the source change.** A stale bundle is the one packaging mistake that goes
unnoticed until someone opens a notebook.

## Releasing to PyPI

Run from the repo root. Nothing here is automated: an upload is irreversible,
so each step is yours to run.

**0. First release only.** Check the name is free: <https://pypi.org/project/interox/>
should be a 404 (it was on 2026-10-16). If it is taken, change `name` in
`pyproject.toml`; the import name and repo name can stay `interox`.

**1. Rebuild the widgets and re-verify** against exactly what you will ship:

```bash
(cd js && npm ci && npm run typecheck && npm run build)
git status --short interox/static    # changed bundles? commit them first
./code-check.sh
```

**2. Bump the version** in `pyproject.toml` (`version = "0.1.0"`). A version
number can never be reused on PyPI, even after deleting the release.

**3. Build the distributions:**

```bash
rm -rf dist/
uv build
uvx twine check dist/*
unzip -l dist/interox-*.whl
```

The wheel listing must contain the four bundles
`interox/static/{rule_detail,ruleset_table,explanation_status,rule_builder}.js`
and must **not** contain `js/`, `node_modules` or `tests/`.

**4. Smoke-test the built wheel** from a directory that is *not* this repo,
otherwise Python imports the local `interox/` folder and you have tested
nothing:

```bash
cd /tmp
uv run --isolated --no-project --with ~/Developer/interox/dist/interox-0.1.0-py3-none-any.whl \
  python -c "import interox, interox.rule_builder_widget as w; print(interox.__file__); print(len(str(w.RuleBuilderWidget._esm)))"
```

The path must be inside a `site-packages`, and the length must be well above
zero: that is the bundle anywidget will send to the notebook.

**5. Dry run on TestPyPI** (separate site, separate account and token:
<https://test.pypi.org/manage/account/token/>):

```bash
uv publish --publish-url https://test.pypi.org/legacy/
cd /tmp
uv run --isolated --no-project \
  --index https://test.pypi.org/simple/ --index-strategy unsafe-best-match \
  --with interox python -c "import interox; print(interox.__file__)"
```

The extra index flags are needed because the dependencies come from real PyPI.

**6. Publish for real.** Create a token at <https://pypi.org/manage/account/token/>.
For a project that does not exist yet it must be **account-scoped**; after the
first upload, replace it with a project-scoped one.

```bash
read -rs UV_PUBLISH_TOKEN && export UV_PUBLISH_TOKEN && uv publish
```

**7. Tag the release:**

```bash
git tag v0.1.0
git push origin main --tags
```

Later, PyPI trusted publishing (a GitHub Actions workflow that uploads on a
pushed tag, no stored token) removes the token step:
<https://pypi.org/manage/project/interox/settings/publishing/>.
