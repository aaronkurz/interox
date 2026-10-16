import type { ReactNode } from "react";

export const IMPORTANCE_HELP =
    "Importance estimates how useful each attribute is for predicting the outcome, " +
    "derived from a tree-based model trained on the data. Higher = more predictive " +
    "potential. It is a ranking aid, not a guarantee — the exact method is still " +
    "being finalized.";

export function TypeBadge({ kind }: { kind: "num" | "cat" }) {
    return (
        <span className={`rb-typebadge ${kind}`} title={kind === "num" ? "Numerical" : "Categorical"}>
            {kind === "num" ? "123" : "abc"}
        </span>
    );
}

export function ImportanceBar({ value }: { value: number }) {
    return (
        <span className="rb-imp" title={`Importance ${value.toFixed(2)}`}>
            <span className="rb-imp-fill" style={{ width: `${value * 100}%`, display: "block" }} />
        </span>
    );
}

interface InfoTipProps {
    children: ReactNode;
    align?: "right";
}

export function InfoTip({ children, align }: InfoTipProps) {
    return (
        <span className={`rb-info${align === "right" ? " rb-info-right" : ""}`}>
            <button type="button" className="rb-info-btn" aria-label="What does importance mean?">
                i
            </button>
            <span className="rb-info-pop" role="tooltip">
                {children}
            </span>
        </span>
    );
}

export function HistLegend() {
    return (
        <span
            className="rb-legend"
            title="Histogram colors: green = cases where the outcome is positive (rule should catch these), blue = all other cases"
        >
            <i className="rb-legend-pos" />
            outcome&nbsp;⊕
            <i className="rb-legend-all" />
            other
        </span>
    );
}

interface SegOption<T extends string> {
    v: T;
    label: string;
}

interface SegControlProps<T extends string> {
    options: SegOption<T>[];
    value: T;
    onChange: (value: T) => void;
}

export function SegControl<T extends string>({ options, value, onChange }: SegControlProps<T>) {
    return (
        <div className="rb-seg">
            {options.map((o) => (
                <button
                    key={o.v}
                    type="button"
                    className={value === o.v ? "rb-on" : ""}
                    onClick={() => onChange(o.v)}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}
