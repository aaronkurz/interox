import { TOKENS } from "./tokens";
import { toPercent } from "../common/utils";

interface RuleMetricsProps {
    precision: number;
    recall: number;
}

export default function RuleMetrics({ precision, recall }: RuleMetricsProps) {
    const precisionPct = toPercent(precision);
    const recallPct = toPercent(recall);

    return (
        <div className="rd-rule-metrics">
            <div className="rd-metric">
                <span className="rd-metric-label">Precision</span>
                <span className="rd-metric-val" style={{ color: TOKENS.precision }}>{precisionPct}</span>
                <div className="rd-metric-bar">
                    <div className="rd-metric-fill" style={{ background: TOKENS.precision, width: precisionPct }} />
                </div>
            </div>
            <div className="rd-metric">
                <span className="rd-metric-label">Recall</span>
                <span className="rd-metric-val" style={{ color: TOKENS.recall }}>{recallPct}</span>
                <div className="rd-metric-bar">
                    <div className="rd-metric-fill" style={{ background: TOKENS.recall, width: recallPct }} />
                </div>
            </div>
        </div>
    );
}
