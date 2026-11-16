// "Draw a case": the part every widget shares.
//
// A widget shows counts, never the cases behind them. In draw mode a count
// becomes a button; clicking it asks Python for one case of that category
// (`draw_request` -> `draw_result`, see interox/case_draw.py) and the id is
// shown in a small popover, to be copied or handed to the notebook.
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useModelState } from "@anywidget/react";
import styles from "./caseDraw.css";

export type DrawCategory = "tp" | "fp" | "fn" | "tn";

/** The glossary word for each category (ubiquitous-language.md). */
export const CATEGORY_LABELS: Record<DrawCategory, string> = {
    tp: "Explained (TP)",
    fp: "Wrongly claimed (FP)",
    fn: "Remaining (FN)",
    tn: "Left alone (TN)",
};

/** What a draw was asked from: a category, of one rule where the widget has several. */
export interface DrawTarget {
    category: DrawCategory;
    ruleId: number | null;
}

export interface DrawPick extends DrawTarget {
    caseId: string;
    /** 1-based place of this case in the category's shuffled order. */
    position: number;
    total: number;
    /** Whether other rules cover the case too; null where that does not apply. */
    shared: boolean | null;
}

interface RawDrawResult {
    request_id?: string;
    category?: DrawCategory;
    iox_rule_id?: number | null;
    case_id?: string;
    position?: number;
    total?: number;
    shared?: boolean | null;
    error?: string;
}

export interface CaseDraw {
    /** What the popover is about; null when it is closed. */
    target: DrawTarget | null;
    /** The case drawn last for `target`, once Python has answered. */
    pick: DrawPick | null;
    error: string | null;
    canOpen: boolean;
    draw: (category: DrawCategory, ruleId?: number | null) => void;
    another: () => void;
    open: () => void;
    close: () => void;
}

function sameTarget(a: DrawTarget | null, b: DrawTarget | null): boolean {
    return !!a && !!b && a.category === b.category && a.ruleId === b.ruleId;
}

export function isDrawn(draw: CaseDraw, category: DrawCategory, ruleId: number | null = null): boolean {
    return sameTarget(draw.target, { category, ruleId });
}

/** Must be called below the anywidget render root, like `useModelState` itself. */
export function useCaseDraw(): CaseDraw {
    const [, setRequest] = useModelState<Record<string, unknown>>("draw_request");
    const [result] = useModelState<RawDrawResult>("draw_result");
    const [canOpen] = useModelState<boolean>("can_open_case");

    const [target, setTarget] = useState<DrawTarget | null>(null);
    const [pick, setPick] = useState<DrawPick | null>(null);
    const [error, setError] = useState<string | null>(null);
    // The id of the request whose answer is still wanted. A result left on the
    // model by an earlier view of this widget never matches it.
    const awaitedRef = useRef<string | null>(null);
    const counterRef = useRef(0);

    const send = useCallback(
        (body: Record<string, unknown>): string => {
            counterRef.current += 1;
            const requestId = `${Date.now()}-${counterRef.current}`;
            setRequest({ ...body, request_id: requestId });
            return requestId;
        },
        [setRequest],
    );

    const draw = useCallback(
        (category: DrawCategory, ruleId: number | null = null) => {
            const next = { category, ruleId };
            setTarget((current) => {
                // Another case of the same category replaces the one on screen
                // when it arrives; a different category starts from nothing.
                if (!sameTarget(current, next)) setPick(null);
                return next;
            });
            setError(null);
            awaitedRef.current = send({ kind: "draw", category, iox_rule_id: ruleId });
        },
        [send],
    );

    const another = useCallback(() => {
        if (target) draw(target.category, target.ruleId);
    }, [target, draw]);

    const open = useCallback(() => {
        send({ kind: "open" });
    }, [send]);

    const close = useCallback(() => {
        awaitedRef.current = null;
        setTarget(null);
        setPick(null);
        setError(null);
    }, []);

    useEffect(() => {
        if (!result || result.request_id == null) return;
        if (result.request_id !== awaitedRef.current) return;
        awaitedRef.current = null;
        if (result.error || result.case_id == null || !result.category) {
            setError(result.error || "No case could be drawn.");
            setPick(null);
            return;
        }
        setPick({
            category: result.category,
            ruleId: result.iox_rule_id ?? null,
            caseId: result.case_id,
            position: result.position ?? 1,
            total: result.total ?? 1,
            shared: result.shared ?? null,
        });
    }, [result]);

    return { target, pick, error, canOpen: !!canOpen, draw, another, open, close };
}

/** Copy text, also where the async clipboard API is missing or refused. */
export async function copyText(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        // Fall through to the selection-based copy below.
    }
    try {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        return ok;
    } catch {
        return false;
    }
}

export function CaseDrawStyles() {
    return <style>{styles}</style>;
}

export function DiceIcon({ size = 14 }: { size?: number }) {
    return (
        <svg
            className="cd-dice"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.3" fill="currentColor" />
            <circle cx="12" cy="12" r="1.3" fill="currentColor" />
            <circle cx="15.5" cy="15.5" r="1.3" fill="currentColor" />
        </svg>
    );
}

interface DrillToggleProps {
    on: boolean;
    onToggle: () => void;
    /** Icon only, for a place too tight for the words. */
    compact?: boolean;
    disabled?: boolean;
    /** What becomes clickable, for the tooltip: "TP, FP or FN". */
    hint: string;
}

export function DrillToggle({ on, onToggle, compact, disabled, hint }: DrillToggleProps) {
    return (
        <button
            type="button"
            className={`cd-toggle${on ? " cd-toggle--on" : ""}${compact ? " cd-toggle--compact" : ""}`}
            aria-pressed={on}
            aria-label={compact ? "Draw a case" : undefined}
            disabled={disabled}
            title={`Draw a case: click ${hint} to get the id of one case behind it`}
            onClick={onToggle}
        >
            <DiceIcon />
            {compact ? null : "Draw a case"}
        </button>
    );
}

interface DrawPopoverProps {
    draw: CaseDraw;
    /** Colour of the category chip. */
    color: string;
    /** What the category is counted over, after the position: "for Rule 1". */
    scope?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

/** The drawn case: its id, where it stands in its category, and what to do with it. */
export function DrawPopover({ draw, color, scope, className, style, children }: DrawPopoverProps) {
    const { target, pick, error } = draw;
    const [copied, setCopied] = useState<"yes" | "failed" | null>(null);
    const [opened, setOpened] = useState(false);

    // A new case is neither copied nor opened yet.
    useEffect(() => {
        setCopied(null);
        setOpened(false);
    }, [pick?.caseId, pick?.category, pick?.ruleId]);

    const { close } = draw;
    useEffect(() => {
        if (!target) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [target, close]);

    if (!target) return null;

    const copy = async () => {
        if (!pick) return;
        setCopied((await copyText(pick.caseId)) ? "yes" : "failed");
    };

    return (
        <div className={`cd-pop${className ? ` ${className}` : ""}`} style={style} role="status">
            {children}
            <span className="cd-chip" style={{ background: color }}>
                {CATEGORY_LABELS[target.category]}
            </span>
            {error ? (
                <span className="cd-error">{error}</span>
            ) : pick ? (
                <>
                    <span className="cd-id" title="Case id">{pick.caseId}</span>
                    <span className="cd-pos">
                        {pick.position} of {pick.total}
                        {scope ? ` ${scope}` : ""}
                    </span>
                    {pick.shared === null ? null : (
                        <span
                            className="cd-tag"
                            title={pick.shared
                                ? "At least one other rule of this ruleset fires on this case too"
                                : "No other rule of this ruleset fires on this case"}
                        >
                            {pick.shared ? "shared with other rules" : "only this rule"}
                        </span>
                    )}
                </>
            ) : (
                <span className="cd-pos">Drawing…</span>
            )}
            <span className="cd-actions">
                {pick && !error ? (
                    <>
                        <button type="button" className="cd-btn" onClick={copy}>
                            {copied === "yes" ? "Copied" : copied === "failed" ? "Copy failed" : "Copy id"}
                        </button>
                        <button
                            type="button"
                            className="cd-btn"
                            disabled={pick.total <= 1}
                            title={pick.total <= 1 ? "This is the only case here" : "Draw the next case"}
                            onClick={draw.another}
                        >
                            Another
                        </button>
                        {draw.canOpen ? (
                            <button
                                type="button"
                                className="cd-btn"
                                title="Show this case in the notebook's case view"
                                onClick={() => {
                                    draw.open();
                                    setOpened(true);
                                }}
                            >
                                {opened ? "Shown in case view" : "Show in case view"}
                            </button>
                        ) : null}
                    </>
                ) : null}
                <button type="button" className="cd-close" aria-label="Close" onClick={close}>
                    ✕
                </button>
            </span>
        </div>
    );
}
