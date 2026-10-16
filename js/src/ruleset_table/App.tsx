import styles from "./styles.css";
import RulesetTable from "./RulesetTable";
import type { ActionKind, RawRule, TableMode, Toast } from "./types";

interface AppProps {
    rules: RawRule[];
    features: string[];
    featureSummaries: Record<string, unknown>;
    mode: TableMode;
    onAction: (kind: ActionKind, ioxRuleId: number, note: string) => void;
    toast: Toast | null;
    onDismissToast: () => void;
}

export default function App({
    rules,
    features,
    featureSummaries,
    mode,
    onAction,
    toast,
    onDismissToast,
}: AppProps) {
    return (
        <>
            <style>{styles}</style>
            <RulesetTable
                rules={rules}
                features={features}
                featureSummaries={featureSummaries}
                mode={mode}
                onAction={onAction}
                toast={toast}
                onDismissToast={onDismissToast}
            />
        </>
    );
}
