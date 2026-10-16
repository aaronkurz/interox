# Ubiquitous Language

**Status:** Draft · **Scope:** Terminology for classification outcomes

## Purpose

This document defines the agreed vocabulary for referring to classification
outcomes. These terms are binding for code, tests, documentation, tickets,
and spoken discussion. Alternative wordings listed under *Do not use* are
prohibited, as they introduce ambiguity about whether a case was handled at
all versus handled correctly.

## Terms

The vocabulary has two axes. *Claimed / unclaimed* is about the stored ruleset
alone, regardless of correctness. *Explained / remaining* is about positive
(outcome) cases only.

| Term | Corresponds to | Definition |
|---|---|---|
| **Claimed** (cases) | TP + FP | Cases at least one stored rule fires on, whatever their outcome. |
| **Unclaimed** (cases) | FN + TN | Cases no stored rule fires on, whatever their outcome. |
| **Explained** (cases) | TP — true positives | Cases the system claimed, where the claim holds. |
| **Wrongly claimed** (cases) | FP — false positives | Cases the system claimed, where the claim does not hold. |
| **Remaining** (cases) | FN — false negatives | Cases the system did not claim, but should have. |

How they relate:

| | **Claimed** | **Unclaimed** |
|---|---|---|
| **Positive** | explained (TP) | remaining (FN) |
| **Negative** | wrongly claimed (FP) | left alone (TN) |

So remaining ⊂ unclaimed and explained ⊂ claimed. Anything that has to count
FP on the cases still open — the rule builder, the suggested rules — works on
all *unclaimed* cases, not only the remaining ones; label it accordingly.

## Discouraged Wordings

| Do not use | Use instead |
|---|---|
| "left to be explained" | **remaining** |
| "explained correctly" | **explained** |
| "correctly claimed" | **explained** |

**Rationale.** "Explained" already implies correctness; qualifiers such as
"correctly" suggest a second, weaker category of explanation that does not
exist in the model.

## Known gap

The widget labels and the prose follow this table. Names coined before it does
not: the trait `cases_tbe` and the frontend constant `COLORS.toBeExplained` both
still spell "to be explained". Renaming them crosses the Python↔JS trait
boundary, so it is tracked here rather than done silently.

Likewise, several identifiers say "remaining" or "explained" where they mean the
claimed / unclaimed axis: `get_rule_builder(scope='remaining')`, the case
explorer's base `'remaining'`, `get_remaining_unexpl_case_log` (all return or
use the unclaimed cases) and `InterOX._explained_cases` (the claimed mask).
Their docstrings use the right word; the names are left for a dedicated rename.
