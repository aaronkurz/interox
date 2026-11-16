import { TOKENS } from "./tokens";
import { splitWidths } from "./data";
import type { NormalizedRule } from "./types";
import { DiceIcon, isDrawn } from "../common/caseDraw";
import type { CaseDraw, DrawCategory } from "../common/caseDraw";

/** Colour of each count's label, and of the chip of a case drawn from it. */
export const DRAW_COLORS: Record<"tp" | "fp" | "fn", string> = {
    tp: TOKENS.tpUnique,
    fp: TOKENS.fpUnique,
    fn: "#6a737d",
};

/**
 * A count's label. In draw mode it is a button that hands out one of the cases
 * it counts; otherwise it is the plain text it always was.
 */
function CountLabel({
    category,
    label,
    total,
    rule,
    draw,
}: {
    category: "tp" | "fp" | "fn";
    label: string;
    total: number;
    rule: NormalizedRule;
    draw: CaseDraw | null;
}) {
    const text = `${label} (${total})`;
    const color = DRAW_COLORS[category];
    if (!draw) {
        return (
            <span className="rs-glyph-labels" style={{ color }}>
                {text}
            </span>
        );
    }
    const on = isDrawn(draw, category as DrawCategory, rule.ioxRuleId);
    return (
        <button
            type="button"
            className={`rs-glyph-labels rs-glyph-draw cd-target${on ? " cd-target--on" : ""}`}
            style={{ color }}
            disabled={total === 0}
            aria-label={`Draw a ${label} case of ${rule.ruleName}`}
            title={total === 0 ? `No ${label} cases to draw` : `Draw a ${label} case of this rule`}
            onClick={() => draw.draw(category, rule.ioxRuleId)}
        >
            {text}
            <DiceIcon size={10} />
        </button>
    );
}

function SplitGlyphLine({
    category,
    label,
    total,
    unique,
    nonUnique,
    colorUnique,
    colorNonUnique,
    title,
    rule,
    draw,
}: {
    category: "tp" | "fp";
    label: string;
    total: number;
    unique: number;
    nonUnique: number;
    colorUnique: string;
    colorNonUnique: string;
    title: string;
    rule: NormalizedRule;
    draw: CaseDraw | null;
}) {
    const widths = splitWidths(unique, nonUnique);

    return (
        <div className="rs-glyph-container" title={draw ? undefined : title}>
            <CountLabel category={category} label={label} total={total} rule={rule} draw={draw} />
            <div className="rs-glyph-bar-container" title={title}>
                {total > 0
                    ? (
                        <>
                            <div
                                className="rs-glyph-segment"
                                style={{ backgroundColor: colorUnique, width: `${widths.unique}%` }}
                            />
                            <div
                                className="rs-glyph-segment"
                                style={{ backgroundColor: colorNonUnique, width: `${widths.nonUnique}%` }}
                            />
                        </>
                    )
                    : <div className="rs-glyph-empty" />}
            </div>
        </div>
    );
}

interface SplitGlyphCellProps {
    rule: NormalizedRule;
    /** Set in draw mode: the three counts become buttons. */
    draw: CaseDraw | null;
}

export default function SplitGlyphCell({ rule, draw }: SplitGlyphCellProps) {
    const tpTitle = `TP - Unique: ${rule.uniqueTp}, Non-Unique: ${rule.nonUniqueTp}`;
    const fpTitle = `FP - Unique: ${rule.uniqueFp}, Non-Unique: ${rule.nonUniqueFp}`;

    return (
        <td>
            <div className={`rs-glyph-cell${draw ? " rs-glyph-cell--draw" : ""}`}>
                <SplitGlyphLine
                    category="tp"
                    label="TP"
                    total={rule.tp}
                    unique={rule.uniqueTp}
                    nonUnique={rule.nonUniqueTp}
                    colorUnique={TOKENS.tpUnique}
                    colorNonUnique={TOKENS.tpNonUnique}
                    title={tpTitle}
                    rule={rule}
                    draw={draw}
                />
                <SplitGlyphLine
                    category="fp"
                    label="FP"
                    total={rule.fp}
                    unique={rule.uniqueFp}
                    nonUnique={rule.nonUniqueFp}
                    colorUnique={TOKENS.fpUnique}
                    colorNonUnique={TOKENS.fpNonUnique}
                    title={fpTitle}
                    rule={rule}
                    draw={draw}
                />
                <div className="rs-glyph-container" title={draw ? undefined : "FN"}>
                    <CountLabel category="fn" label="FN" total={rule.fn} rule={rule} draw={draw} />
                </div>
            </div>
        </td>
    );
}
