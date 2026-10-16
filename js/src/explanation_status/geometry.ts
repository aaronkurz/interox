import type { ExplanationData } from "./types";

/**
 * Layout maths for the case-flow diagram. Kept free of React so the band
 * positions can be reasoned about (and eyeballed) on their own.
 *
 * The diagram reads left to right in a fixed 1000-unit viewBox:
 *
 *   case log column  ──ribbon──▶  DNF rule set box  ──▶  prediction column
 *        (X_LOG)                      (X_BOX)                (X_PRED)
 *
 * Explained (tp) and wrongly-claimed (fp) cases pass through the rule set;
 * still-open (tbe) and left-alone (tn) cases bypass it.
 */

export const X_LOG = 150;
export const X_PRED = 720;
export const X_BOX = 380;
export const COL_W = 54;
export const BOX_W = 200;
/** Right edge of the case log column: where the inbound ribbons start. */
export const X_LOG_RIGHT = X_LOG + COL_W;
/** Right edge of the rule set box: where its two outputs continue from. */
export const X_BOX_RIGHT = X_BOX + BOX_W;

/** Height the outcome pool is normalised to when the ¬outcome pool is clipped. */
const TARGET_POS_H = 150;
/** Height the whole case log is normalised to when drawn to scale. */
const TARGET_TOTAL_H = 450;
/** Height of the hatched stand-in for the clipped ¬outcome pool. */
const STUB_H = 40;
/** A non-empty group never collapses to nothing. */
const MIN_BAND_H = 3;
/** Vertical room a 12px count label needs to itself. */
const LABEL_PITCH = 15;
/** The rule set box never shrinks below its three lines of text. */
const MIN_BOX_H = 88;

const TOP_Y = 40;
const BOX_Y = 20;
/** Vertical break between the outcome and ¬outcome pools. */
const POOL_GAP = 26;
/** Vertical break between the claimed and not-claimed prediction blocks. */
const PRED_GAP = 37;
const BOTTOM_PAD = 34;

export interface FlowGeometry {
    scale: number;
    /** True when the ¬outcome pool is drawn as a stub rather than to scale. */
    clipped: boolean;
    /** True when the ruleset claims nothing, so there is no funnel to draw. */
    empty: boolean;
    expH: number;
    openH: number;
    fpH: number;
    tnH: number;
    posH: number;
    negH: number;
    /** Height of the rule set box; padded to fit its label. */
    boxH: number;
    /** Height of the claimed block in the prediction column: exp + fp. */
    claimedH: number;
    predOpenH: number;
    topY: number;
    boxY: number;
    openY: number;
    negY: number;
    tnY: number;
    fpOutY: number;
    predY: number;
    predTnY: number;
    posLabelY: number;
    negLabelY: number;
    stubLabelY: number;
    boxLine1Y: number;
    boxLine2Y: number;
    boxLine3Y: number;
    expLabelY: number;
    fpLabelY: number;
    openLabelY: number;
    tnLabelY: number;
    height: number;
}

/**
 * A band connecting `[a0, a1]` at `x0` to `[b0, b1]` at `x1`, as a closed path
 * with the two long edges eased through a cubic at the horizontal midpoint.
 */
export function ribbon(
    x0: number,
    a0: number,
    a1: number,
    x1: number,
    b0: number,
    b1: number,
): string {
    const c = (x0 + x1) / 2;
    return (
        `M${x0},${a0} C${c},${a0} ${c},${b0} ${x1},${b0}` +
        ` L${x1},${b1} C${c},${b1} ${c},${a1} ${x0},${a1} Z`
    );
}

function bandHeight(count: number, scale: number): number {
    if (count <= 0) return 0;
    return Math.max(MIN_BAND_H, count * scale);
}

/**
 * Baselines for the two count labels of one prediction block, centred on their
 * bands. Every group is labelled however thin its band is, so a pair that would
 * collide is pushed apart around the midpoint instead of being dropped.
 */
function labelPair(topY: number, topH: number, bottomH: number): [number, number] {
    const top = topY + topH / 2 + 4;
    const bottom = topY + topH + bottomH / 2 + 4;
    if (topH <= 0 || bottomH <= 0 || bottom - top >= LABEL_PITCH) return [top, bottom];
    const mid = (top + bottom) / 2;
    return [mid - LABEL_PITCH / 2, mid + LABEL_PITCH / 2];
}

/**
 * Pick the units-per-case factor.
 *
 * Clipped mode normalises the outcome pool to a constant height so the diagram
 * looks the same from one dataset to the next; it divides by the tallest pool
 * actually drawn, so a pathologically large false-positive count shrinks the
 * drawing instead of running off the bottom of it.
 */
function computeScale(data: ExplanationData, toScale: boolean): number {
    if (toScale) return TARGET_TOTAL_H / Math.max(data.totalCases, 1);
    return TARGET_POS_H / Math.max(data.pos, data.expFp, 1);
}

export function computeGeometry(data: ExplanationData, toScale: boolean): FlowGeometry {
    const scale = computeScale(data, toScale);
    const expH = bandHeight(data.expTp, scale);
    const openH = bandHeight(data.casesTbe, scale);
    const fpH = bandHeight(data.expFp, scale);
    // An empty ¬outcome pool gets no stub — there is nothing to stand in for.
    const clipped = !toScale && data.expTn > 0;
    const tnH = clipped ? STUB_H : bandHeight(data.expTn, scale);

    const posH = expH + openH;
    const negH = fpH + tnH;
    const openY = TOP_Y + expH;
    const negY = TOP_Y + posH + POOL_GAP;
    const tnY = negY + fpH;

    const claimedH = expH + fpH;
    // With nothing claimed the box would be an obstacle in an otherwise empty
    // lane, so it collapses and the bypassing cases run straight across.
    const empty = claimedH <= 0;
    const boxH = empty ? 0 : Math.max(claimedH, MIN_BOX_H);
    const fpOutY = BOX_Y + expH;
    const predY = empty ? TOP_Y : BOX_Y + boxH + PRED_GAP;
    const predTnY = predY + openH;
    const predOpenH = openH + tnH;

    const [expLabelY, fpLabelY] = labelPair(BOX_Y, expH, fpH);
    const [openLabelY, tnLabelY] = labelPair(predY, openH, tnH);

    const height = Math.round(
        Math.max(negY + negH, predY + predOpenH, tnLabelY, TOP_Y) + BOTTOM_PAD,
    );

    return {
        scale,
        clipped,
        empty,
        expH,
        openH,
        fpH,
        tnH,
        posH,
        negH,
        boxH,
        claimedH,
        predOpenH,
        topY: TOP_Y,
        boxY: BOX_Y,
        openY,
        negY,
        tnY,
        fpOutY,
        predY,
        predTnY,
        posLabelY: TOP_Y - 6,
        negLabelY: negY - 6,
        stubLabelY: negY + negH + 14,
        boxLine1Y: BOX_Y + 22,
        boxLine2Y: BOX_Y + 46,
        boxLine3Y: BOX_Y + 66,
        expLabelY,
        fpLabelY,
        openLabelY,
        tnLabelY,
        height,
    };
}
