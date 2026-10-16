import { clamp01, toNumber } from "../common/utils";
import type {
    RawAttribute,
    RawAttributeSummary,
    RawCategory,
    Attribute,
    AttributeBase,
    NumAttribute,
    CatAttribute,
    NumericBin,
    CatValue,
} from "./types";

function numOrNull(value: unknown): number | null {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
}

function buildNumericAttribute(
    base: AttributeBase,
    summary: RawAttributeSummary,
): NumAttribute {
    const counts = Array.isArray(summary.bin_counts) ? summary.bin_counts : [];
    const posCounts = Array.isArray(summary.outcome_positive_bin_counts)
        ? summary.outcome_positive_bin_counts
        : [];
    const edges = Array.isArray(summary.bin_edges) ? summary.bin_edges.map(Number) : [];
    const isDiscrete = summary.kind === "numeric_discrete";

    const bins: NumericBin[] = counts.map((count, i) => {
        const lo = isDiscrete ? Number(edges[i]) : Number(edges[i]);
        const hi = isDiscrete ? Number(edges[i]) : Number(edges[i + 1]);
        return {
            n: Math.max(0, toNumber(count)),
            pos: Math.max(0, toNumber(posCounts[i])),
            lo: Number.isFinite(lo) ? lo : 0,
            hi: Number.isFinite(hi) ? hi : 0,
        };
    });

    const edgeMin = bins.length ? bins[0].lo : 0;
    const edgeMax = bins.length ? bins[bins.length - 1].hi : 0;
    const min = numOrNull(summary.min) ?? edgeMin;
    const max = numOrNull(summary.max) ?? edgeMax;
    const median = numOrNull(summary.median) ?? min;
    const maxN = bins.reduce((acc, b) => Math.max(acc, b.n), 0);

    return {
        ...base,
        kind: "num",
        min,
        max: max > min ? max : min,
        median: Math.min(Math.max(median, min), max),
        isInt: Number.isInteger(min) && Number.isInteger(max),
        isDiscrete,
        bins,
        maxN,
        total: Math.max(0, toNumber(summary.total_count)),
        outcomePositiveTotal: Math.max(0, toNumber(summary.outcome_positive_total)),
        missing: Math.max(0, toNumber(summary.missing_count)),
    };
}

function buildCategoricalAttribute(
    base: AttributeBase,
    summary: RawAttributeSummary,
): CatAttribute {
    const rawCategories: RawCategory[] = Array.isArray(summary.categories)
        ? summary.categories
        : [];

    const categories: CatValue[] = rawCategories.map((cat) => ({
        value: String(cat && cat.value != null ? cat.value : ""),
        n: Math.max(0, toNumber(cat && cat.count)),
        pos: Math.max(0, toNumber(cat && cat.outcome_positive_count)),
    }));
    // Defensive: keep count-descending order even if Python order is lost.
    categories.sort((a, b) => b.n - a.n);

    const maxN = categories.reduce((acc, c) => Math.max(acc, c.n), 0);

    return {
        ...base,
        kind: "cat",
        categories,
        maxN,
        total: Math.max(0, toNumber(summary.total_count)),
        outcomePositiveTotal: Math.max(0, toNumber(summary.outcome_positive_total)),
        missing: Math.max(0, toNumber(summary.missing_count)),
    };
}

export function normalizeAttributes(raw: unknown): Attribute[] {
    if (!Array.isArray(raw)) return [];

    const result: Attribute[] = [];
    for (const item of raw as RawAttribute[]) {
        if (!item || typeof item !== "object") continue;
        const id = String(item.id ?? "");
        if (!id) continue;
        const summary: RawAttributeSummary =
            item.summary && typeof item.summary === "object" ? item.summary : {};
        // A Python side that predates the provenance fields yields ungrouped
        // attributes rather than an error.
        const base: AttributeBase = {
            id,
            label: String(item.label ?? id),
            importance: clamp01(item.importance),
            family: String(item.family ?? "other"),
            familyLabel: String(item.family_label ?? "Other"),
            sources: Array.isArray(item.sources) ? item.sources.map(String).filter(Boolean) : [],
        };

        if (item.kind === "num") {
            result.push(buildNumericAttribute(base, summary));
        } else {
            result.push(buildCategoricalAttribute(base, summary));
        }
    }
    return result;
}

export function buildAttributeMap(attributes: Attribute[]): Record<string, Attribute> {
    const map: Record<string, Attribute> = {};
    for (const attr of attributes) {
        map[attr.id] = attr;
    }
    return map;
}
