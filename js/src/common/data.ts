import { clamp01, toNumber } from "./utils";
import type {
    RawFeatureSummary,
    CategoricalEntry,
    CategoricalSummary,
    EmptySummary,
    NormalizedSummary,
    NumericSummary,
    NumericDiscreteSummary,
} from "./types";

export function normalizeOutcomePositiveBinCounts(
    raw: RawFeatureSummary,
    nBins: number,
): number[] {
    const arr: number[] = Array.isArray(raw.outcome_positive_bin_counts)
        ? raw.outcome_positive_bin_counts.slice(0, nBins).map((v) => Math.max(0, toNumber(v)))
        : [];
    while (arr.length < nBins) {
        arr.push(0);
    }
    return arr;
}

export function normalizeFeatureSummary(summary: unknown): NormalizedSummary {
    const raw = (summary && typeof summary === "object" ? summary : {}) as RawFeatureSummary;
    const kind: string = String(raw.kind || "empty");
    const total_count = Math.max(0, toNumber(raw.total_count));
    const missing_count = Math.max(0, toNumber(raw.missing_count));

    if (kind === "numeric_discrete") {
        const valueCounts: number[] = Array.isArray(raw.bin_counts)
            ? raw.bin_counts.slice(0, 7).map((v) => Math.max(0, toNumber(v)))
            : [];
        const values: number[] = Array.isArray(raw.bin_edges)
            ? raw.bin_edges.slice(0, 7).map((v) => Number(v))
            : [];
        const n = Math.min(valueCounts.length, values.length);

        const result: NumericDiscreteSummary = {
            kind,
            total_count,
            missing_count,
            min: Number.isFinite(Number(raw.min)) ? Number(raw.min) : null,
            median: Number.isFinite(Number(raw.median)) ? Number(raw.median) : null,
            max: Number.isFinite(Number(raw.max)) ? Number(raw.max) : null,
            bin_counts: valueCounts.slice(0, n),
            bin_edges: values.slice(0, n),
            outcome_positive_bin_counts: normalizeOutcomePositiveBinCounts(raw, n),
            outcome_positive_total: Math.max(0, toNumber(raw.outcome_positive_total)),
        };
        return result;
    }

    if (kind === "numeric") {
        const binCounts: number[] = Array.isArray(raw.bin_counts)
            ? raw.bin_counts.slice(0, 7).map((v) => Math.max(0, toNumber(v)))
            : [];
        while (binCounts.length < 7) {
            binCounts.push(0);
        }

        const minVal = Number.isFinite(Number(raw.min)) ? Number(raw.min) : null;
        const maxVal = Number.isFinite(Number(raw.max)) ? Number(raw.max) : null;
        const fallbackRangeStart = minVal ?? 0;
        const fallbackRangeEnd = maxVal ?? fallbackRangeStart;
        const fallbackStep = (fallbackRangeEnd - fallbackRangeStart) / 7;

        const binEdges: number[] = Array.isArray(raw.bin_edges)
            ? raw.bin_edges.slice(0, 8).map((v) => Number(v))
            : [];
        while (binEdges.length < 8) {
            const nextEdge = fallbackRangeStart + fallbackStep * binEdges.length;
            binEdges.push(nextEdge);
        }

        const safeBinEdges = binEdges.map((edge, i) => {
            if (Number.isFinite(edge)) return edge;
            return fallbackRangeStart + fallbackStep * i;
        });

        const result: NumericSummary = {
            kind,
            total_count,
            missing_count,
            min: minVal,
            median: Number.isFinite(Number(raw.median)) ? Number(raw.median) : null,
            max: maxVal,
            bin_counts: binCounts,
            bin_edges: safeBinEdges,
            outcome_positive_bin_counts: normalizeOutcomePositiveBinCounts(raw, 7),
            outcome_positive_total: Math.max(0, toNumber(raw.outcome_positive_total)),
        };
        return result;
    }

    if (kind === "categorical") {
        const topCategories: Array<{ label?: string; count?: number; ratio?: number }> =
            Array.isArray(raw.top_categories) ? raw.top_categories : [];

        const entries: CategoricalEntry[] = topCategories.map((entry) => ({
            label: String(entry && entry.label ? entry.label : ""),
            count: Math.max(0, toNumber(entry && entry.count)),
            ratio: clamp01(entry && entry.ratio),
        }));

        const result: CategoricalSummary = {
            kind,
            total_count,
            missing_count,
            top_categories: entries,
        };
        return result;
    }

    const result: EmptySummary = {
        kind: "empty",
        total_count,
        missing_count,
    };
    return result;
}
