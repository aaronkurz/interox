#!/usr/bin/env bash
set -e

uv run pylint interox
uv run mypy interox
uv run pytest
