import styles from "./styles.css";
import ExplanationStatus from "./ExplanationStatus";

interface AppProps {
    casesTbe: unknown;
    expTp: unknown;
    expFp: unknown;
    expTn: unknown;
    storedRules: unknown;
}

export default function App({ casesTbe, expTp, expFp, expTn, storedRules }: AppProps) {
    return (
        <>
            <style>{styles}</style>
            <ExplanationStatus
                casesTbe={casesTbe}
                expTp={expTp}
                expFp={expFp}
                expTn={expTn}
                storedRules={storedRules}
            />
        </>
    );
}
