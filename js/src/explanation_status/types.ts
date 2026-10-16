/** The four case groups the flow diagram routes, and the tiles they light up. */
export type SelectionKey = "exp" | "open" | "fp" | "tn";

export interface ExplanationData {
    casesTbe: number;
    expTp: number;
    expFp: number;
    expTn: number;
    storedRules: number;
    /** Cases the explanation touches or still owes: tbe + tp + fp. */
    total: number;
    /** Outcome cases: the ones an explanation is judged on. */
    pos: number;
    /** Non-outcome cases: tp/tbe never land here. */
    neg: number;
    /** Every case in the log. The four counts partition it. */
    totalCases: number;
    precision: number | null;
    recall: number | null;
}
