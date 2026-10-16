import { useMemo, useState } from "react";
import FeatureSummaryCell from "./FeatureSummaryCell";
import RuleRow from "./RuleRow";
import { normalizeRule } from "./data";
import { FEATURE_PALETTE } from "./tokens";
import type { ActionKind, RawRule, TableMode, Toast } from "./types";

interface RulesetTableProps {
    rules: RawRule[];
    features: string[];
    featureSummaries: Record<string, unknown>;
    mode: TableMode;
    onAction: (kind: ActionKind, ioxRuleId: number, note: string) => void;
    toast: Toast | null;
    onDismissToast: () => void;
}

type PanelMode = "action" | "note";

// Identifies which rule's panel is open, by stable iox rule id.
interface OpenPanel {
    ioxRuleId: number;
    mode: PanelMode;
}

function clampPct(value: string): number {
    if (value === "") return 0;
    return Math.max(0, Math.min(100, Number(value)));
}

export default function RulesetTable({
    rules,
    features,
    featureSummaries,
    mode,
    onAction,
    toast,
    onDismissToast,
}: RulesetTableProps) {
    const [aligned, setAligned] = useState(true);
    const [minPrecision, setMinPrecision] = useState(0);
    const [minRecall, setMinRecall] = useState(0);
    const [openPanel, setOpenPanel] = useState<OpenPanel | null>(null);

    const normalizedRules = useMemo(
        () => rules.map((r, i) => normalizeRule(r, i)),
        [rules],
    );

    const filteredRules = useMemo(() => {
        return normalizedRules.filter(
            (rule) => rule.precision >= minPrecision && rule.recall >= minRecall,
        );
    }, [normalizedRules, minPrecision, minRecall]);

    const featureColors = useMemo(() => {
        const map: Record<string, string> = {};
        features.forEach((f, i) => {
            map[f] = FEATURE_PALETTE[i % FEATURE_PALETTE.length];
        });
        return map;
    }, [features]);

    const featureHeaders = features.map((f) => (
        <th key={f}>{f}</th>
    ));

    const featureSummaryRow = features.map((f) => (
        <FeatureSummaryCell key={f} summary={featureSummaries[f]} />
    ));

    // Columns: action + Rule + Precision + Recall + TP/FP/FN + (features | Predicates)
    const totalCols = 1 + 4 + (aligned ? features.length : 1);

    const featureHeaderCells = aligned ? featureHeaders : <th>Predicates</th>;

    const togglePanel = (ioxRuleId: number, panelMode: PanelMode) => {
        setOpenPanel((prev) =>
            prev && prev.ioxRuleId === ioxRuleId && prev.mode === panelMode
                ? null
                : { ioxRuleId, mode: panelMode },
        );
    };

    const closePanel = () => setOpenPanel(null);

    const handleAction = (kind: ActionKind, ioxRuleId: number, note: string) => {
        onAction(kind, ioxRuleId, note);
        closePanel();
    };

    const toolbar = (
        <div className="rs-toggle-bar">
            <div className="rs-toggle-bar-left">
                <label className="rs-toggle">
                    <input
                        type="checkbox"
                        checked={aligned}
                        onChange={(e) => setAligned(e.target.checked)}
                    />
                    <span className="rs-toggle-slider" />
                    <span className="rs-toggle-label-text">
                        {aligned ? "Aligned" : "Unaligned"} view
                    </span>
                </label>
                {toast && (
                    <button
                        type="button"
                        className={`rs-toast${toast.level === "warn" ? " rs-toast-warn" : ""}`}
                        title="Dismiss"
                        onClick={onDismissToast}
                    >
                        {toast.message}
                    </button>
                )}
            </div>
            <div className="rs-toggle-bar-right">
                <div className="rs-filter-group">
                    <label className="rs-filter-label">Precision &ge;</label>
                    <input
                        type="number"
                        className="rs-filter-input"
                        min="0"
                        max="100"
                        step="0.1"
                        value={String(Math.round(minPrecision * 1000) / 10)}
                        onChange={(e) => setMinPrecision(clampPct(e.target.value) / 100)}
                    />
                    <span className="rs-filter-unit">%</span>
                </div>
                <div className="rs-filter-group">
                    <label className="rs-filter-label">Recall &ge;</label>
                    <input
                        type="number"
                        className="rs-filter-input"
                        min="0"
                        max="100"
                        step="0.1"
                        value={String(Math.round(minRecall * 1000) / 10)}
                        onChange={(e) => setMinRecall(clampPct(e.target.value) / 100)}
                    />
                    <span className="rs-filter-unit">%</span>
                </div>
                <span className="rs-filter-count">
                    {filteredRules.length} of {normalizedRules.length} rules
                </span>
            </div>
        </div>
    );

    const noRules = normalizedRules.length === 0;
    const emptyLabel = noRules
        ? mode === "stored"
            ? "No rules are stored yet. Switch to Suggested to store some."
            : "No suggested rules remain."
        : "No rules match the current filters.";

    return (
        <div>
            {toolbar}
            <table className="rs-root">
                <thead>
                    <tr>
                        <th className="rs-action-col" />
                        <th>Rule</th>
                        <th>Precision</th>
                        <th>Recall</th>
                        <th>TP / FP / FN</th>
                        {featureHeaderCells}
                    </tr>
                    {aligned && (
                        <tr className="rs-summary-row">
                            <th className="rs-summary-spacer rs-action-col" />
                            <th className="rs-summary-spacer" />
                            <th className="rs-summary-spacer" />
                            <th className="rs-summary-spacer" />
                            <th className="rs-summary-spacer" />
                            {featureSummaryRow}
                        </tr>
                    )}
                </thead>
                <tbody>
                    {noRules || filteredRules.length === 0 ? (
                        <tr className="rs-empty-row">
                            <td className="rs-empty-cell" colSpan={totalCols}>
                                {emptyLabel}
                            </td>
                        </tr>
                    ) : (
                        filteredRules.map((rule) => (
                            <RuleRow
                                key={rule.ioxRuleId}
                                rule={rule}
                                features={features}
                                aligned={aligned}
                                featureColors={featureColors}
                                mode={mode}
                                colSpan={totalCols}
                                isActionOpen={
                                    openPanel?.ioxRuleId === rule.ioxRuleId
                                    && openPanel?.mode === "action"
                                }
                                isNoteOpen={
                                    openPanel?.ioxRuleId === rule.ioxRuleId
                                    && openPanel?.mode === "note"
                                }
                                onToggleAction={() => togglePanel(rule.ioxRuleId, "action")}
                                onToggleNote={() => togglePanel(rule.ioxRuleId, "note")}
                                onCancel={closePanel}
                                onAction={handleAction}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
