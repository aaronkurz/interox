import { useEffect, useRef, useState } from "react";
import { clamp, roundValue } from "./engine";
import { formatNumber } from "../common/utils";
import type { NumAttribute } from "./types";

/**
 * A single boundary value field. Keeps its own draft text so the user can edit
 * freely, then commits a clamped numeric value on blur / Enter; it re-syncs
 * whenever the boundary changes externally (e.g. via the drag handles).
 */
function BoundInput({
    value,
    min,
    max,
    isInt,
    label,
    title,
    onCommit,
}: {
    value: number;
    min: number;
    max: number;
    isInt: boolean;
    label: string;
    title: string;
    onCommit: (next: number) => void;
}) {
    const [text, setText] = useState(String(value));
    useEffect(() => {
        setText(String(value));
    }, [value]);

    const commit = (raw: string) => {
        const n = Number.parseFloat(raw);
        if (!Number.isFinite(n)) {
            setText(String(value));
            return;
        }
        onCommit(n);
    };

    return (
        <label className="rb-bound-field" title={title}>
            <span className="rb-bound-op">{label}</span>
            <input
                className="rb-bound-input"
                type="number"
                inputMode={isInt ? "numeric" : "decimal"}
                value={text}
                min={min}
                max={max}
                step={isInt ? 1 : "any"}
                onChange={(e) => setText(e.target.value)}
                onBlur={(e) => commit(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                }}
            />
        </label>
    );
}

interface RangeHistProps {
    attr: NumAttribute;
    lo: number;
    hi: number;
    onChange: (patch: { lo?: number; hi?: number }) => void;
}

export default function RangeHist({ attr, lo, hi, onChange }: RangeHistProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<"lo" | "hi" | null>(null);
    const span = attr.max - attr.min || 1;
    const pct = (v: number) => ((v - attr.min) / span) * 100;
    const lastIdx = attr.bins.length - 1;

    const toVal = (clientX: number): number => {
        const el = ref.current;
        if (!el) return attr.min;
        const rect = el.getBoundingClientRect();
        const t = clamp((clientX - rect.left) / rect.width, 0, 1);
        return roundValue(attr, attr.min + t * span);
    };

    const startDrag = (which: "lo" | "hi") => (e: React.PointerEvent) => {
        e.preventDefault();
        setDragging(which);
        const move = (ev: PointerEvent) => {
            const v = toVal(ev.clientX);
            if (which === "lo") onChange({ lo: Math.min(v, hi) });
            else onChange({ hi: Math.max(v, lo) });
        };
        const up = () => {
            setDragging(null);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
    };

    const binTitle = (i: number): string => {
        const b = attr.bins[i];
        if (attr.isDiscrete) {
            return `Value ${formatNumber(b.lo)}: Count ${b.n} (exact-value frequency), Positives: ${b.pos}`;
        }
        const right = i === lastIdx ? "]" : ")";
        return `Bin ${i + 1}: [${formatNumber(b.lo)}, ${formatNumber(b.hi)}${right}, Count: ${b.n}, Positives: ${b.pos}`;
    };

    return (
        <div className="rb-rhist-wrap">
            <div className="rb-rhist" ref={ref}>
                <div className="rb-hist">
                    {attr.bins.map((b, i) => {
                        const out = b.hi < lo || b.lo > hi;
                        const fillH = attr.maxN > 0 ? (b.n / attr.maxN) * 100 : 0;
                        const posH = attr.maxN > 0 ? (b.pos / attr.maxN) * 100 : 0;
                        return (
                            <div key={i} className={`rb-bin${out ? " rb-out" : ""}`} title={binTitle(i)}>
                                <div className="rb-bin-fill" style={{ height: `${fillH}%` }} />
                                <div className="rb-bin-pos" style={{ height: `${posH}%` }} />
                            </div>
                        );
                    })}
                </div>
                <div
                    className="rb-rhist-sel"
                    style={{ left: `${pct(lo)}%`, width: `${pct(hi) - pct(lo)}%` }}
                />
                <div
                    className={`rb-handle${dragging === "lo" ? " rb-dragging" : ""}`}
                    style={{ left: `${pct(lo)}%` }}
                    onPointerDown={startDrag("lo")}
                    title="Drag lower boundary"
                />
                <div
                    className={`rb-handle${dragging === "hi" ? " rb-dragging" : ""}`}
                    style={{ left: `${pct(hi)}%` }}
                    onPointerDown={startDrag("hi")}
                    title="Drag upper boundary"
                />
            </div>
            <div className="rb-hist-axis">
                <span>{formatNumber(attr.min)}</span>
                <span>{formatNumber(attr.max)}</span>
            </div>
            <div className="rb-bound-inputs">
                <BoundInput
                    value={lo}
                    min={attr.min}
                    max={hi}
                    isInt={attr.isInt}
                    label="≥"
                    title="Lower boundary — type an exact value"
                    onCommit={(n) => onChange({ lo: clamp(n, attr.min, hi) })}
                />
                <BoundInput
                    value={hi}
                    min={lo}
                    max={attr.max}
                    isInt={attr.isInt}
                    label="≤"
                    title="Upper boundary — type an exact value"
                    onCommit={(n) => onChange({ hi: clamp(n, lo, attr.max) })}
                />
            </div>
        </div>
    );
}
