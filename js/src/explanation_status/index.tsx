import { useModelState, createRender } from "@anywidget/react";
import App from "./App";

function Widget() {
    const [casesTbe] = useModelState<number>("cases_tbe");
    const [expTp] = useModelState<number>("exp_tp");
    const [expFp] = useModelState<number>("exp_fp");
    const [expTn] = useModelState<number>("exp_tn");
    const [storedRules] = useModelState<number>("stored_rules");

    return (
        <App
            casesTbe={casesTbe ?? 0}
            expTp={expTp ?? 0}
            expFp={expFp ?? 0}
            expTn={expTn ?? 0}
            storedRules={storedRules ?? 0}
        />
    );
}

export default {
    render: createRender(Widget),
};
