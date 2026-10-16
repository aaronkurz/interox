import { TOKENS } from "./tokens";
import type { AttrImportance } from "./types";

export const IMPACT_HELP =
    "Unique removal impact shows what each condition keeps out: the cases the rest " +
    "of the rule covers but this condition rejects. Many FPs removed and few TPs " +
    "removed means the condition is pulling its weight; the reverse means it is " +
    "mostly costing recall. A condition left at 'any value' constrains nothing, so " +
    "it removes nothing. Computed on evaluation, alongside the overall metrics.";

interface ImpactPanelProps {
    impact: AttrImportance | null;
    /** Largest TP+FP removed across the rule's conditions — the bar's full width. */
    maxTotalRemoved: number;
    /** False for a condition left at "any value": it excludes no case, so it can remove none. */
    constrains: boolean;
    /** The rule changed since the last evaluation, so these numbers are out of date. */
    stale: boolean;
}

function Shell({ children, stale }: { children: React.ReactNode; stale?: boolean }) {
    return (
        <div className={`rb-impact${stale ? " rb-impact-stale" : ""}`}>
            <div className="rb-impact-head">Unique removal impact</div>
            {children}
        </div>
    );
}

export default function ImpactPanel({ impact, maxTotalRemoved, constrains, stale }: ImpactPanelProps) {
    if (!constrains) {
        return (
            <Shell>
                <span className="rb-impact-none">
                    Set a boundary — “any value” excludes no case, so it removes none.
                </span>
            </Shell>
        );
    }
    if (!impact) {
        return (
            <Shell>
                <span className="rb-impact-none">Evaluate the rule to compute it.</span>
            </Shell>
        );
    }

    const total = impact.tp_removed + impact.fp_removed;
    // Bars are scaled against the rule's largest impact, so the conditions can be
    // compared with each other rather than against an absolute case count.
    const totalWidthPct = Math.max(0, Math.min(100, (total / Math.max(1, maxTotalRemoved)) * 100));
    const tpWidthInBar = total > 0 ? (impact.tp_removed / total) * 100 : 0;
    const fpWidthInBar = total > 0 ? (impact.fp_removed / total) * 100 : 0;

    return (
        <Shell stale={stale}>
            <div className="rb-impact-values">
                <span style={{ color: TOKENS.tpRemoved }}>TP removed {impact.tp_removed}</span>
                <span style={{ color: TOKENS.fpRemoved }}>FP removed {impact.fp_removed}</span>
            </div>
            <div
                className="rb-impact-track"
                title={`Dropping this condition would additionally cover ${impact.tp_removed} positive and ${impact.fp_removed} negative cases`}
            >
                <div className="rb-impact-bar" style={{ width: `${totalWidthPct}%` }}>
                    <div
                        className="rb-impact-seg"
                        style={{ background: TOKENS.tpRemoved, width: `${tpWidthInBar}%` }}
                    />
                    <div
                        className="rb-impact-seg"
                        style={{ background: TOKENS.fpRemoved, width: `${fpWidthInBar}%` }}
                    />
                </div>
            </div>
            {total === 0 ? (
                <span className="rb-impact-note">
                    Redundant here — the other conditions already exclude these cases.
                </span>
            ) : null}
        </Shell>
    );
}
