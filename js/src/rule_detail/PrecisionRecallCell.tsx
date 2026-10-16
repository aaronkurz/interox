import { TOKENS } from "./tokens";
import { toPercent } from "../common/utils";

interface PrecisionRecallCellProps {
    precisionFeatureAlone: number;
    recallFeatureAlone: number;
}

export default function PrecisionRecallCell({ precisionFeatureAlone, recallFeatureAlone }: PrecisionRecallCellProps) {
    const precisionPct = toPercent(precisionFeatureAlone);
    const recallPct = toPercent(recallFeatureAlone);

    return (
        <td>
            <div className="rd-pr-metrics">
                <div className="rd-pr-row" title="Precision of this feature's predicates alone">
                    <span className="rd-pr-label" style={{ color: TOKENS.featurePrecision }}>Prec</span>
                    <span className="rd-pr-value" style={{ color: TOKENS.featurePrecision }}>{precisionPct}</span>
                    <div className="rd-pr-bar">
                        <div className="rd-pr-fill" style={{ background: TOKENS.featurePrecision, width: precisionPct }} />
                    </div>
                </div>
                <div className="rd-pr-row" title="Recall of this feature's predicates alone">
                    <span className="rd-pr-label" style={{ color: TOKENS.featureRecall }}>Rec</span>
                    <span className="rd-pr-value" style={{ color: TOKENS.featureRecall }}>{recallPct}</span>
                    <div className="rd-pr-bar">
                        <div className="rd-pr-fill" style={{ background: TOKENS.featureRecall, width: recallPct }} />
                    </div>
                </div>
            </div>
        </td>
    );
}
