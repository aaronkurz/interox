import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { COLORS, DIMMED } from "./tokens";
import { normalizeData, formatPercent, formatCount } from "./data";
import Flow from "./Flow";
import type { SelectionKey } from "./types";

/** Which tiles a given selection feeds into; everything else dims. */
function isLit(tile: "open" | "exp" | "fp" | "precision" | "recall" | "rules",
    sel: SelectionKey | null): boolean {
    if (sel === null) return true;
    if (tile === "precision") return sel === "exp" || sel === "fp";
    if (tile === "recall") return sel === "exp" || sel === "open";
    // The stored rule count answers to no single group, and cases left alone
    // feed nothing at all.
    if (tile === "rules") return false;
    return tile === sel;
}

interface TileProps {
    label: string;
    value: string;
    color: string;
    lit: boolean;
    onSelect?: () => void;
    pressed?: boolean;
}

function Tile({ label, value, color, lit, onSelect, pressed }: TileProps) {
    const body: ReactNode = (
        <>
            <span className="es-tile-label">{label}</span>
            <span className="es-tile-value" style={{ color }}>
                {value}
            </span>
        </>
    );
    const style = { opacity: lit ? 1 : DIMMED };

    if (!onSelect) {
        return (
            <div className="es-tile" style={style}>
                {body}
            </div>
        );
    }
    return (
        <button
            type="button"
            className="es-tile es-tile--button"
            style={style}
            aria-pressed={pressed}
            onClick={onSelect}
        >
            {body}
        </button>
    );
}

interface ExplanationStatusProps {
    casesTbe: unknown;
    expTp: unknown;
    expFp: unknown;
    expTn: unknown;
    storedRules: unknown;
}

export default function ExplanationStatus({
    casesTbe,
    expTp,
    expFp,
    expTn,
    storedRules,
}: ExplanationStatusProps) {
    const data = useMemo(
        () => normalizeData(casesTbe, expTp, expFp, expTn, storedRules),
        [casesTbe, expTp, expFp, expTn, storedRules],
    );
    const [selection, setSelection] = useState<SelectionKey | null>(null);
    const [toScale, setToScale] = useState(false);

    const toggle = (key: SelectionKey) =>
        setSelection((current) => (current === key ? null : key));

    return (
        <div className="es-root">
            <div className="es-header">
                <div className="es-title">Explanation status</div>
                <div className="es-pills">
                    <button
                        type="button"
                        className={`es-pill${toScale ? " es-pill--on" : ""}`}
                        aria-pressed={toScale}
                        disabled={data.expTn === 0}
                        onClick={() => setToScale((on) => !on)}
                    >
                        <span className="es-pill-dot" />
                        ¬outcome pool to scale
                    </button>
                    <button
                        type="button"
                        className="es-pill"
                        disabled={selection === null}
                        onClick={() => setSelection(null)}
                    >
                        clear selection
                    </button>
                </div>
            </div>

            <Flow data={data} toScale={toScale} selection={selection} onSelect={toggle} />

            <div className="es-tiles">
                <Tile
                    label="Remaining cases (FN)"
                    value={formatCount(data.casesTbe)}
                    color={COLORS.toBeExplained}
                    lit={isLit("open", selection)}
                    pressed={selection === "open"}
                    onSelect={() => toggle("open")}
                />
                <Tile
                    label="Explained (TP)"
                    value={formatCount(data.expTp)}
                    color={COLORS.explainedCorrectly}
                    lit={isLit("exp", selection)}
                    pressed={selection === "exp"}
                    onSelect={() => toggle("exp")}
                />
                <Tile
                    label="Wrongly claimed (FP)"
                    value={formatCount(data.expFp)}
                    color={COLORS.falsePositives}
                    lit={isLit("fp", selection)}
                    pressed={selection === "fp"}
                    onSelect={() => toggle("fp")}
                />
                <Tile
                    label="Precision"
                    value={formatPercent(data.precision)}
                    color={COLORS.precision}
                    lit={isLit("precision", selection)}
                />
                <Tile
                    label="Recall"
                    value={formatPercent(data.recall)}
                    color={COLORS.recall}
                    lit={isLit("recall", selection)}
                />
                <Tile
                    label="Explanation size"
                    value={`${formatCount(data.storedRules)} ${data.storedRules === 1 ? "rule" : "rules"}`}
                    color={COLORS.storedRules}
                    lit={isLit("rules", selection)}
                />
            </div>
        </div>
    );
}
