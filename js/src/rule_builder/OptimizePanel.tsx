import { useMemo, useState } from "react";
import type { Attribute, Condition } from "./types";
import { summarizeConstraints } from "./engine";

interface OptimizePanelProps {
    attributes: Attribute[];
    attrMap: Record<string, Attribute>;
    conds: Condition[];
    pinnedAttrs: Set<string>;
    pinnedPreds: Set<string>;
    forbidden: Set<string>;
    onForbid: (id: string) => void;
    onUnforbid: (id: string) => void;
    onClose: () => void;
    onRun: () => void;
    canRun: boolean;
    isOptimizing: boolean;
}

/**
 * Everything the optimizer is allowed and not allowed to touch, in one place.
 *
 * Two of the three constraints are *read back* rather than edited here: a pin
 * and a held boundary belong to a card, and restating them as controls would
 * give the same fact two homes. Forbidding is the exception, and the reason this
 * panel exists — it applies to an attribute with no card, so it has nowhere else
 * to live.
 */
export default function OptimizePanel({
    attributes,
    attrMap,
    conds,
    pinnedAttrs,
    pinnedPreds,
    forbidden,
    onForbid,
    onUnforbid,
    onClose,
    onRun,
    canRun,
    isOptimizing,
}: OptimizePanelProps) {
    const [addOpen, setAddOpen] = useState(false);
    const [query, setQuery] = useState("");

    const { kept, held } = useMemo(
        () => summarizeConstraints(conds, attrMap, pinnedAttrs, pinnedPreds),
        [conds, attrMap, pinnedAttrs, pinnedPreds],
    );

    const inRule = useMemo(() => new Set(conds.map((c) => c.attr)), [conds]);

    const options = useMemo(() => {
        const q = query.trim().toLowerCase();
        return attributes.filter(
            (a) => !forbidden.has(a.id) && (!q || a.label.toLowerCase().includes(q)),
        );
    }, [attributes, forbidden, query]);

    const forbiddenList = useMemo(
        () => attributes.filter((a) => forbidden.has(a.id)),
        [attributes, forbidden],
    );

    const pick = (id: string) => {
        onForbid(id);
        setQuery("");
        setAddOpen(false);
    };

    return (
        <div className="rb-popover rb-popover-left" role="dialog" aria-label="Optimizer constraints">
            <div className="rb-popover-head">
                <span className="rb-popover-title">Optimize under these constraints</span>
                <button type="button" className="rb-popover-close" title="Close" onClick={onClose}>
                    ×
                </button>
            </div>

            <div className="rb-popover-section">
                <span className="rb-constraint-glyph">📌</span>
                <div className="rb-constraint-body">
                    <div className="rb-constraint-name">Keep in the rule</div>
                    <div className={`rb-constraint-value${kept.length ? "" : " rb-empty"}`}>
                        {kept.length
                            ? kept.join(", ")
                            : "nothing pinned — the optimizer may drop any condition"}
                    </div>
                </div>
                <span className="rb-constraint-where">on card</span>
            </div>

            <div className="rb-popover-section">
                <span className="rb-constraint-glyph">🔒</span>
                <div className="rb-constraint-body">
                    <div className="rb-constraint-name">Hold these boundaries</div>
                    <div className={`rb-constraint-value${held.length ? "" : " rb-empty"}`}>
                        {held.length
                            ? held.join(" · ")
                            : "no boundary held — all ranges may move"}
                    </div>
                </div>
                <span className="rb-constraint-where">on card</span>
            </div>

            <div className="rb-popover-section rb-forbid-section">
                <div className="rb-forbid-head">
                    <span className="rb-constraint-glyph rb-forbid-glyph">⃠</span>
                    <span className="rb-constraint-name">Never use</span>
                    <span className="rb-constraint-where">
                        {forbiddenList.length}{" "}
                        {forbiddenList.length === 1 ? "attribute" : "attributes"}
                    </span>
                </div>

                <div className="rb-forbid-chips">
                    {forbiddenList.map((attr) => (
                        <span className="rb-forbid-chip" key={attr.id} title={attr.label}>
                            <span className="rb-forbid-chip-name">{attr.label}</span>
                            <button
                                type="button"
                                className="rb-forbid-chip-x"
                                title="Allow the optimizer to use this attribute again"
                                aria-label={`Stop forbidding ${attr.label}`}
                                onClick={() => onUnforbid(attr.id)}
                            >
                                ×
                            </button>
                        </span>
                    ))}
                    <button
                        type="button"
                        className={`rb-forbid-add${addOpen ? " rb-on" : ""}`}
                        aria-expanded={addOpen}
                        onClick={() => setAddOpen((open) => !open)}
                    >
                        ＋ add attribute
                    </button>
                </div>

                {addOpen ? (
                    <div className="rb-forbid-search">
                        <input
                            type="search"
                            className="rb-forbid-search-input"
                            placeholder="Search attributes to forbid…"
                            aria-label="Search attributes to forbid"
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="rb-forbid-options">
                            {options.length === 0 ? (
                                <div className="rb-forbid-none">No matches.</div>
                            ) : (
                                options.map((attr) => (
                                    <button
                                        type="button"
                                        className="rb-forbid-option"
                                        key={attr.id}
                                        onClick={() => pick(attr.id)}
                                    >
                                        <span className="rb-forbid-option-name">{attr.label}</span>
                                        <span className="rb-forbid-option-hint">
                                            {inRule.has(attr.id)
                                                ? "in rule — will be removed"
                                                : `importance ${attr.importance.toFixed(2)}`}
                                        </span>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="rb-popover-foot">
                <span className="rb-popover-scope">Applies to this rule only</span>
                <button
                    type="button"
                    className="rb-run-btn"
                    disabled={!canRun || isOptimizing}
                    title={
                        canRun
                            ? "Re-derive the rule with RIPPER under these constraints"
                            : "Pin an attribute or forbid one first — an unconstrained run is just rule induction"
                    }
                    onClick={onRun}
                >
                    {isOptimizing ? "⏳ Optimizing…" : "⚡ Run optimize"}
                </button>
            </div>
        </div>
    );
}
