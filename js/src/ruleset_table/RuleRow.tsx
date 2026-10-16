import { useEffect, useState } from "react";
import { roundPredicate } from "./data";
import { TOKENS } from "./tokens";
import MetricCell from "./MetricCell";
import SplitGlyphCell from "./SplitGlyphCell";
import type { ActionKind, NormalizedRule, TableMode } from "./types";

interface RuleRowProps {
    rule: NormalizedRule;
    features: string[];
    aligned: boolean;
    featureColors: Record<string, string>;
    mode: TableMode;
    colSpan: number;
    isActionOpen: boolean;
    isNoteOpen: boolean;
    onToggleAction: () => void;
    onToggleNote: () => void;
    onCancel: () => void;
    onAction: (kind: ActionKind, ioxRuleId: number, note: string) => void;
}

function PlusIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.4" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

function PencilIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h4L20 8a2.8 2.8 0 0 0-4-4L4 16z" />
        </svg>
    );
}

function TrashIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
        </svg>
    );
}

function NoteIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
}

export default function RuleRow({
    rule,
    features,
    aligned,
    featureColors,
    mode,
    colSpan,
    isActionOpen,
    isNoteOpen,
    onToggleAction,
    onToggleNote,
    onCancel,
    onAction,
}: RuleRowProps) {
    const isStored = mode === "stored";

    const [draft, setDraft] = useState("");
    const [noteEditing, setNoteEditing] = useState(false);
    const [noteDraft, setNoteDraft] = useState(rule.annotation);

    // Reset the action draft whenever the action panel is (re)opened.
    useEffect(() => {
        if (isActionOpen) setDraft("");
    }, [isActionOpen]);

    // Reset the note editor whenever the note panel is (re)opened or the
    // stored annotation changes.
    useEffect(() => {
        if (isNoteOpen) {
            setNoteEditing(false);
            setNoteDraft(rule.annotation);
        }
    }, [isNoteOpen, rule.annotation]);

    const featureCells = features.map((feature) => {
        const rawValue = rule.features[feature];
        if (rawValue === null || rawValue === undefined || rawValue === "") {
            return <td key={feature} className="rs-empty-cell" />;
        }
        const displayValue = roundPredicate(rawValue);
        return (
            <td key={feature}>
                <div className="rs-code" title={displayValue}>{displayValue}</div>
            </td>
        );
    });

    const predicateTags = features
        .filter((feature) => {
            const rawValue = rule.features[feature];
            return rawValue !== null && rawValue !== undefined && rawValue !== "";
        })
        .map((feature, idx, arr) => {
            const displayValue = roundPredicate(rule.features[feature]);
            return (
                <span key={feature}>
                    <span
                        className="rs-predicate-tag"
                        style={{ backgroundColor: featureColors[feature] }}
                    >
                        {feature} {displayValue}
                    </span>
                    {idx < arr.length - 1 && <span className="rs-predicate-sep"> & </span>}
                </span>
            );
        });

    const actionCell = (
        <td className="rs-action-cell-td">
            <div className="rs-action-cell">
                {isStored ? (
                    <>
                        <button
                            type="button"
                            title="Remove this rule" aria-label="Remove this rule"
                            className={`rs-action-btn rs-action-remove${isActionOpen ? " rs-action-active" : ""}`}
                            onClick={onToggleAction}
                        >
                            <TrashIcon />
                        </button>
                        <button
                            type="button"
                            title="View note" aria-label="View note"
                            className={`rs-action-btn rs-action-note${isNoteOpen ? " rs-action-active" : ""}`}
                            onClick={onToggleNote}
                        >
                            <NoteIcon />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            title="Store this rule" aria-label="Store this rule"
                            className={`rs-action-btn rs-action-store${isActionOpen ? " rs-action-active" : ""}`}
                            onClick={onToggleAction}
                        >
                            <PlusIcon />
                        </button>
                        {/* Editing carries no rationale, so unlike storing it acts
                            straight away rather than opening the note panel. */}
                        <button
                            type="button"
                            title="Edit this rule in the rule builder"
                            aria-label="Edit this rule in the rule builder"
                            className="rs-action-btn rs-action-edit"
                            onClick={() => onAction("edit", rule.ioxRuleId, "")}
                        >
                            <PencilIcon />
                        </button>
                    </>
                )}
            </div>
        </td>
    );

    const actionPanel = isActionOpen && (
        <tr>
            <td className="rs-panel-cell" colSpan={colSpan}>
                <div className="rs-panel">
                    <div className="rs-panel-title">
                        {isStored
                            ? "Add a note about removing this rule"
                            : "Add a note about storing this rule"}
                    </div>
                    <div className="rs-panel-hint">
                        Optional, but a short rationale helps your team understand this decision later.
                    </div>
                    <textarea
                        className="rs-panel-textarea"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        placeholder={isStored
                            ? "e.g. redundant with Rule 0, threshold too aggressive…"
                            : "e.g. clinically validated, high precision, low false-positive rate…"}
                    />
                    <div className="rs-panel-actions">
                        <button
                            type="button"
                            className={`rs-btn-confirm${isStored ? " rs-btn-danger" : " rs-btn-success"}`}
                            onClick={() =>
                                onAction(isStored ? "remove" : "store", rule.ioxRuleId, draft.trim())}
                        >
                            {isStored ? "Remove rule" : "Store rule"}
                        </button>
                        <button type="button" className="rs-btn-cancel" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    );

    const hasAnnotation = rule.annotation.trim() !== "";

    const notePanel = isStored && isNoteOpen && (
        <tr>
            <td className="rs-panel-cell" colSpan={colSpan}>
                <div className="rs-panel">
                    <div className="rs-note-header">
                        <span className="rs-note-label">Note added when stored</span>
                        <div className="rs-note-header-spacer" />
                        {!noteEditing && (
                            <button
                                type="button"
                                className="rs-note-link"
                                onClick={() => {
                                    setNoteDraft(rule.annotation);
                                    setNoteEditing(true);
                                }}
                            >
                                Edit
                            </button>
                        )}
                        <button type="button" className="rs-note-link rs-note-hide" onClick={onCancel}>
                            Hide
                        </button>
                    </div>
                    {noteEditing ? (
                        <>
                            <textarea
                                className="rs-panel-textarea"
                                value={noteDraft}
                                onChange={(e) => setNoteDraft(e.target.value)}
                                placeholder="Describe why this rule is stored…"
                            />
                            <div className="rs-panel-actions">
                                <button
                                    type="button"
                                    className="rs-btn-confirm rs-btn-primary"
                                    onClick={() =>
                                        onAction("annotate", rule.ioxRuleId, noteDraft.trim())}
                                >
                                    Save note
                                </button>
                                <button
                                    type="button"
                                    className="rs-btn-cancel"
                                    onClick={() => setNoteEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : hasAnnotation ? (
                        <div className="rs-note-text">{rule.annotation}</div>
                    ) : (
                        <div className="rs-note-empty">
                            No note was added when this rule was stored. Use Edit to add one.
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <>
            <tr>
                {actionCell}
                <td className="rs-rule-name">{rule.ruleName.replace(/-/g, '-\u200B')}</td>
                <MetricCell value={rule.precision} color={TOKENS.precision} />
                <MetricCell value={rule.recall} color={TOKENS.recall} />
                <SplitGlyphCell rule={rule} />
                {aligned ? featureCells : (
                    <td className="rs-predicates-cell">
                        {predicateTags.length > 0 ? predicateTags : <span className="rs-empty-cell">&mdash;</span>}
                    </td>
                )}
            </tr>
            {actionPanel}
            {notePanel}
        </>
    );
}
