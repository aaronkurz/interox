import type { NormalizedFeature } from "./types";

interface ExperimentRowProps {
    features: NormalizedFeature[];
    enabledFeatures: Set<string>;
    modifiedBoundaries: Record<string, (number | string)[]>;
    onToggleFeature: (feature: string) => void;
    onBoundaryChange: (feature: string, index: number, value: string) => void;
}

export default function ExperimentRow({
    features,
    enabledFeatures,
    modifiedBoundaries,
    onToggleFeature,
    onBoundaryChange,
}: ExperimentRowProps) {
    const cells = features.map((feat) => {
        const isEnabled = enabledFeatures.has(feat.feature);
        const boundaries =
            modifiedBoundaries[feat.feature] ??
            (feat.predicateBoundaries.length > 0
                ? feat.predicateBoundaries
                : feat.predicateStringValues);

        const inputs: React.ReactNode[] = [];
        const relations = feat.predicateRelations;
        const hasNumericPredicates = feat.predicateBoundaries.length > 0;

        for (let i = 0; i < relations.length; i++) {
            const relation = relations[i] || "";
            if (hasNumericPredicates && boundaries.length > i) {
                inputs.push(
                    <span key={`rel-${i}`} className="rd-exp-relation">{relation}</span>,
                );
                inputs.push(
                    <input
                        key={`inp-${i}`}
                        type="text"
                        className="rd-boundary-input"
                        value={boundaries[i] ?? ""}
                        disabled={!isEnabled}
                        onChange={(e) =>
                            onBoundaryChange(feat.feature, i, e.target.value)
                        }
                        size={4}
                    />,
                );
            } else if (
                relation === "=" ||
                relation === "==" ||
                relation === "!="
            ) {
                const strVal = boundaries.length > i ? String(boundaries[i]) : "";
                inputs.push(
                    <span key={`cat-${i}`} className="rd-exp-relation">{relation}</span>,
                );
                inputs.push(
                    <span key={`str-${i}`} className="rd-exp-string-val">{strVal}</span>,
                );
            }
        }

        return (
            <td key={feat.feature} className="rd-exp-cell">
                <label className="rd-feature-toggle">
                    <input
                        type="checkbox"
                        checked={isEnabled}
                        onChange={() => onToggleFeature(feat.feature)}
                    />
                    <span>&nbsp;</span>
                </label>
                <div className="rd-exp-inputs">{inputs}</div>
            </td>
        );
    });

    return (
        <tr className="rd-experiment-row">
            <td className="rd-row-label rd-exp-label">Experiment</td>
            {cells}
        </tr>
    );
}
