import styles from "./styles.css";
import RuleDetailTable from "./RuleDetailTable";
import type { RuleData, ExperimentResult } from "./types";

function EmptyState() {
    return (
        <table className="rd-table">
            <tbody>
                <tr>
                    <td className="rd-empty">This rule has no feature predicates to analyze.</td>
                </tr>
            </tbody>
        </table>
    );
}

interface AppProps {
    rule: RuleData;
    experimentResult: ExperimentResult | null;
    setExperimentRequest: (value: Record<string, unknown>) => void;
    onStore: (note: string) => void;
}

export default function App({ rule, experimentResult, setExperimentRequest, onStore }: AppProps) {
    const hasFeatures = rule.features.length > 0;

    return (
        <>
            <style>{styles}</style>
            <div className="rd-root">
                <div className="rd-header">
                    <div className="rd-title">{rule.title}</div>
                    {rule.ruleName ? <div className="rd-rule-name">{rule.ruleName}</div> : null}
                </div>
                {hasFeatures
                    ? (
                        <RuleDetailTable
                            rule={rule}
                            experimentResult={experimentResult}
                            setExperimentRequest={setExperimentRequest}
                            onStore={onStore}
                        />
                    )
                    : <EmptyState />
                }
            </div>
        </>
    );
}
