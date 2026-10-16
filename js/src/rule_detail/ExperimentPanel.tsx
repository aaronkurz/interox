import { useState } from "react";
import { toPercent } from "../common/utils";
import type { ExperimentResult } from "./types";

interface ExperimentPanelProps {
    result: ExperimentResult | null;
    originalPrecision: number;
    originalRecall: number;
    onEvaluate: () => void;
    canEvaluate: boolean;
    onStore: (note: string) => void;
}

function comparisonArrow(current: number, original: number): string {
    const diff = current - original;
    if (diff > 0.005) return "\u2191";
    if (diff < -0.005) return "\u2193";
    return "\u2192";
}

function comparisonColor(current: number, original: number): string {
    const diff = current - original;
    if (diff > 0.005) return "#2da44e";
    if (diff < -0.005) return "#cf222e";
    return "#6a737d";
}

export default function ExperimentPanel({
    result,
    originalPrecision,
    originalRecall,
    onEvaluate,
    canEvaluate,
    onStore,
}: ExperimentPanelProps) {
    const [note, setNote] = useState("");
    return (
        <div className="rd-experiment-panel">
            <button
                className="rd-evaluate-btn"
                onClick={onEvaluate}
                disabled={!canEvaluate}
            >
                Evaluate
            </button>

            {result && (
                <div className="rd-experiment-results">
                    <div className="rd-experiment-result">
                        <span className="rd-metric-label rd-exp-metric-label">New Precision</span>
                        <span
                            className="rd-metric-val"
                            style={{ color: comparisonColor(result.precision, originalPrecision) }}
                        >
                            {toPercent(result.precision)}
                        </span>
                        <span
                            className="rd-exp-arrow"
                            style={{ color: comparisonColor(result.precision, originalPrecision) }}
                        >
                            {comparisonArrow(result.precision, originalPrecision)}
                        </span>
                    </div>
                    <div className="rd-experiment-result">
                        <span className="rd-metric-label rd-exp-metric-label">New Recall</span>
                        <span
                            className="rd-metric-val"
                            style={{ color: comparisonColor(result.recall, originalRecall) }}
                        >
                            {toPercent(result.recall)}
                        </span>
                        <span
                            className="rd-exp-arrow"
                            style={{ color: comparisonColor(result.recall, originalRecall) }}
                        >
                            {comparisonArrow(result.recall, originalRecall)}
                        </span>
                    </div>
                    <div className="rd-store-group">
                        <textarea
                            className="rd-note-input"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Note (optional) — why store this rule?"
                            rows={1}
                        />
                        <button
                            className="rd-store-btn"
                            onClick={() => {
                                onStore(note.trim());
                                setNote("");
                            }}
                        >
                            Store to ruleset
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
