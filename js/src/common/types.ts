export interface RawFeatureSummary {
  kind?: string;
  total_count?: number;
  missing_count?: number;
  min?: number;
  median?: number;
  max?: number;
  bin_counts?: number[];
  bin_edges?: number[];
  outcome_positive_bin_counts?: number[];
  outcome_positive_total?: number;
  top_categories?: Array<{ label?: string; count?: number; ratio?: number }>;
}

export interface NumericDiscreteSummary {
  kind: "numeric_discrete";
  total_count: number;
  missing_count: number;
  min: number | null;
  median: number | null;
  max: number | null;
  bin_counts: number[];
  bin_edges: number[];
  outcome_positive_bin_counts: number[];
  outcome_positive_total: number;
}

export interface NumericSummary {
  kind: "numeric";
  total_count: number;
  missing_count: number;
  min: number | null;
  median: number | null;
  max: number | null;
  bin_counts: number[];
  bin_edges: number[];
  outcome_positive_bin_counts: number[];
  outcome_positive_total: number;
}

export interface CategoricalEntry {
  label: string;
  count: number;
  ratio: number;
}

export interface CategoricalSummary {
  kind: "categorical";
  total_count: number;
  missing_count: number;
  top_categories: CategoricalEntry[];
}

export interface EmptySummary {
  kind: "empty";
  total_count: number;
  missing_count: number;
}

export type NormalizedSummary =
  | NumericDiscreteSummary
  | NumericSummary
  | CategoricalSummary
  | EmptySummary;

export type NumericLikeSummary = NumericDiscreteSummary | NumericSummary;
