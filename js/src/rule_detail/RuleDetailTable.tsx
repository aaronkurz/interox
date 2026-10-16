import { useState, useMemo, useEffect, useRef } from "react";
import RuleMetrics from "./RuleMetrics";
import FeatureSummaryCell from "./FeatureSummaryCell";
import ImpactCell from "./ImpactCell";
import PrecisionRecallCell from "./PrecisionRecallCell";
import ExperimentRow from "./ExperimentRow";
import ExperimentPanel from "./ExperimentPanel";
import { stripFeatureNameFromPredicate } from "../common/utils";
import type { RuleData, ExperimentResult } from "./types";

interface EmptyTableProps {
    message: string;
}

function EmptyTable({ message }: EmptyTableProps) {
    return (
        <table className="rd-table">
            <tbody>
                <tr>
                    <td className="rd-empty">{message}</td>
                </tr>
            </tbody>
        </table>
    );
}

interface RuleDetailTableProps {
    rule: RuleData;
    experimentResult: ExperimentResult | null;
    setExperimentRequest: (value: Record<string, unknown>) => void;
    onStore: (note: string) => void;
}

export default function RuleDetailTable({
    rule,
    experimentResult,
    setExperimentRequest,
    onStore,
}: RuleDetailTableProps) {
    const { features, maxTotalRemoved, precision, recall } = rule;

    const initialEnabled = useMemo(
        () => new Set(features.map((f) => f.feature)),
        [features],
    );
    const [enabledFeatures, setEnabledFeatures] = useState<Set<string>>(initialEnabled);
    const [modifiedBoundaries, setModifiedBoundaries] = useState<
        Record<string, (number | string)[]>
    >({});
    const [displayResult, setDisplayResult] = useState<ExperimentResult | null>(null);
    // The configuration the currently displayed result belongs to. While it
    // matches the current configuration there is nothing to re-evaluate, so the
    // Evaluate button is disabled — re-sending an identical request would produce
    // no trait change on the Python side and leave the panel blank.
    const [evaluatedKey, setEvaluatedKey] = useState<string | null>(null);
    const requestIdRef = useRef(0);

    const configKey = JSON.stringify({
        enabled: [...enabledFeatures].sort(),
        boundaries: modifiedBoundaries,
    });

    useEffect(() => {
        if (
            experimentResult &&
            typeof experimentResult === "object" &&
            "eval_id" in experimentResult &&
            experimentResult.eval_id != null
        ) {
            setDisplayResult(experimentResult);
        }
    }, [experimentResult]);

    const toggleFeature = (feature: string) => {
        setEnabledFeatures((prev) => {
            const next = new Set(prev);
            if (next.has(feature)) {
                next.delete(feature);
            } else {
                next.add(feature);
            }
            return next;
        });
        setDisplayResult(null);
        setEvaluatedKey(null);
    };

    const handleBoundaryChange = (feature: string, index: number, value: string) => {
        setModifiedBoundaries((prev) => {
            const feat = features.find((f) => f.feature === feature);
            const original =
                feat?.predicateBoundaries ?? [];
            const current = prev[feature] ?? [...original];
            const next = [...current];

            next[index] = value;

            return { ...prev, [feature]: next };
        });
        setDisplayResult(null);
        setEvaluatedKey(null);
    };

    const handleEvaluate = () => {
        requestIdRef.current += 1;
        setExperimentRequest({
            enabled_features: [...enabledFeatures],
            modified_boundaries: modifiedBoundaries,
            request_id: requestIdRef.current,
        });
        setDisplayResult(null);
        setEvaluatedKey(configKey);
    };

    const canEvaluate = enabledFeatures.size > 0 && evaluatedKey !== configKey;

    if (features.length === 0) {
        return (
            <>
                <RuleMetrics precision={precision} recall={recall} />
                <EmptyTable message="This rule has no feature predicates to analyze." />
            </>
        );
    }

    const featureHeaders = features.map((feature) => (
        <th key={feature.feature}>{feature.feature}</th>
    ));

    const summaryRow = features.map((feature) => (
        <FeatureSummaryCell key={feature.feature} feature={feature} />
    ));

    const predicatesRow = features.map((feature) => {
        const text = stripFeatureNameFromPredicate(feature.predicatesRemoved, feature.feature);
        return (
            <td key={feature.feature}>
                <span className="rd-code" title={text}>{text}</span>
            </td>
        );
    });

    const precisionRecallRow = features.map((feature) => (
        <PrecisionRecallCell
            key={feature.feature}
            precisionFeatureAlone={feature.precisionFeatureAlone}
            recallFeatureAlone={feature.recallFeatureAlone}
        />
    ));

    const impactsRow = features.map((feature) => (
        <ImpactCell key={feature.feature} feature={feature} maxTotalRemoved={maxTotalRemoved} />
    ));

    return (
        <>
            <RuleMetrics precision={precision} recall={recall} />
            <table className="rd-table">
                <thead>
                    <tr>
                        <th className="rd-row-label">Feature</th>
                        {featureHeaders}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="rd-row-label">Distribution</td>
                        {summaryRow}
                    </tr>
                    <tr>
                        <td className="rd-row-label">Predicates</td>
                        {predicatesRow}
                    </tr>
                    <tr>
                        <td className="rd-row-label">Per-feature Prec/Rec</td>
                        {precisionRecallRow}
                    </tr>
                    <tr>
                        <td className="rd-row-label">Unique removal impact</td>
                        {impactsRow}
                    </tr>
                </tbody>
                <tbody>
                    <tr className="rd-exp-separator">
                        <td colSpan={features.length + 1}>&nbsp;</td>
                    </tr>
                    <ExperimentRow
                        features={features}
                        enabledFeatures={enabledFeatures}
                        modifiedBoundaries={modifiedBoundaries}
                        onToggleFeature={toggleFeature}
                        onBoundaryChange={handleBoundaryChange}
                    />
                </tbody>
            </table>
            <ExperimentPanel
                result={displayResult}
                originalPrecision={precision}
                originalRecall={recall}
                onEvaluate={handleEvaluate}
                canEvaluate={canEvaluate}
                onStore={onStore}
            />
        </>
    );
}
