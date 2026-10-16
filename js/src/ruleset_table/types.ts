export interface RawRule {
    iox_rule_id?: number;
    rule_name?: string;
    precision?: number;
    recall?: number;
    tp?: number;
    fp?: number;
    fn?: number;
    unique_tp?: number;
    non_unique_tp?: number;
    unique_fp?: number;
    non_unique_fp?: number;
    annotation?: string;
    features?: Record<string, string>;
}

export interface NormalizedRule {
    ruleIndex: number;
    ioxRuleId: number;
    ruleName: string;
    precision: number;
    recall: number;
    tp: number;
    fp: number;
    fn: number;
    uniqueTp: number;
    nonUniqueTp: number;
    uniqueFp: number;
    nonUniqueFp: number;
    annotation: string;
    features: Record<string, string>;
}

export type TableMode = "stored" | "suggested";

export type ActionKind = "store" | "remove" | "annotate" | "edit";

export interface ActionRequest {
    kind: ActionKind;
    iox_rule_id: number;
    note: string;
    action_id: number;
}

/** One-shot outcome of an action, published by Python (see `notify`). */
export interface ActionResult {
    kind?: string;
    level?: "ok" | "warn";
    message?: string;
    result_id?: number;
}

export interface Toast {
    message: string;
    level: "ok" | "warn";
}
