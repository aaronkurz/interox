import { Fragment, useMemo, useState } from "react";
import styles from "./styles.css";
import AttrRail from "./AttrRail";
import RailSplitter, { RAIL_DEFAULT_WIDTH } from "./RailSplitter";
import RangeHist from "./RangeHist";
import CatBars from "./CatBars";
import EvalFooter from "./EvalFooter";
import ImpactPanel, { IMPACT_HELP } from "./ImpactPanel";
import { TypeBadge, HistLegend, InfoTip } from "./atoms";
import { rangeReadout, numBounds, predKey } from "./engine";
import type { PredBound } from "./engine";
import type {
    Attribute,
    AttrImportance,
    NumAttribute,
    Condition,
    EvalResult,
} from "./types";

interface AppProps {
    title: string;
    outcomeName: string;
    attributes: Attribute[];
    attrMap: Record<string, Attribute>;
    conds: Condition[];
    pinnedAttrs: Set<string>;
    pinnedPreds: Set<string>;
    forbidden: Set<string>;
    onAdd: (id: string) => void;
    onUpdate: (index: number, patch: Partial<Condition>) => void;
    onRemove: (index: number) => void;
    onClear: () => void;
    onTogglePin: (id: string) => void;
    onTogglePredPin: (id: string, bound: PredBound) => void;
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
    isOptimizing: boolean;
}

export default function App({
    title,
    outcomeName,
    attributes,
    attrMap,
    conds,
    pinnedAttrs,
    pinnedPreds,
    forbidden,
    onAdd,
    onUpdate,
    onRemove,
    onClear,
    onTogglePin,
    onTogglePredPin,
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
    isOptimizing,
}: AppProps) {
    const [over, setOver] = useState(false);
    const [showImpact, setShowImpact] = useState(false);
    const [railWidth, setRailWidth] = useState(RAIL_DEFAULT_WIDTH);
    const [resizing, setResizing] = useState(false);
    const usedIds = conds.map((c) => c.attr);

    // Per-attribute removal impact from the last evaluation, keyed by attribute
    // id. A condition added after that evaluation simply has no entry yet.
    const impacts = useMemo(() => {
        const byAttr: Record<string, AttrImportance> = {};
        for (const imp of res?.importance ?? []) byAttr[imp.attr] = imp;
        return byAttr;
    }, [res]);

    const maxTotalRemoved = useMemo(
        () =>
            (res?.importance ?? []).reduce(
                (max, imp) => Math.max(max, imp.tp_removed + imp.fp_removed),
                0,
            ),
        [res],
    );

    const dropProps = {
        onDragOver: (e: React.DragEvent) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
            setOver(true);
        },
        onDragLeave: () => setOver(false),
        onDrop: (e: React.DragEvent) => {
            e.preventDefault();
            setOver(false);
            const id = e.dataTransfer.getData("text/plain");
            if (id) onAdd(id);
        },
    };

    return (
        <>
            <style>{styles}</style>
            <div className="rb-root rb-v2">
                <div className="rb-header">
                    <span className="rb-title">{title}</span>
                    <span className="rb-outcome">predicts: {outcomeName}</span>
                    <HistLegend />
                    <span className="rb-header-hint">
                        click or drag an attribute · drag handles to set boundaries
                    </span>
                    <button
                        type="button"
                        className={`rb-impact-btn${showImpact ? " rb-on" : ""}`}
                        disabled={conds.length === 0}
                        aria-pressed={showImpact}
                        title={
                            showImpact
                                ? "Hide attribute importance"
                                : "Show how much each condition contributes to the rule"
                        }
                        onClick={() => setShowImpact((s) => !s)}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 3v18h18M7 15l4-6 3 3 5-8" />
                        </svg>
                        Attribute importance
                    </button>
                    <InfoTip align="right">{IMPACT_HELP}</InfoTip>
                </div>
                <div className={`rb-body${resizing ? " rb-resizing" : ""}`}>
                    <AttrRail
                        attributes={attributes}
                        usedIds={usedIds}
                        forbidden={forbidden}
                        onAdd={onAdd}
                        onUnforbid={onUnforbid}
                        width={railWidth}
                    />
                    <RailSplitter
                        width={railWidth}
                        onResize={setRailWidth}
                        onDraggingChange={setResizing}
                    />
                    <div className={`rb-canvas${over ? " rb-dragover" : ""}`} {...dropProps}>
                        {conds.length === 0 ? (
                            <div className="rb-dropzone">
                                <b>Drop an attribute here</b>
                                <span>set boundaries directly on its distribution</span>
                            </div>
                        ) : (
                            conds.map((cond, i) => {
                                const attr = attrMap[cond.attr];
                                if (!attr) return null;
                                const pinned = pinnedAttrs.has(cond.attr);
                                // The independently-pinnable predicate bounds this
                                // condition exposes (numeric: lo/hi; categorical: val).
                                const bounds: { bound: PredBound; glyph: string; what: string }[] = [];
                                if (attr.kind === "num") {
                                    const { lo, hi } = numBounds(attr as NumAttribute, cond);
                                    if (lo !== null)
                                        bounds.push({ bound: "lo", glyph: "≥", what: `lower bound (≥ ${lo})` });
                                    if (hi !== null)
                                        bounds.push({ bound: "hi", glyph: "≤", what: `upper bound (≤ ${hi})` });
                                } else if (cond.op === "==") {
                                    bounds.push({
                                        bound: "val",
                                        glyph: "==",
                                        what: `value (== ${cond.value})`,
                                    });
                                }
                                const predPinned = bounds.some((b) =>
                                    pinnedPreds.has(predKey(cond.attr, b.bound)),
                                );
                                return (
                                    <Fragment key={cond.attr}>
                                        {i > 0 ? <span className="rb-and">AND</span> : null}
                                        <div
                                            className={`rb-cond${pinned ? " rb-pinned" : ""}${
                                                predPinned ? " rb-pred-pinned" : ""
                                            }`}
                                        >
                                            <div className="rb-cond-head">
                                                <TypeBadge kind={attr.kind} />
                                                <span className="rb-cond-name">{attr.label}</span>
                                                {pinned
                                                    ? bounds.map((b) => {
                                                          const bp = pinnedPreds.has(
                                                              predKey(cond.attr, b.bound),
                                                          );
                                                          return (
                                                              <button
                                                                  key={b.bound}
                                                                  type="button"
                                                                  className={`rb-pin rb-pin-pred${bp ? " rb-pinned" : ""}`}
                                                                  title={
                                                                      bp
                                                                          ? `Unpin ${b.what} — let the optimizer choose it`
                                                                          : `Pin ${b.what} — keep it fixed in the optimized rule`
                                                                  }
                                                                  onClick={() =>
                                                                      onTogglePredPin(cond.attr, b.bound)
                                                                  }
                                                              >
                                                                  <span className="rb-pin-side">
                                                                      {b.glyph}
                                                                  </span>
                                                                  {bp ? "🔒" : "🔓"}
                                                              </button>
                                                          );
                                                      })
                                                    : null}
                                                <button
                                                    type="button"
                                                    className={`rb-pin${pinned ? " rb-pinned" : ""}`}
                                                    title={pinned ? "Unpin attribute" : "Pin attribute (keep in optimized rule)"}
                                                    onClick={() => onTogglePin(cond.attr)}
                                                >
                                                    📌
                                                </button>
                                                <button
                                                    type="button"
                                                    className="rb-remove"
                                                    title="Remove condition"
                                                    onClick={() => onRemove(i)}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                            <div className="rb-cond-body">
                                                {attr.kind === "num" && cond.op === "range" ? (
                                                    <>
                                                        {(() => {
                                                            const ro = rangeReadout(
                                                                attr,
                                                                cond.lo,
                                                                cond.hi,
                                                            );
                                                            return (
                                                                <span
                                                                    className={`rb-pred-readout${
                                                                        ro.any ? " rb-any" : ""
                                                                    }`}
                                                                >
                                                                    {ro.text}
                                                                </span>
                                                            );
                                                        })()}
                                                        <RangeHist
                                                            attr={attr}
                                                            lo={cond.lo}
                                                            hi={cond.hi}
                                                            onChange={(p) => onUpdate(i, p)}
                                                        />
                                                    </>
                                                ) : attr.kind === "cat" && cond.op === "==" ? (
                                                    <CatBars
                                                        attr={attr}
                                                        value={cond.value}
                                                        onChange={(value) => onUpdate(i, { value })}
                                                    />
                                                ) : null}
                                                {showImpact ? (
                                                    <ImpactPanel
                                                        impact={impacts[cond.attr] ?? null}
                                                        maxTotalRemoved={maxTotalRemoved}
                                                        // A numeric condition spanning the whole
                                                        // range ("any value") has no active bound,
                                                        // so there is nothing it could remove.
                                                        constrains={
                                                            attr.kind !== "num" ||
                                                            bounds.length > 0
                                                        }
                                                        stale={stale}
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </Fragment>
                                );
                            })
                        )}
                    </div>
                </div>
                <EvalFooter
                    attributes={attributes}
                    attrMap={attrMap}
                    conds={conds}
                    pinnedAttrs={pinnedAttrs}
                    pinnedPreds={pinnedPreds}
                    forbidden={forbidden}
                    onForbid={onForbid}
                    onUnforbid={onUnforbid}
                    res={res}
                    stale={stale}
                    poolLabel={poolLabel}
                    toast={toast}
                    note={note}
                    onNoteChange={onNoteChange}
                    onEvaluate={onEvaluate}
                    onStore={onStore}
                    onOptimize={onOptimize}
                    onClear={onClear}
                    canClear={conds.length > 0 || pinnedAttrs.size > 0}
                    isOptimizing={isOptimizing}
                />
            </div>
        </>
    );
}
