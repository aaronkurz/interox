import { clamp01, toNumber, toNonNegativeInt } from "../common/utils";
export { normalizeFeatureSummary } from "../common/data";
import type {
    RawFeatureSummary,
    RawRuleData,
    NormalizedFeature,
    RuleData,
} from "./types";

export function getData(title: unknown, ruleData: RawRuleData): RuleData {
    const rawFeatures = Array.isArray(ruleData.features) ? ruleData.features : [];
    const features: NormalizedFeature[] = rawFeatures.map((feature) => {
        const tpRemoved = toNonNegativeInt(feature?.unique_tp_removed);
        const fpRemoved = toNonNegativeInt(feature?.unique_fp_removed);
        const boundaries: number[] = Array.isArray(feature?.predicate_boundaries)
            ? feature.predicate_boundaries.map((v) => toNumber(v))
            : [];
        const relations: string[] = Array.isArray(feature?.predicate_relations)
            ? feature.predicate_relations.map((v) => String(v))
            : [];
        const stringValues: string[] = Array.isArray(feature?.predicate_string_values)
            ? feature.predicate_string_values.map((v) => String(v))
            : [];
        return {
            feature: String(feature?.feature || ""),
            predicatesRemoved: String(feature?.predicates_removed || ""),
            predicateBoundaries: boundaries,
            predicateRelations: relations,
            predicateStringValues: stringValues,
            uniqueTpRemoved: tpRemoved,
            uniqueFpRemoved: fpRemoved,
            totalRemoved: tpRemoved + fpRemoved,
            precisionFeatureAlone: clamp01(feature?.precision_feature_alone),
            recallFeatureAlone: clamp01(feature?.recall_feature_alone),
            summary: (feature?.summary && typeof feature.summary === "object"
                ? feature.summary
                : {}) as RawFeatureSummary,
        };
    });

    const derivedMax = features.reduce(
        (max, feat) => Math.max(max, feat.totalRemoved),
        0,
    );

    return {
        title: String(title || "Rule Details"),
        ruleName: String(ruleData.rule_name || ""),
        precision: clamp01(ruleData.precision),
        recall: clamp01(ruleData.recall),
        features,
        maxTotalRemoved: Math.max(toNonNegativeInt(ruleData.max_total_removed), derivedMax),
    };
}
