import { TOKENS } from "./tokens";
import type { NormalizedFeature } from "./types";

interface ImpactCellProps {
    feature: NormalizedFeature;
    maxTotalRemoved: number;
}

export default function ImpactCell({ feature, maxTotalRemoved }: ImpactCellProps) {
    const total = feature.totalRemoved;
    const maxTotal = Math.max(1, maxTotalRemoved);
    const totalWidthPct = Math.max(0, Math.min(100, (total / maxTotal) * 100));
    const tpWidthInBar = total > 0 ? (feature.uniqueTpRemoved / total) * 100 : 0;
    const fpWidthInBar = total > 0 ? (feature.uniqueFpRemoved / total) * 100 : 0;
    const tooltip = `TP removed: ${feature.uniqueTpRemoved}, FP removed: ${feature.uniqueFpRemoved}`;

    return (
        <td className="rd-impact" title={tooltip}>
            <div className="rd-impact-values">
                <span style={{ color: TOKENS.tpRemoved }}>TP removed: {feature.uniqueTpRemoved}</span>
                <span style={{ color: TOKENS.fpRemoved }}>FP removed: {feature.uniqueFpRemoved}</span>
            </div>
            <div className="rd-bar-track">
                <div className="rd-bar-total" style={{ width: `${totalWidthPct}%` }}>
                    <div className="rd-seg" style={{ background: TOKENS.tpRemoved, width: `${tpWidthInBar}%` }} />
                    <div className="rd-seg" style={{ background: TOKENS.fpRemoved, width: `${fpWidthInBar}%` }} />
                </div>
            </div>
        </td>
    );
}
