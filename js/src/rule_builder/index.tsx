import * as React from "react";
import { useModelState, createRender } from "@anywidget/react";
import App from "./App";
import { normalizeAttributes, buildAttributeMap } from "./data";
import {
    hydrateConditions,
    makeDefaultCondition,
    normalizeRangeCondition,
    numBounds,
    predKey,
} from "./engine";
import type { PredBound } from "./engine";
import type {
    RawAttribute,
    Attribute,
    NumAttribute,
    Condition,
    EvalResult,
    StoreResult,
    OptimizeResult,
    LoadedRule,
} from "./types";

const TOAST_MS = 2600;

function Widget() {
    const [title] = useModelState<string>("title");
    const [outcomeName] = useModelState<string>("outcome_name");
    const [poolLabel] = useModelState<string>("pool_label");
    const [rawAttributes] = useModelState<RawAttribute[]>("attributes");
    const [flash] = useModelState<string>("flash");
    const [, setEvalRequest] = useModelState<Record<string, unknown>>("eval_request");
    const [evalResult] = useModelState<EvalResult>("eval_result");
    const [, setStoreTrigger] = useModelState<number>("store_trigger");
    const [storeResult] = useModelState<StoreResult>("store_result");
    const [, setStoreNote] = useModelState<string>("store_note");
    const [, setOptimizeRequest] = useModelState<Record<string, unknown>>("optimize_request");
    const [optimizeResult] = useModelState<OptimizeResult>("optimize_result");
    const [loadedRule] = useModelState<LoadedRule>("loaded_rule");

    const attributes: Attribute[] = React.useMemo(
        () => normalizeAttributes(rawAttributes),
        [rawAttributes],
    );
    const attrMap = React.useMemo(() => buildAttributeMap(attributes), [attributes]);

    const [conds, setConds] = React.useState<Condition[]>([]);
    const [snap, setSnap] = React.useState<{ key: string; res: EvalResult } | null>(null);
    const [toast, setToast] = React.useState<string | null>(null);
    const [note, setNote] = React.useState("");
    const [pinnedAttrs, setPinnedAttrs] = React.useState<Set<string>>(new Set());
    // Individual predicate *bounds* that are pinned, keyed by `predKey(attr,
    // bound)`. A numeric range exposes two independent bounds (lo → GE, hi →
    // LE); a categorical condition a single `val` bound. Pinning any bound also
    // fixes its attribute, so these keys' attributes are a subset of pinnedAttrs.
    const [pinnedPreds, setPinnedPreds] = React.useState<Set<string>>(new Set());
    // Attributes the optimizer must never put in the rule. Unlike a pin, this
    // belongs to no condition: it is a search setting about an attribute that has
    // no card and, while forbidden, cannot get one (see `forbid` / `addAttr`).
    const [forbidden, setForbidden] = React.useState<Set<string>>(new Set());
    const [isOptimizing, setIsOptimizing] = React.useState(false);

    const pendingKeyRef = React.useRef<string>("");
    const evalCounterRef = React.useRef<number>(0);
    const lastEvalIdRef = React.useRef<number | null>(null);
    const lastStoreIdRef = React.useRef<number | null>(null);
    const toastTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const optimizeRequestIdRef = React.useRef<number>(0);
    const lastOptimizeIdRef = React.useRef<number | null>(null);
    const lastLoadIdRef = React.useRef<number | null>(null);

    const key = JSON.stringify(conds);
    const stale = snap !== null && snap.key !== key;
    const res = snap ? snap.res : null;

    const flashToast = React.useCallback((message: string) => {
        setToast(message);
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => setToast(null), TOAST_MS);
    }, []);

    /**
     * Put conditions that came from Python on the canvas and evaluate them
     * straight away, so the metrics on screen always belong to what is shown.
     * Shared by the optimizer and by a rule sent over for editing.
     */
    const applyConditions = React.useCallback(
        (raw: Condition[]) => {
            const newConds = hydrateConditions(raw, attrMap);
            setConds(newConds);
            setSnap(null);
            if (newConds.length === 0) return;
            const sendable = newConds.map((c) =>
                c.op === "range"
                    ? normalizeRangeCondition(attrMap[c.attr] as NumAttribute, c.lo, c.hi)
                    : c,
            );
            pendingKeyRef.current = JSON.stringify(newConds);
            evalCounterRef.current += 1;
            setEvalRequest({ conditions: sendable, request_id: evalCounterRef.current });
        },
        [attrMap, setEvalRequest],
    );

    React.useEffect(() => {
        if (!evalResult || evalResult.eval_id == null) return;
        if (evalResult.eval_id === lastEvalIdRef.current) return;
        lastEvalIdRef.current = evalResult.eval_id;
        setSnap({ key: pendingKeyRef.current, res: evalResult });
    }, [evalResult]);

    // A rule stored in a previous incarnation of this widget: the host re-creates
    // the builder on the unclaimed cases after a store, so the confirmation is
    // handed over through the `flash` trait.
    React.useEffect(() => {
        if (!flash) return;
        flashToast(flash);
    }, [flash, flashToast]);

    React.useEffect(() => {
        if (!storeResult || storeResult.store_id == null) return;
        if (storeResult.store_id === lastStoreIdRef.current) return;
        lastStoreIdRef.current = storeResult.store_id;
        const p = storeResult.precision != null ? Math.round(storeResult.precision * 100) : null;
        const r = storeResult.recall != null ? Math.round(storeResult.recall * 100) : null;
        const metrics = p != null && r != null ? `  P ${p}% · R ${r}%` : "";
        flashToast(`Stored ✓${metrics}`);
        // Reset the builder for the next rule once the current one is stored. The
        // pins and locks go with the predicates they belonged to: a pin that
        // outlives its condition is invisible in the canvas yet still steers the
        // optimizer. The forbidden list is scoped to one rule for the same reason
        // — it is invisible from the canvas, so carrying it over would constrain
        // the next rule without saying so.
        setConds([]);
        setSnap(null);
        setNote("");
        setPinnedAttrs(new Set());
        setPinnedPreds(new Set());
        setForbidden(new Set());
        setIsOptimizing(false);
    }, [storeResult, flashToast]);

    React.useEffect(
        () => () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        },
        [],
    );

    React.useEffect(() => {
        if (!optimizeResult || optimizeResult.request_id == null) return;
        if (optimizeResult.request_id !== optimizeRequestIdRef.current) return;
        if (optimizeResult.request_id === lastOptimizeIdRef.current) return;
        lastOptimizeIdRef.current = optimizeResult.request_id;
        setIsOptimizing(false);
        // A run that failed, or that found no rule under the constraints, must
        // leave the canvas alone: applying its empty condition list would throw
        // away the rule the user built. Forbidding makes both outcomes easy to
        // reach — forbid every discriminating attribute and there is no rule left
        // to find.
        if (optimizeResult.error) {
            flashToast(`Optimize failed — ${optimizeResult.error}`);
            return;
        }
        const optimized = optimizeResult.conditions ?? [];
        if (optimized.length === 0) {
            flashToast("Optimize found no rule under these constraints");
            return;
        }
        applyConditions(optimized);
    }, [optimizeResult, applyConditions, flashToast]);

    // A rule handed over from the suggested ruleset table to be edited here. It
    // replaces the canvas outright -- pins, note and forbidden list included,
    // since they belonged to the rule being discarded. Clearing the forbidden list
    // also keeps the loaded rule whole: a stale entry would silently swallow the
    // condition it names, because a forbidden attribute cannot hold a card.
    React.useEffect(() => {
        if (!loadedRule || loadedRule.load_id == null) return;
        if (loadedRule.load_id === lastLoadIdRef.current) return;
        lastLoadIdRef.current = loadedRule.load_id;
        setNote("");
        setPinnedAttrs(new Set());
        setPinnedPreds(new Set());
        setForbidden(new Set());
        setIsOptimizing(false);
        applyConditions(loadedRule.conditions ?? []);
        const name = loadedRule.label ? ` ${loadedRule.label}` : "";
        flashToast(`Loaded${name} — adjust and evaluate`);
    }, [loadedRule, applyConditions, flashToast]);

    // Drop every pinned bound (lo/hi/val) belonging to an attribute.
    const releasePreds = React.useCallback((id: string) => {
        setPinnedPreds((prev) => {
            const keys = [predKey(id, "lo"), predKey(id, "hi"), predKey(id, "val")];
            if (!keys.some((k) => prev.has(k))) return prev;
            const next = new Set(prev);
            for (const k of keys) next.delete(k);
            return next;
        });
    }, []);

    /**
     * Forbid an attribute: the optimizer will not use it, and it leaves the
     * canvas if it was on it. Dropping the card is what makes the constraint
     * safe -- `optimize_single_rule` rejects an attribute that is both forced and
     * forbidden, so an attribute that can hold no card can hold no pin either.
     */
    const forbid = React.useCallback(
        (id: string) => {
            setForbidden((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
            setConds((cs) => (cs.some((c) => c.attr === id) ? cs.filter((c) => c.attr !== id) : cs));
            setPinnedAttrs((prev) => {
                if (!prev.has(id)) return prev;
                const next = new Set(prev);
                next.delete(id);
                return next;
            });
            releasePreds(id);
        },
        [releasePreds],
    );

    const unforbid = React.useCallback((id: string) => {
        setForbidden((prev) => {
            if (!prev.has(id)) return prev;
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    }, []);

    const togglePin = React.useCallback(
        (id: string) => {
            setPinnedAttrs((prev) => {
                const next = new Set(prev);
                if (next.has(id)) {
                    next.delete(id);
                    // Unpinning the attribute also releases its pinned bounds.
                    releasePreds(id);
                } else {
                    next.add(id);
                }
                return next;
            });
        },
        [releasePreds],
    );

    const togglePredPin = React.useCallback((id: string, bound: PredBound) => {
        const key = predKey(id, bound);
        setPinnedPreds((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
        // Pinning a bound implies pinning its attribute.
        setPinnedAttrs((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
    }, []);

    const optimize = React.useCallback(() => {
        // Any one of the three constraints is enough to make the run meaningful;
        // with none of them it would just be rule induction over again.
        if ((pinnedAttrs.size === 0 && forbidden.size === 0) || isOptimizing) return;
        // Pinned predicates: keep the exact boundaries / value the user set. Each
        // numeric bound (lo → GE, hi → LE) can be pinned independently, so a
        // single condition may contribute one or both sides.
        const fixedPredicates: Condition[] = [];
        for (const c of conds) {
            const attr = attrMap[c.attr];
            if (!attr) continue;
            if (attr.kind === "num") {
                const num = attr as NumAttribute;
                const { lo, hi } = numBounds(num, c);
                const loPinned = lo !== null && pinnedPreds.has(predKey(c.attr, "lo"));
                const hiPinned = hi !== null && pinnedPreds.has(predKey(c.attr, "hi"));
                if (loPinned && hiPinned) {
                    fixedPredicates.push({ attr: c.attr, op: "range", lo: lo!, hi: hi! });
                } else if (loPinned) {
                    fixedPredicates.push({ attr: c.attr, op: ">=", value: lo! });
                } else if (hiPinned) {
                    fixedPredicates.push({ attr: c.attr, op: "<=", value: hi! });
                }
            } else if (c.op === "==" && pinnedPreds.has(predKey(c.attr, "val"))) {
                fixedPredicates.push(c);
            }
        }
        const predAttrIds = new Set(fixedPredicates.map((c) => c.attr));
        // Pinned attributes without a pinned predicate: keep the attribute, let
        // the optimizer choose its boundaries.
        const fixedAttributes = Array.from(pinnedAttrs).filter((id) => !predAttrIds.has(id));
        setIsOptimizing(true);
        optimizeRequestIdRef.current += 1;
        setOptimizeRequest({
            fixed_attributes: fixedAttributes,
            fixed_predicates: fixedPredicates,
            forbidden_attributes: Array.from(forbidden),
            request_id: optimizeRequestIdRef.current,
        });
    }, [pinnedAttrs, pinnedPreds, forbidden, conds, attrMap, isOptimizing, setOptimizeRequest]);

    const addAttr = React.useCallback(
        (id: string) => {
            const attr = attrMap[id];
            if (!attr) return;
            // The one guard both ways in reach: the rail click and the canvas drop
            // both land here.
            if (forbidden.has(id)) return;
            setConds((cs) => {
                if (cs.some((c) => c.attr === id)) return cs;
                return [...cs, makeDefaultCondition(attr)];
            });
        },
        [attrMap, forbidden],
    );

    const update = React.useCallback((index: number, patch: Partial<Condition>) => {
        setConds((cs) => cs.map((c, i) => (i === index ? ({ ...c, ...patch } as Condition) : c)));
    }, []);

    const remove = React.useCallback(
        (index: number) => {
            setConds((cs) => {
                const removed = cs[index];
                if (removed) {
                    setPinnedAttrs((prev) => {
                        if (!prev.has(removed.attr)) return prev;
                        const next = new Set(prev);
                        next.delete(removed.attr);
                        return next;
                    });
                    releasePreds(removed.attr);
                }
                return cs.filter((_, i) => i !== index);
            });
        },
        [releasePreds],
    );

    const clear = React.useCallback(() => {
        setConds([]);
        setSnap(null);
        setNote("");
        setPinnedAttrs(new Set());
        setPinnedPreds(new Set());
    }, []);

    const evaluate = React.useCallback(() => {
        if (conds.length === 0) return;
        const sendable = conds.map((c) =>
            c.op === "range"
                ? normalizeRangeCondition(attrMap[c.attr] as NumAttribute, c.lo, c.hi)
                : c,
        );
        pendingKeyRef.current = JSON.stringify(conds);
        evalCounterRef.current += 1;
        setEvalRequest({ conditions: sendable, request_id: evalCounterRef.current });
    }, [conds, attrMap, setEvalRequest]);

    const store = React.useCallback(() => {
        if (!res || stale) return;
        setStoreNote(note);
        setStoreTrigger((prev: number) => (prev ?? 0) + 1);
    }, [res, stale, note, setStoreNote, setStoreTrigger]);

    return (
        <App
            title={title || "Rule builder"}
            outcomeName={outcomeName || "outcome"}
            attributes={attributes}
            attrMap={attrMap}
            conds={conds}
            pinnedAttrs={pinnedAttrs}
            pinnedPreds={pinnedPreds}
            forbidden={forbidden}
            onAdd={addAttr}
            onUpdate={update}
            onRemove={remove}
            onClear={clear}
            onTogglePin={togglePin}
            onTogglePredPin={togglePredPin}
            onForbid={forbid}
            onUnforbid={unforbid}
            res={res}
            stale={stale}
            poolLabel={poolLabel || "cases"}
            toast={toast}
            note={note}
            onNoteChange={setNote}
            onEvaluate={evaluate}
            onStore={store}
            onOptimize={optimize}
            isOptimizing={isOptimizing}
        />
    );
}

export default {
    render: createRender(Widget),
};
