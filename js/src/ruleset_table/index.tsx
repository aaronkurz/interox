import * as React from "react";
import { useModelState, createRender } from "@anywidget/react";
import App from "./App";
import type { ActionKind, ActionRequest, ActionResult, RawRule, TableMode, Toast } from "./types";

// A confirmation is read at a glance; a warning says something did not happen
// and deserves long enough to be read properly.
const TOAST_MS = 2600;
const WARN_TOAST_MS = 6000;

function Widget() {
    const [rules] = useModelState<RawRule[]>("rules");
    const [features] = useModelState<string[]>("features");
    const [featureSummaries] = useModelState<Record<string, unknown>>("feature_summaries");
    const [mode] = useModelState<TableMode>("mode");
    const [, setActionRequest] = useModelState<ActionRequest>("action_request");
    const [actionResult] = useModelState<ActionResult>("action_result");

    const [toast, setToast] = React.useState<Toast | null>(null);
    const lastResultIdRef = React.useRef<number | null>(null);
    const toastTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const onAction = React.useCallback(
        (kind: ActionKind, ioxRuleId: number, note: string) => {
            setActionRequest({
                kind,
                iox_rule_id: ioxRuleId,
                note,
                action_id: Date.now(),
            });
        },
        [setActionRequest],
    );

    React.useEffect(() => {
        if (!actionResult || actionResult.result_id == null) return;
        if (actionResult.result_id === lastResultIdRef.current) return;
        lastResultIdRef.current = actionResult.result_id;
        const level = actionResult.level === "warn" ? "warn" : "ok";
        setToast({ message: actionResult.message ?? "", level });
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(
            () => setToast(null),
            level === "warn" ? WARN_TOAST_MS : TOAST_MS,
        );
    }, [actionResult]);

    React.useEffect(
        () => () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        },
        [],
    );

    return (
        <App
            rules={rules || []}
            features={features || []}
            featureSummaries={featureSummaries || {}}
            mode={mode === "suggested" ? "suggested" : "stored"}
            onAction={onAction}
            toast={toast}
            onDismissToast={() => setToast(null)}
        />
    );
}

export default {
    render: createRender(Widget),
};
