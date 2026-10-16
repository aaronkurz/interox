import { useMemo } from "react";
import { describeCondition } from "./engine";
import type { Attribute, Condition } from "./types";

interface StorePopoverProps {
    attrMap: Record<string, Attribute>;
    conds: Condition[];
    note: string;
    onNoteChange: (note: string) => void;
    onClose: () => void;
    onStore: () => void;
}

/**
 * Confirmation for storing the rule, holding the note that used to sit in the
 * footer permanently. Folding it away is what gives the footer room for the
 * metrics and the constraint summary; the trade is that the note is now one
 * click further from the user, so the rule is read back above it — you should
 * not have to look away from this popover to know what you are annotating.
 */
export default function StorePopover({
    attrMap,
    conds,
    note,
    onNoteChange,
    onClose,
    onStore,
}: StorePopoverProps) {
    const summary = useMemo(() => {
        const parts = conds
            .map((cond) => {
                const attr = attrMap[cond.attr];
                return attr ? describeCondition(attr, cond) : null;
            })
            .filter((part): part is string => part !== null);
        return parts.length ? parts.join("  AND  ") : "No conditions yet.";
    }, [conds, attrMap]);

    return (
        <div className="rb-popover rb-popover-right" role="dialog" aria-label="Store this rule">
            <div className="rb-popover-head">
                <span className="rb-popover-title">Store this rule</span>
                <button type="button" className="rb-popover-close" title="Close" onClick={onClose}>
                    ×
                </button>
            </div>
            <div className="rb-popover-section rb-store-section">
                <div className="rb-store-summary">{summary}</div>
                <textarea
                    className="rb-note-input"
                    value={note}
                    onChange={(e) => onNoteChange(e.target.value)}
                    placeholder="Note (optional) — why store this rule?"
                    rows={3}
                    autoFocus
                />
            </div>
            <div className="rb-popover-foot rb-store-foot">
                <button type="button" className="rb-store-confirm" onClick={onStore}>
                    Store rule
                </button>
            </div>
        </div>
    );
}
