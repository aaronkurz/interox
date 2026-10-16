import type { RawFeatureSummary } from "../common/types";

export type { RawFeatureSummary };

export interface RawFeatureData {
  feature?: string;
  predicates_removed?: string;
  predicate_boundaries?: number[];
  predicate_relations?: string[];
  predicate_string_values?: string[];
  unique_tp_removed?: number;
  unique_fp_removed?: number;
  precision_feature_alone?: number;
  recall_feature_alone?: number;
  summary?: RawFeatureSummary;
}

export interface RawRuleData {
  rule_index?: number;
  rule_name?: string;
  precision?: number;
  recall?: number;
  features?: RawFeatureData[];
  max_total_removed?: number;
}

export interface ExperimentResult {
  precision: number;
  recall: number;
  tp: number;
  fp: number;
  fn: number;
  eval_id?: number;
}

export interface NormalizedFeature {
  feature: string;
  predicatesRemoved: string;
  predicateBoundaries: number[];
  predicateRelations: string[];
  predicateStringValues: string[];
  uniqueTpRemoved: number;
  uniqueFpRemoved: number;
  totalRemoved: number;
  precisionFeatureAlone: number;
  recallFeatureAlone: number;
  summary: RawFeatureSummary;
}

export interface RuleData {
  title: string;
  ruleName: string;
  precision: number;
  recall: number;
  features: NormalizedFeature[];
  maxTotalRemoved: number;
}

export type {
  NumericDiscreteSummary,
  NumericSummary,
  CategoricalEntry,
  CategoricalSummary,
  EmptySummary,
  NormalizedSummary,
  NumericLikeSummary,
} from "../common/types";
