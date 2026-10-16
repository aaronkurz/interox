import { useMemo } from "react";
import { normalizeFeatureSummary } from "../common/data";
import { SUMMARY_COLORS } from "./tokens";
import { formatNumber, toPercent } from "../common/utils";
import type { NumericLikeSummary, NormalizedSummary } from "../common/types";

interface NumericSummaryViewProps {
    summary: NumericLikeSummary;
}

function NumericSummaryView({ summary }: NumericSummaryViewProps) {
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
            <span key={i} className="rs-summary-bin-col" title={title}>
                <span className="rs-summary-bin" style={{ height: `${barHeightPx}px`, background: barColor }} />
                <span className="rs-summary-bin-pos" style={{ height: `${posBarHeightPx}px`, background: posColor }} />
            </span>
        );
    });

    const summaryTitle = `N: ${summary.total_count}, Positives: ${summary.outcome_positive_total}, Missing: ${summary.missing_count}`;
    const histogramLabel = isDiscrete ? "frequency bar chart" : "histogram";

    return (
        <div className="rs-feature-summary" title={summaryTitle}>
            <div className="rs-summary-stats">
                min {formatNumber(summary.min)} | med {formatNumber(summary.median)} | max {formatNumber(summary.max)}
            </div>
            <div className="rs-summary-hist">{bins}</div>
            <div className="rs-summary-meta">
                {histogramLabel}; n {summary.total_count}
                {summary.missing_count > 0 ? `, missing ${summary.missing_count}` : ""}
            </div>
        </div>
    );
}

interface CategoricalSummaryViewProps {
    summary: NormalizedSummary & { kind: "categorical" };
}

function CategoricalSummaryView({ summary }: CategoricalSummaryViewProps) {
    const rows = summary.top_categories.length
        ? summary.top_categories.map((entry) => (
            <div key={entry.label} className="rs-summary-cat" title={`${entry.label} (${entry.count})`}>
                <span className="rs-summary-cat-label">{entry.label}</span>
                <span>{toPercent(entry.ratio)}</span>
            </div>
        ))
        : <div className="rs-summary-meta">No values</div>;

    return (
        <div className="rs-feature-summary">
            {rows}
            <div className="rs-summary-meta">
                n {summary.total_count}
                {summary.missing_count > 0 ? `, missing ${summary.missing_count}` : ""}
            </div>
        </div>
    );
}

interface FeatureSummaryCellProps {
    summary: unknown;
}

export default function FeatureSummaryCell({ summary }: FeatureSummaryCellProps) {
    const normalized = useMemo(() => normalizeFeatureSummary(summary), [summary]);

    if (normalized.kind === "numeric" || normalized.kind === "numeric_discrete") {
        return (
            <th className="rs-summary-row">
                <NumericSummaryView summary={normalized} />
            </th>
        );
    }
    if (normalized.kind === "categorical") {
        return (
            <th className="rs-summary-row">
                <CategoricalSummaryView summary={normalized} />
            </th>
        );
    }
    return (
        <th className="rs-summary-row">
            <div className="rs-feature-summary">
                <div className="rs-summary-meta">No data</div>
            </div>
        </th>
    );
}
