import { useEffect, useMemo, useState } from "react";
import OptimizePanel from "./OptimizePanel";
import StorePopover from "./StorePopover";
import { summarizeConstraints } from "./engine";
import { TOKENS } from "./tokens";
import type { Attribute, Condition, EvalResult } from "./types";

function Metric({ label, value, color }: { label: string; value: number | null; color: string }) {
    const pct = value == null ? null : Math.round(value * 100);
    return (
        <div className="rb-metric">
            <div className="rb-metric-top">
                <span className="rb-metric-val">{pct == null ? "–" : `${pct}%`}</span>
                <span className="rb-metric-label">{label}</span>
            </div>
            <div className="rb-metric-bar">
                <div className="rb-metric-fill" style={{ width: `${pct || 0}%`, background: color }} />
            </div>
        </div>
    );
}

// The four outcomes of the rule over the pool it was evaluated against, each
// titled with its glossary word (ubiquitous-language.md). They partition the
// pool, so they are shown together with its size.
const COUNTS = [
    { key: "tp", label: "TP", word: "explains" },
    { key: "fp", label: "FP", word: "wrongly claims" },
    { key: "fn", label: "FN", word: "remaining" },
    { key: "tn", label: "TN", word: "left alone" },
] as const;

function MetricsPanel({
    res,
    stale,
    poolLabel,
}: {
    res: EvalResult | null;
    stale: boolean;
    poolLabel: string;
}) {
    if (!res) {
        return <span className="rb-noeval">Add attributes to the rule, then evaluate.</span>;
    }
    return (
        <div className={`rb-metrics${stale ? " rb-stale-dim" : ""}`}>
            <Metric label="Precision" value={res.precision} color={TOKENS.blue} />
            <Metric label="Recall" value={res.recall} color={TOKENS.green} />
            <div className="rb-counts">
                {COUNTS.map(({ key, label, word }) => (
                    <span key={key} className="rb-count" title={`${label}: ${word}`}>
                        {label} <b>{res[key] ?? 0}</b>
                    </span>
                ))}
            </div>
            {res.total != null ? (
                <span className="rb-scope" title="Cases this rule was evaluated against">
                    of <b>{res.total}</b> {poolLabel}
                </span>
            ) : null}
            {stale ? <span className="rb-stale-badge">rule changed — out of date</span> : null}
        </div>
    );
}

interface EvalFooterProps {
    attributes: Attribute[];
    attrMap: Record<string, Attribute>;
    conds: Condition[];
    pinnedAttrs: Set<string>;
    pinnedPreds: Set<string>;
    forbidden: Set<string>;
    onForbid: (id: string) => void;
    onUnforbid: (id: string) => void;
    res: EvalResult | null;
    stale: boolean;
    poolLabel: string;
    toast: string | null;
    note: string;
    onNoteChange: (note: string) => void;
    onEvaluate: () => void;
    onStore: () => void;
    onOptimize: () => void;
    onClear: () => void;
    canClear: boolean;
    isOptimizing: boolean;
}

export default function EvalFooter({
    attributes,
    attrMap,
    conds,
    pinnedAttrs,
    pinnedPreds,
    forbidden,
    onForbid,
    onUnforbid,
    res,
    stale,
    poolLabel,
    toast,
    note,
    onNoteChange,
    onEvaluate,
    onStore,
    onOptimize,
    onClear,
    canClear,
    isOptimizing,
}: EvalFooterProps) {
    const hasConditions = conds.length > 0;
    const canStore = !!res && !stale && hasConditions;
    // Any one of the three constraints makes the run meaningful; with none of them
    // it would be plain rule induction, which the notebook offers elsewhere.
    const canOptimize = pinnedAttrs.size > 0 || forbidden.size > 0;

    // At most one popover is open: they overlap the same canvas, and both are
    // about to act on the same rule.
    const [open, setOpen] = useState<"optimize" | "store" | null>(null);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    // A rule that can no longer be stored (edited since the last evaluation) must
    // not leave its confirmation hanging over the canvas.
    useEffect(() => {
        if (open === "store" && !canStore) setOpen(null);
    }, [open, canStore]);

    const { kept, held } = useMemo(
        () => summarizeConstraints(conds, attrMap, pinnedAttrs, pinnedPreds),
        [conds, attrMap, pinnedAttrs, pinnedPreds],
    );
    const summaryParts: string[] = [];
    if (kept.length) summaryParts.push(`${kept.length} kept`);
    if (held.length) summaryParts.push(`${held.length} bounded`);
    if (forbidden.size) summaryParts.push(`${forbidden.size} forbidden`);

    const runOptimize = () => {
        setOpen(null);
        onOptimize();
    };

    const store = () => {
        setOpen(null);
        onStore();
    };

    return (
        <div className="rb-footer">
            <button
                type="button"
                className={`rb-optimize-btn${open === "optimize" ? " rb-on" : ""}`}
                aria-expanded={open === "optimize"}
                onClick={() => setOpen((o) => (o === "optimize" ? null : "optimize"))}
                title="Show what the optimizer may and may not use"
            >
                {isOptimizing ? "⏳ Optimizing…" : "⚡ Optimize"}
                <span className="rb-btn-caret">{open === "optimize" ? "▾" : "▴"}</span>
            </button>
            <button
                type="button"
                className={`rb-eval-btn${stale ? " rb-stale" : ""}`}
                disabled={!hasConditions}
                onClick={onEvaluate}
            >
                {stale ? "↻ Re-evaluate" : "▸ Evaluate"}
            </button>
            <button
                type="button"
                className="rb-clear-btn"
                disabled={!canClear}
                onClick={onClear}
                title="Remove all conditions, pins and locks"
            >
                Clear
            </button>
            {summaryParts.length ? (
                <span
                    className="rb-constraint-summary"
                    title="Constraints the next optimize run will honour"
                >
                    {summaryParts.join(" · ")}
                </span>
            ) : null}
            <MetricsPanel res={res} stale={stale} poolLabel={poolLabel} />
            <div className="rb-footer-right">
                {toast ? <span className="rb-toast">{toast}</span> : null}
                <button
                    type="button"
                    className="rb-store-btn"
                    disabled={!canStore}
                    aria-expanded={open === "store"}
                    onClick={() => setOpen((o) => (o === "store" ? null : "store"))}
                >
                    Store rule
                    <span className="rb-btn-caret">{open === "store" ? "▾" : "▴"}</span>
                </button>
            </div>

            {open === "optimize" ? (
                <OptimizePanel
                    attributes={attributes}
                    attrMap={attrMap}
                    conds={conds}
                    pinnedAttrs={pinnedAttrs}
                    pinnedPreds={pinnedPreds}
                    forbidden={forbidden}
                    onForbid={onForbid}
                    onUnforbid={onUnforbid}
                    onClose={() => setOpen(null)}
                    onRun={runOptimize}
                    canRun={canOptimize}
                    isOptimizing={isOptimizing}
                />
            ) : null}

            {open === "store" ? (
                <StorePopover
                    attrMap={attrMap}
                    conds={conds}
                    note={note}
                    onNoteChange={onNoteChange}
                    onClose={() => setOpen(null)}
                    onStore={store}
                />
            ) : null}
        </div>
    );
}
