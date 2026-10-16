import { useId } from "react";
import type { KeyboardEvent } from "react";
import { COLORS, BAND_OPACITY, DIMMED } from "./tokens";
import { formatCount } from "./data";
import {
    computeGeometry,
    ribbon,
    X_LOG,
    X_LOG_RIGHT,
    X_BOX,
    X_BOX_RIGHT,
    X_PRED,
    COL_W,
    BOX_W,
} from "./geometry";
import type { ExplanationData, SelectionKey } from "./types";

const VIEW_W = 1000;
/** Right edge of the case log's row labels; they are right-aligned to it. */
const X_LOG_LABEL = X_LOG - 10;
/** Left edge of the prediction column's readouts. */
const X_PRED_LABEL = X_PRED + COL_W + 12;

const BAND_LABELS: Record<SelectionKey, string> = {
    exp: "Cases explained (TP)",
    open: "Remaining cases (FN)",
    fp: "Cases wrongly claimed (FP)",
    tn: "Cases left alone (TN)",
};

const BAND_COLORS: Record<SelectionKey, string> = {
    exp: COLORS.explainedCorrectly,
    open: COLORS.toBeExplained,
    fp: COLORS.falsePositives,
    tn: COLORS.leftAlone,
};

/**
 * Rough advance width of a string in the 10.5px note style. SVG has no layout
 * pass to ask, and this only has to be close enough to centre a marker beside
 * a short label.
 */
function estimatedWidth(text: string): number {
    return text.length * 5.1;
}

function bandOpacity(key: SelectionKey, sel: SelectionKey | null): number {
    const base = BAND_OPACITY[key];
    if (sel === null) return base;
    if (sel === key) return Math.min(1, base + BAND_OPACITY.selectedBoost);
    return BAND_OPACITY.unselected;
}

interface FlowProps {
    data: ExplanationData;
    toScale: boolean;
    selection: SelectionKey | null;
    onSelect: (key: SelectionKey) => void;
}

export default function Flow({ data, toScale, selection, onSelect }: FlowProps) {
    const g = computeGeometry(data, toScale);
    const stubId = `${useId()}-stub`;

    // SVG shapes are not focusable on their own; the case log column carries the
    // keyboard affordance so each group has exactly one tab stop.
    const handles = (key: SelectionKey, focusable: boolean) => ({
        className: "es-band",
        onClick: () => onSelect(key),
        ...(focusable
            ? {
                  role: "button",
                  tabIndex: 0,
                  "aria-pressed": selection === key,
                  "aria-label": `${BAND_LABELS[key]}: ${formatCount(count(key))}`,
                  onKeyDown: (event: KeyboardEvent<SVGElement>) => {
                      if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          onSelect(key);
                      }
                  },
              }
            : { "aria-hidden": true }),
    });

    function count(key: SelectionKey): number {
        if (key === "exp") return data.expTp;
        if (key === "open") return data.casesTbe;
        if (key === "fp") return data.expFp;
        return data.expTn;
    }

    const op = {
        exp: bandOpacity("exp", selection),
        open: bandOpacity("open", selection),
        fp: bandOpacity("fp", selection),
        tn: bandOpacity("tn", selection),
    };
    const tnFill = g.clipped ? `url(#${stubId})` : COLORS.leftAlone;

    /** Text follows its band: a readout for a dimmed group dims with it. */
    const textOpacity = (...keys: SelectionKey[]) =>
        selection === null || keys.includes(selection) ? 1 : DIMMED;

    const ruleWord = data.storedRules === 1 ? "rule" : "rules";
    const disjunction =
        data.storedRules === 1
            ? "R0"
            : data.storedRules === 2
              ? "R0 ∨ R1"
              : `R0 ∨ … ∨ R${data.storedRules - 1}`;
    // An empty ruleset claims nothing, so the box gives way to the lane it
    // would have occupied — every case flows straight past it.
    const emptyNote =
        data.storedRules === 0 ? "no rules stored yet" : `${data.storedRules} ${ruleWord}, claiming nothing`;

    return (
        <svg
            className="es-flow"
            viewBox={`0 0 ${VIEW_W} ${g.height}`}
            role="group"
            aria-label="Where the stored ruleset sends each case"
        >
            <defs>
                <pattern
                    id={stubId}
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                >
                    <rect width="8" height="8" fill={COLORS.stubBase} />
                    <line x1="0" y1="0" x2="0" y2="8" stroke={COLORS.stubStripe} strokeWidth="3" />
                </pattern>
            </defs>

            <text className="es-flow-caption" x={X_LOG + COL_W / 2} y="18" textAnchor="middle">
                CASE LOG
            </text>
            <text className="es-flow-caption" x={X_PRED + COL_W / 2} y="18" textAnchor="middle">
                PREDICTED
            </text>

            {/* Ribbons first: the columns and the rule set box paint over them. */}
            <path
                d={ribbon(
                    X_LOG_RIGHT,
                    g.tnY,
                    g.tnY + g.tnH,
                    X_PRED,
                    g.predTnY,
                    g.predTnY + g.tnH,
                )}
                fill={BAND_COLORS.tn}
                opacity={op.tn}
                {...handles("tn", false)}
            />
            <path
                d={ribbon(
                    X_LOG_RIGHT,
                    g.openY,
                    g.openY + g.openH,
                    X_PRED,
                    g.predY,
                    g.predY + g.openH,
                )}
                fill={BAND_COLORS.open}
                opacity={op.open}
                {...handles("open", false)}
            />
            <path
                d={ribbon(
                    X_LOG_RIGHT,
                    g.topY,
                    g.topY + g.expH,
                    X_BOX,
                    g.boxY,
                    g.boxY + g.expH,
                )}
                fill={BAND_COLORS.exp}
                opacity={op.exp}
                {...handles("exp", false)}
            />
            <path
                d={ribbon(
                    X_LOG_RIGHT,
                    g.negY,
                    g.negY + g.fpH,
                    X_BOX,
                    g.fpOutY,
                    g.fpOutY + g.fpH,
                )}
                fill={BAND_COLORS.fp}
                opacity={op.fp}
                {...handles("fp", false)}
            />

            {/* What the rule set emits, carried across to the prediction column. */}
            <rect
                x={X_BOX_RIGHT}
                y={g.boxY}
                width={X_PRED - X_BOX_RIGHT}
                height={g.expH}
                fill={BAND_COLORS.exp}
                opacity={op.exp}
                {...handles("exp", false)}
            />
            <rect
                x={X_BOX_RIGHT}
                y={g.fpOutY}
                width={X_PRED - X_BOX_RIGHT}
                height={g.fpH}
                fill={BAND_COLORS.fp}
                opacity={op.fp}
                {...handles("fp", false)}
            />

            {/* Case log column. */}
            <rect
                x={X_LOG}
                y={g.topY}
                width={COL_W}
                height={g.expH}
                fill={BAND_COLORS.exp}
                opacity={op.exp}
                {...handles("exp", true)}
            />
            <rect
                x={X_LOG}
                y={g.openY}
                width={COL_W}
                height={g.openH}
                fill={BAND_COLORS.open}
                opacity={op.open}
                {...handles("open", true)}
            />
            <rect
                x={X_LOG}
                y={g.negY}
                width={COL_W}
                height={g.fpH}
                fill={BAND_COLORS.fp}
                opacity={op.fp}
                {...handles("fp", true)}
            />
            <rect
                x={X_LOG}
                y={g.tnY}
                width={COL_W}
                height={g.tnH}
                fill={tnFill}
                opacity={op.tn}
                {...handles("tn", true)}
            />
            <rect
                x={X_LOG}
                y={g.topY}
                width={COL_W}
                height={g.posH}
                fill="none"
                stroke={COLORS.toBeExplained}
                strokeWidth="1.2"
                pointerEvents="none"
            />
            <rect
                x={X_LOG}
                y={g.negY}
                width={COL_W}
                height={g.negH}
                fill="none"
                stroke={COLORS.poolOutline}
                strokeWidth="1.2"
                pointerEvents="none"
            />

            <text
                className="es-flow-row"
                x={X_LOG_LABEL}
                y={g.posLabelY}
                textAnchor="end"
                opacity={textOpacity("exp", "open")}
            >
                outcome · {formatCount(data.pos)}
            </text>
            <text
                className="es-flow-row"
                x={X_LOG_LABEL}
                y={g.negLabelY}
                textAnchor="end"
                opacity={textOpacity("fp", "tn")}
            >
                ¬outcome · {formatCount(data.neg)}
            </text>
            {g.clipped && (
                <text className="es-flow-note" x={X_LOG_LABEL} y={g.stubLabelY} textAnchor="end">
                    clipped for legibility
                </text>
            )}

            {/* The rule set itself: a funnel while it claims something, an
                empty lane the cases pass straight through while it does not. */}
            {g.empty ? (
                <>
                    <text
                        className="es-flow-box-caption"
                        x={X_BOX + BOX_W / 2}
                        y="18"
                        textAnchor="middle"
                    >
                        STORED RULESET (DNF)
                    </text>
                    {/* An empty stand-in for the funnel, kept out of the flow:
                        the marker sits beside the note rather than over the
                        lane the cases pass through. */}
                    <rect
                        x={X_BOX + BOX_W / 2 - estimatedWidth(emptyNote) / 2 - 17}
                        y={g.topY - 17}
                        width="11"
                        height="11"
                        fill="none"
                        stroke={COLORS.poolOutline}
                        strokeWidth="1.2"
                        strokeDasharray="3 2.5"
                    />
                    <text
                        className="es-flow-note"
                        x={X_BOX + BOX_W / 2 + 7}
                        y={g.topY - 8}
                        textAnchor="middle"
                    >
                        {emptyNote}
                    </text>
                </>
            ) : (
                <>
                    <rect
                        x={X_BOX}
                        y={g.boxY}
                        width={BOX_W}
                        height={g.boxH}
                        fill="#ffffff"
                        stroke={COLORS.outline}
                        strokeWidth="1.5"
                    />
                    <text className="es-flow-box-caption" x={X_BOX + 16} y={g.boxLine1Y}>
                        STORED RULESET (DNF)
                    </text>
                    <text className="es-flow-box-title" x={X_BOX + 16} y={g.boxLine2Y}>
                        {disjunction}
                    </text>
                    <text className="es-flow-note" x={X_BOX + 16} y={g.boxLine3Y}>
                        {formatCount(data.storedRules)} {ruleWord} · claims{" "}
                        {formatCount(data.expTp + data.expFp)}
                    </text>
                </>
            )}

            {/* Prediction column. */}
            <rect
                x={X_PRED}
                y={g.boxY}
                width={COL_W}
                height={g.expH}
                fill={BAND_COLORS.exp}
                opacity={op.exp}
                {...handles("exp", false)}
            />
            <rect
                x={X_PRED}
                y={g.fpOutY}
                width={COL_W}
                height={g.fpH}
                fill={BAND_COLORS.fp}
                opacity={op.fp}
                {...handles("fp", false)}
            />
            <rect
                x={X_PRED}
                y={g.boxY}
                width={COL_W}
                height={g.claimedH}
                fill="none"
                stroke={COLORS.outline}
                strokeWidth="1.2"
                pointerEvents="none"
            />
            <rect
                x={X_PRED}
                y={g.predY}
                width={COL_W}
                height={g.openH}
                fill={BAND_COLORS.open}
                opacity={op.open}
                {...handles("open", false)}
            />
            <rect
                x={X_PRED}
                y={g.predTnY}
                width={COL_W}
                height={g.tnH}
                fill={tnFill}
                opacity={op.tn}
                {...handles("tn", false)}
            />
            <rect
                x={X_PRED}
                y={g.predY}
                width={COL_W}
                height={g.predOpenH}
                fill="none"
                stroke={COLORS.poolOutline}
                strokeWidth="1.2"
                pointerEvents="none"
            />

            {data.expTp > 0 && (
                <text
                    className="es-flow-row"
                    x={X_PRED_LABEL}
                    y={g.expLabelY}
                    fill={COLORS.explainedCorrectly}
                    opacity={textOpacity("exp")}
                >
                    {formatCount(data.expTp)} explained (TP)
                </text>
            )}
            {data.expFp > 0 && (
                <text
                    className="es-flow-row"
                    x={X_PRED_LABEL}
                    y={g.fpLabelY}
                    fill={COLORS.falsePositives}
                    opacity={textOpacity("fp")}
                >
                    {formatCount(data.expFp)} wrongly claimed (FP)
                </text>
            )}
            {data.casesTbe > 0 && (
                <text
                    className="es-flow-row"
                    x={X_PRED_LABEL}
                    y={g.openLabelY}
                    fill={COLORS.toBeExplained}
                    opacity={textOpacity("open")}
                >
                    {formatCount(data.casesTbe)} remaining (FN)
                </text>
            )}
            {data.expTn > 0 && (
                <text
                    className="es-flow-row"
                    x={X_PRED_LABEL}
                    y={g.tnLabelY}
                    fill={COLORS.caption}
                    opacity={textOpacity("tn")}
                >
                    {formatCount(data.expTn)} left alone (TN)
                </text>
            )}
        </svg>
    );
}
