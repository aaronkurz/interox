import { toNonNegativeInt } from "../common/utils";
import type { ExplanationData } from "./types";

export function computePrecision(expTp: number, expFp: number): number | null {
    const denominator = expTp + expFp;
    if (denominator <= 0) return null;
    return expTp / denominator;
}

export function computeRecall(expTp: number, casesTbe: number): number | null {
    const denominator = expTp + casesTbe;
    if (denominator <= 0) return null;
    return expTp / denominator;
}

export function widthPercent(value: number, total: number): number {
    if (total <= 0) return 0;
    return (value / total) * 100;
}

export function formatPercent(value: number | null): string {
    if (value == null || !Number.isFinite(value)) return "N/A";
    return `${(value * 100).toFixed(1)}%`;
}

export function formatCount(value: number): string {
    return value.toLocaleString("en-US");
}

export function normalizeData(
    casesTbe: unknown,
    expTp: unknown,
    expFp: unknown,
    expTn: unknown,
    storedRules: unknown,
): ExplanationData {
    const casesTbeNum = toNonNegativeInt(casesTbe);
    const expTpNum = toNonNegativeInt(expTp);
    const expFpNum = toNonNegativeInt(expFp);
    const expTnNum = toNonNegativeInt(expTn);
    // `total` counts cases, so the rule count stays out of it.
    const total = casesTbeNum + expTpNum + expFpNum;

    return {
        casesTbe: casesTbeNum,
        expTp: expTpNum,
        expFp: expFpNum,
        expTn: expTnNum,
        storedRules: toNonNegativeInt(storedRules),
        total,
        pos: expTpNum + casesTbeNum,
        neg: expFpNum + expTnNum,
        totalCases: expTpNum + casesTbeNum + expFpNum + expTnNum,
        precision: computePrecision(expTpNum, expFpNum),
        recall: computeRecall(expTpNum, casesTbeNum),
    };
}
