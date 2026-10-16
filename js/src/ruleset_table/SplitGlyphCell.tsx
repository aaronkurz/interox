import { TOKENS } from "./tokens";
import { splitWidths } from "./data";
import type { NormalizedRule } from "./types";

function SplitGlyphLine({
    label,
    total,
    unique,
    nonUnique,
    colorUnique,
    colorNonUnique,
    title,
}: {
    label: string;
    total: number;
    unique: number;
    nonUnique: number;
    colorUnique: string;
    colorNonUnique: string;
    title: string;
}) {
    const widths = splitWidths(unique, nonUnique);

    return (
        <div className="rs-glyph-container" title={title}>
            <span className="rs-glyph-labels" style={{ color: colorUnique }}>
                {label} ({total})
            </span>
            <div className="rs-glyph-bar-container">
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
}

export default function SplitGlyphCell({ rule }: SplitGlyphCellProps) {
    const tpTitle = `TP - Unique: ${rule.uniqueTp}, Non-Unique: ${rule.nonUniqueTp}`;
    const fpTitle = `FP - Unique: ${rule.uniqueFp}, Non-Unique: ${rule.nonUniqueFp}`;

    return (
        <td>
            <div className="rs-glyph-cell">
                <SplitGlyphLine
                    label="TP"
                    total={rule.tp}
                    unique={rule.uniqueTp}
                    nonUnique={rule.nonUniqueTp}
                    colorUnique={TOKENS.tpUnique}
                    colorNonUnique={TOKENS.tpNonUnique}
                    title={tpTitle}
                />
                <SplitGlyphLine
                    label="FP"
                    total={rule.fp}
                    unique={rule.uniqueFp}
                    nonUnique={rule.nonUniqueFp}
                    colorUnique={TOKENS.fpUnique}
                    colorNonUnique={TOKENS.fpNonUnique}
                    title={fpTitle}
                />
                <div className="rs-glyph-container" title="FN">
                    <span className="rs-glyph-labels" style={{ color: "#6a737d" }}>
                        FN ({rule.fn})
                    </span>
                </div>
            </div>
        </td>
    );
}
