// ---------- raw traits (Python -> JS) ----------

export interface RawCategory {
  value?: string;
  count?: number;
  outcome_positive_count?: number;
}

export interface RawAttributeSummary {
  kind?: string;
  min?: number | null;
  max?: number | null;
  median?: number | null;
  bin_counts?: number[];
  outcome_positive_bin_counts?: number[];
  bin_edges?: number[];
  categories?: RawCategory[];
  total_count?: number;
  missing_count?: number;
  outcome_positive_total?: number;
}

export interface RawAttribute {
  id?: string;
  label?: string;
  kind?: string;
  importance?: number;
  summary?: RawAttributeSummary;
  // Enrichment provenance, read off the case log's record on the Python side
  // (`eclear/enrichment/specs.py`), or parsed from the column name when there
  // is no record. Optional: an older backend simply omits them.
  family?: string;
  family_label?: string;
  sources?: string[];
}

// ---------- normalized attributes ----------

export interface NumericBin {
  n: number;
  pos: number;
  lo: number;
  hi: number;
}

/** Fields every attribute carries regardless of its kind. */
export interface AttributeBase {
  id: string;
  label: string;
  importance: number;
  /** Enrichment family key, e.g. "count" / "delay" / "start" / "case" / "other". */
  family: string;
  /** Display label for `family`, e.g. "Start time". */
  familyLabel: string;
  /** Data points the attribute was derived from: one activity or event
   *  attribute for most families, two for a delay, none when unknown. */
  sources: string[];
}

export interface NumAttribute extends AttributeBase {
  kind: "num";
  min: number;
  max: number;
  median: number;
  isInt: boolean;
  isDiscrete: boolean;
  bins: NumericBin[];
  maxN: number;
  total: number;
  outcomePositiveTotal: number;
  missing: number;
}

export interface CatValue {
  value: string;
  n: number;
  pos: number;
}

export interface CatAttribute extends AttributeBase {
  kind: "cat";
  categories: CatValue[];
  maxN: number;
  total: number;
  outcomePositiveTotal: number;
  missing: number;
}

export type Attribute = NumAttribute | CatAttribute;

// ---------- conditions (JS -> Python) ----------

export type NumOp = ">=" | "<=" | "<" | ">";
export type CatOp = "==";

export type Condition =
  | { attr: string; op: "range"; lo: number; hi: number }
  | { attr: string; op: NumOp; value: number }
  | { attr: string; op: CatOp; value: string };

// ---------- evaluation / store results (Python -> JS) ----------

// Removal impact of one condition: the cases the rest of the rule covers but
// this condition keeps out, split by outcome. Keyed by attribute id.
export interface AttrImportance {
  attr: string;
  tp_removed: number;
  fp_removed: number;
}

export interface EvalResult {
  precision: number | null;
  recall: number | null;
  tp: number;
  fp: number;
  fn: number;
  tn?: number;
  total?: number;
  importance?: AttrImportance[];
  eval_id?: number;
}

export interface StoreResult {
  stored?: boolean;
  precision?: number | null;
  recall?: number | null;
  store_id?: number;
}

export interface OptimizeResult {
  conditions?: Condition[];
  request_id?: number;
  error?: string;
}

/** An existing rule handed to the builder from Python, to be edited here. */
export interface LoadedRule {
  conditions?: Condition[];
  label?: string;
  load_id?: number;
}
