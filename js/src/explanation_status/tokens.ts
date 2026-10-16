export const COLORS: Record<string, string> = {
    toBeExplained: "#1f77b4",
    explainedCorrectly: "#2ea043",
    falsePositives: "#da3633",
    leftAlone: "#adb5bd",
    precision: "#0366d6",
    recall: "#f66a0a",
    storedRules: "#57606a",
    outline: "#24292f",
    poolOutline: "#8c959f",
    caption: "#57606a",
    stubBase: "#eaeef2",
    stubStripe: "#c9d1d9",
};

/** Fill opacity of a band: resting, when picked, and when something else is. */
export const BAND_OPACITY = {
    exp: 0.42,
    open: 0.36,
    fp: 0.46,
    tn: 0.5,
    selectedBoost: 0.34,
    unselected: 0.1,
};

/** Opacity of a tile that the current selection does not feed into. */
export const DIMMED = 0.24;
