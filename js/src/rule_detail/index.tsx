import * as React from "react";
import { useModelState, createRender } from "@anywidget/react";
import App from "./App";
import { getData } from "./data";
import type { RawRuleData, ExperimentResult } from "./types";

function Widget() {
    const [title] = useModelState<string>("title");
    const [ruleData] = useModelState<RawRuleData>("rule_data");
    const [, setExperimentRequest] = useModelState("experiment_request");
    const [experimentResult] = useModelState<ExperimentResult>("experiment_result");
    const [, setStoreTrigger] = useModelState<number>("store_experiment_trigger");
    const [, setStoreNote] = useModelState<string>("store_note");

    const rule = React.useMemo(
        () => getData(title, ruleData || ({} as RawRuleData)),
        [title, ruleData],
    );

    const handleStore = React.useCallback((note: string) => {
        setStoreNote(note);
        setStoreTrigger((prev: number) => (prev ?? 0) + 1);
    }, [setStoreNote, setStoreTrigger]);

    return (
        <App
            rule={rule}
            experimentResult={experimentResult}
            setExperimentRequest={setExperimentRequest}
            onStore={handleStore}
        />
    );
}

export default {
    render: createRender(Widget),
};
