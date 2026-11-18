import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { COLORS, DIMMED } from "./tokens";
import { normalizeData, formatPercent, formatCount } from "./data";
import Flow from "./Flow";
import type { SelectionKey } from "./types";
import { DiceIcon, DrillToggle, FloatingDrawPopover, useCaseDraw, useDrawMode } from "../common/caseDraw";
import type { DrawCategory } from "../common/caseDraw";

/** The flow's groups, as the categories a case is drawn from. */
const CATEGORY_OF: Record<SelectionKey, DrawCategory> = {
    exp: "tp",
    open: "fn",
    fp: "fp",
    tn: "tn",
};

const DRAW_COLORS: Record<DrawCategory, string> = {
    tp: COLORS.explainedCorrectly,
    fn: COLORS.toBeExplained,
    fp: COLORS.falsePositives,
    // The band's own grey is too light to carry white text.
    tn: "#6e7781",
};

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
    /** Draw mode: a click on this tile hands out a case. */
    drawable?: boolean;
    /** Draw mode, but nothing to draw here. */
    empty?: boolean;
    context?: boolean;
}

function Tile({ label, value, color, lit, onSelect, pressed, drawable, empty, context }: TileProps) {
    const body: ReactNode = (
        <>
            <span className="es-tile-label">
                {label}
                {drawable ? <DiceIcon size={12} /> : null}
            </span>
            <span className="es-tile-value" style={{ color }}>
                {value}
            </span>
        </>
    );
    const style = context ? undefined : { opacity: lit ? 1 : DIMMED };

    if (!onSelect) {
        return (
            <div className="es-tile" style={style} data-cd-context={context ? "" : undefined}>
                {body}
            </div>
        );
    }
    return (
        <button
            type="button"
            className={`es-tile es-tile--button${drawable ? " es-tile--draw" : ""}`}
            style={style}
            aria-pressed={pressed}
            disabled={empty}
            title={drawable ? "Draw a case from this group" : undefined}
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

    const draw = useCaseDraw();
    const mode = useDrawMode(() => {
        draw.close();
        setSelection(null);
    }, data.totalCases > 0);
    const drill = mode.on;

    const counts: Record<SelectionKey, number> = {
        open: data.casesTbe,
        exp: data.expTp,
        fp: data.expFp,
        tn: data.expTn,
    };

    // One click, two meanings: outside draw mode it highlights a group, in draw
    // mode it also hands out a case of it. All other draw targets remain
    // available; the selected tile/band marks the drawn case's group.
    const toggle = (key: SelectionKey) => {
        if (!drill) {
            setSelection((current) => (current === key ? null : key));
            return;
        }
        if (counts[key] === 0) return;
        setSelection(key);
        draw.draw(CATEGORY_OF[key]);
    };

    const toggleDrill = () => {
        setSelection(null);
        mode.toggle();
    };

    const clearSelection = () => {
        draw.close();
        setSelection(null);
    };

    const closeDraw = () => {
        draw.close();
        setSelection(null);
    };

    const tileDraw = (key: SelectionKey) =>
        drill ? { drawable: counts[key] > 0, empty: counts[key] === 0 } : {};

    return (
        <div className="es-root" {...mode.rootProps}>
            <div className="es-header">
                <div className="es-title">Explanation status</div>
                <div className="es-pills">
                    <button
                        type="button"
                        className={`es-pill${toScale ? " es-pill--on" : ""}`}
                        aria-pressed={toScale}
                        data-cd-context=""
                        disabled={data.expTn === 0}
                        onClick={() => setToScale((on) => !on)}
                    >
                        <span className="es-pill-dot" />
                        ¬outcome pool to scale
                    </button>
                    <button
                        type="button"
                        className="es-pill"
                        data-cd-context=""
                        disabled={selection === null}
                        onClick={clearSelection}
                    >
                        clear selection
                    </button>
                    <DrillToggle
                        on={drill}
                        onToggle={toggleDrill}
                        disabled={data.totalCases === 0}
                        hint="a group — a band or a tile —"
                    />
                </div>
            </div>

            {drill ? (
                <div className="es-draw-hint">
                    Draw mode: click a group — a band or a tile — to get the id of one case in it. Esc to exit.
                </div>
            ) : null}

            <Flow data={data} toScale={toScale} selection={selection} onSelect={toggle} drill={drill} />

            <div className="es-tiles">
                <Tile
                    label="Remaining cases (FN)"
                    value={formatCount(data.casesTbe)}
                    color={COLORS.toBeExplained}
                    lit={drill ? counts.open > 0 : isLit("open", selection)}
                    pressed={selection === "open"}
                    onSelect={() => toggle("open")}
                    {...tileDraw("open")}
                />
                <Tile
                    label="Explained (TP)"
                    value={formatCount(data.expTp)}
                    color={COLORS.explainedCorrectly}
                    lit={drill ? counts.exp > 0 : isLit("exp", selection)}
                    pressed={selection === "exp"}
                    onSelect={() => toggle("exp")}
                    {...tileDraw("exp")}
                />
                <Tile
                    label="Wrongly claimed (FP)"
                    value={formatCount(data.expFp)}
                    color={COLORS.falsePositives}
                    lit={drill ? counts.fp > 0 : isLit("fp", selection)}
                    pressed={selection === "fp"}
                    onSelect={() => toggle("fp")}
                    {...tileDraw("fp")}
                />
                <Tile
                    label="Precision"
                    value={formatPercent(data.precision)}
                    color={COLORS.precision}
                    lit={isLit("precision", selection)}
                    context={drill}
                />
                <Tile
                    label="Recall"
                    value={formatPercent(data.recall)}
                    color={COLORS.recall}
                    lit={isLit("recall", selection)}
                    context={drill}
                />
                <Tile
                    label="Explanation size"
                    value={`${formatCount(data.storedRules)} ${data.storedRules === 1 ? "rule" : "rules"}`}
                    color={COLORS.storedRules}
                    lit={isLit("rules", selection)}
                    context={drill}
                />
            </div>

            {/* Laid over the widget, under the tile -- or, for cases left
                alone, the band -- the case was drawn from. */}
            {draw.target ? (
                <FloatingDrawPopover
                    draw={{ ...draw, close: closeDraw }}
                    color={DRAW_COLORS[draw.target.category]}
                    containerRef={mode.rootProps.ref}
                    anchors={[".es-tile[aria-pressed=\"true\"]", ".es-band--drawn"]}
                />
            ) : null}
        </div>
    );
}
