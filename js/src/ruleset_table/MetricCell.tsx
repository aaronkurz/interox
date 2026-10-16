import { toPercent } from "../common/utils";

interface MetricCellProps {
    value: number;
    color: string;
}

export default function MetricCell({ value, color }: MetricCellProps) {
    const pct = toPercent(value);

    return (
        <td>
            <div className="rs-metric">
                <span className="rs-metric-val">{pct}</span>
                <div className="rs-bar-container">
                    <div className="rs-bar-value" style={{ backgroundColor: color, width: pct }} />
                </div>
            </div>
        </td>
    );
}
