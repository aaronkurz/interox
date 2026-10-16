import { useMemo } from "react";
import { normalizeFeatureSummary } from "./data";
import { SUMMARY_COLORS } from "./tokens";
import { formatNumber, toPercent, computeBoundaryPosition } from "../common/utils";
import type { NormalizedFeature, NormalizedSummary, NumericLikeSummary } from "./types";

interface NumericSummaryProps {
    summary: NumericLikeSummary;
    boundaries: number[];
}

function NumericSummary({ summary, boundaries }: NumericSummaryProps) {
    const maxBin = Math.max(0, ...summary.bin_counts);
    const histogramHeightPx = 25;
    const isDiscrete = summary.kind === "numeric_discrete";
    const barColor = isDiscrete ? SUMMARY_COLORS.numericDiscrete : SUMMARY_COLORS.numericHistogram;
    const posBars = summary.outcome_positive_bin_counts;
    const posColor = SUMMARY_COLORS.outcomePositive;

    const bins = summary.bin_counts.map((count, i) => {
        const rawHeightPx = maxBin > 0 ? (count / maxBin) * histogramHeightPx : 0;
        const barHeightPx = count > 0 ? Math.max(1, rawHeightPx) : 0;
        const posCount = posBars[i] || 0;
        const posRawHeightPx = maxBin > 0 ? (posCount / maxBin) * histogramHeightPx : 0;
        const posBarHeightPx = posCount > 0 ? Math.max(1, posRawHeightPx) : 0;

        let title: string;
        if (isDiscrete) {
            const value = summary.bin_edges[i];
            title = `Value ${formatNumber(value)}: Count ${count} (exact-value frequency), Positives: ${posCount}`;
        } else {
            const lower = summary.bin_edges[i];
            const upper = summary.bin_edges[i + 1];
            const intervalRight = i === summary.bin_counts.length - 1 ? "]" : ")";
            title = `Bin ${i + 1}: [${formatNumber(lower)}, ${formatNumber(upper)}${intervalRight}, Count: ${count}, Positives: ${posCount}`;
        }

        return (
            <span key={i} className="rd-summary-bin-col" title={title}>
                <span className="rd-summary-bin" style={{ height: `${barHeightPx}px`, background: barColor }} />
                <span className="rd-summary-bin-pos" style={{ height: `${posBarHeightPx}px`, background: posColor }} />
            </span>
        );
    });

    const boundaryLines = boundaries
        .map((boundary) => {
            const pos = computeBoundaryPosition(boundary, summary);
            if (pos === null) return null;
            return (
                <span
                    key={`b-${boundary}`}
                    className="rd-summary-boundary"
                    style={{ left: `${pos}%` }}
                    title={`Predicate boundary: ${formatNumber(boundary)}`}
                />
            );
        })
        .filter(Boolean);

    const summaryTitle = `N: ${summary.total_count}, Positives: ${summary.outcome_positive_total}, Missing: ${summary.missing_count}`;
    const histogramLabel = isDiscrete ? "frequency bar chart" : "histogram";
    const boundaryLabels = boundaries.length
        ? ` (boundary: ${boundaries.map(formatNumber).join(", ")})`
        : "";

    return (
        <div className="rd-feature-summary" title={summaryTitle}>
            <div className="rd-summary-stats">
                min {formatNumber(summary.min)} | med {formatNumber(summary.median)} | max {formatNumber(summary.max)}
            </div>
            <div className="rd-summary-hist">
                {bins}
                {boundaryLines}
            </div>
            <div className="rd-summary-meta">
                {histogramLabel}{boundaryLabels}; n {summary.total_count}
                {summary.missing_count > 0 ? `, missing ${summary.missing_count}` : ""}
            </div>
        </div>
    );
}

interface CategoricalSummaryProps {
    summary: NormalizedSummary & { kind: "categorical" };
    predicatesRemoved: string;
}

function CategoricalSummary({ summary, predicatesRemoved }: CategoricalSummaryProps) {
    const predText = predicatesRemoved || "";

    const rows = summary.top_categories.length
        ? summary.top_categories.map((entry) => {
            const isMatch = predText.toLowerCase().includes(entry.label.toLowerCase());
            const matchClass = isMatch ? " boundary-match" : "";
            return (
                <div key={entry.label} className={`rd-summary-cat${matchClass}`} title={`${entry.label} (${entry.count})`}>
                    <span className="rd-summary-cat-label">{entry.label}</span>
                    <span>{toPercent(entry.ratio)}</span>
                </div>
            );
        })
        : <div className="rd-summary-meta">No values</div>;

    return (
        <div className="rd-feature-summary">
            {rows}
            <div className="rd-summary-meta">
                n {summary.total_count}
                {summary.missing_count > 0 ? `, missing ${summary.missing_count}` : ""}
            </div>
        </div>
    );
}

interface FeatureSummaryCellProps {
    feature: NormalizedFeature;
}

export default function FeatureSummaryCell({ feature }: FeatureSummaryCellProps) {
    const summary = useMemo(() => normalizeFeatureSummary(feature.summary), [feature.summary]);
    const boundaries: number[] = feature.predicateBoundaries || [];

    if (summary.kind === "numeric" || summary.kind === "numeric_discrete") {
        return (
            <td className="rd-summary-row">
                <NumericSummary summary={summary} boundaries={boundaries} />
            </td>
        );
    }
    if (summary.kind === "categorical") {
        return (
            <td className="rd-summary-row">
                <CategoricalSummary summary={summary} predicatesRemoved={feature.predicatesRemoved} />
            </td>
        );
    }
    return (
        <td className="rd-summary-row">
            <div className="rd-feature-summary">
                <div className="rd-summary-meta">No data</div>
            </div>
        </td>
    );
}
