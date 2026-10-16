import { useRef, useState } from "react";
import { clamp } from "./engine";

export const RAIL_DEFAULT_WIDTH = 232;
const RAIL_MIN_WIDTH = 160;
const RAIL_MAX_WIDTH = 520;
/** Canvas width kept free so a condition card (268px) never gets squeezed out. */
const CANVAS_RESERVE = 300;
const KEY_STEP = 16;

interface RailSplitterProps {
    width: number;
    onResize: (width: number) => void;
    onDraggingChange: (dragging: boolean) => void;
}

export default function RailSplitter({ width, onResize, onDraggingChange }: RailSplitterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);

    // The widest the rail may get in the space actually available, resolved at
    // drag time because the notebook column the widget sits in can be resized.
    const maxWidth = (): number => {
        const body = ref.current?.parentElement;
        const available = body ? body.getBoundingClientRect().width - CANVAS_RESERVE : RAIL_MAX_WIDTH;
        return Math.max(RAIL_MIN_WIDTH, Math.min(RAIL_MAX_WIDTH, available));
    };

    const startDrag = (e: React.PointerEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = width;
        const max = maxWidth();
        setDragging(true);
        onDraggingChange(true);
        const move = (ev: PointerEvent) => {
            onResize(clamp(startWidth + ev.clientX - startX, RAIL_MIN_WIDTH, max));
        };
        const up = () => {
            setDragging(false);
            onDraggingChange(false);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        const step = e.key === "ArrowLeft" ? -KEY_STEP : e.key === "ArrowRight" ? KEY_STEP : 0;
        if (step === 0) return;
        e.preventDefault();
        onResize(clamp(width + step, RAIL_MIN_WIDTH, maxWidth()));
    };

    return (
        <div
            ref={ref}
            className={`rb-splitter${dragging ? " rb-dragging" : ""}`}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize the attribute list"
            aria-valuenow={Math.round(width)}
            aria-valuemin={RAIL_MIN_WIDTH}
            aria-valuemax={RAIL_MAX_WIDTH}
            tabIndex={0}
            title="Drag to resize · double-click to reset"
            onPointerDown={startDrag}
            onDoubleClick={() => onResize(RAIL_DEFAULT_WIDTH)}
            onKeyDown={onKeyDown}
        />
    );
}
