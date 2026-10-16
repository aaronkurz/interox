interface HasMinMax {
    kind: string;
    min: number | null;
    max: number | null;
}

export function clamp01(value: unknown): number {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0;
    return Math.min(1, Math.max(0, n));
}

export function toNumber(value: unknown): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
}

export function toNonNegativeInt(value: unknown): number {
    return Math.max(0, Math.floor(toNumber(value)));
}

export function toPercent(value: number): string {
    return `${(clamp01(value) * 100).toFixed(1)}%`;
}

export function formatNumber(value: unknown): string {
    const n = Number(value);
    if (!Number.isFinite(n)) return "-";
    if (Math.abs(n) >= 1000) return n.toFixed(0);
    if (Math.abs(n) >= 100) return n.toFixed(1);
    return n.toFixed(2);
}

export function computeBoundaryPosition(
    boundaryValue: number,
    summary: HasMinMax,
): number | null {
    if (summary.kind !== "numeric" && summary.kind !== "numeric_discrete") return null;
    const { min: minVal, max: maxVal } = summary;
    if (minVal === null || maxVal === null || minVal >= maxVal) return null;
    const range = maxVal - minVal;
    if (range <= 0) return null;
    return Math.max(0, Math.min(100, ((boundaryValue - minVal) / range) * 100));
}

export function stripFeatureNameFromPredicate(
    predicateText: string,
    featureName: string,
): string {
    if (!featureName || !predicateText) return predicateText;
    const prefix = featureName + " ";
    if (predicateText.startsWith(prefix)) {
        return predicateText.slice(prefix.length);
    }
    return predicateText;
}
