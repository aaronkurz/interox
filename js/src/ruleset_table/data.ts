import { clamp01, toNumber } from "../common/utils";
import type { NormalizedRule, RawRule } from "./types";

export function roundPredicate(value: string): string {
    return value.replace(/(\d+\.\d{5,})/g, (m) => Number(m).toFixed(4));
}

export function splitWidths(uniqueValue: number, nonUniqueValue: number) {
    const unique = Math.max(0, uniqueValue);
    const nonUnique = Math.max(0, nonUniqueValue);
    const total = unique + nonUnique;
    if (total <= 0) {
        return { unique: 0, nonUnique: 0 };
    }
    return {
        unique: (unique / total) * 100,
        nonUnique: (nonUnique / total) * 100,
    };
}

export function normalizeRule(input: unknown, index: number): NormalizedRule {
    const rule = (input && typeof input === "object" ? input : {}) as RawRule;
    return {
        ruleIndex: index,
        ioxRuleId: typeof rule.iox_rule_id === "number" ? rule.iox_rule_id : index,
        ruleName: String(rule.rule_name || ""),
        precision: clamp01(rule.precision),
        recall: clamp01(rule.recall),
        tp: toNumber(rule.tp),
        fp: toNumber(rule.fp),
        fn: toNumber(rule.fn),
        uniqueTp: toNumber(rule.unique_tp),
        nonUniqueTp: toNumber(rule.non_unique_tp),
        uniqueFp: toNumber(rule.unique_fp),
        nonUniqueFp: toNumber(rule.non_unique_fp),
        annotation: typeof rule.annotation === "string" ? rule.annotation : "",
        features:
            rule.features && typeof rule.features === "object" ? rule.features : {},
    };
}
