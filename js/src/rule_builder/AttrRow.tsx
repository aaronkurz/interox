import { TypeBadge, ImportanceBar } from "./atoms";
import type { Attribute } from "./types";

interface AttrRowProps {
    attr: Attribute;
    used: boolean;
    forbidden: boolean;
    onAdd: (id: string) => void;
    onUnforbid: (id: string) => void;
}

/** Tooltip for one rail row. The full name comes first: rail names are
 *  ellipsis-truncated and a `<span>` gets no built-in tooltip for that, so this
 *  is the only way to read a long attribute name without widening the rail. */
function rowTitle(attr: Attribute, used: boolean, forbidden: boolean): string {
    const lines = [attr.label];
    if (attr.family !== "other") {
        const sources = attr.sources.length ? ` · ${attr.sources.join(", ")}` : "";
        lines.push(`${attr.familyLabel}${sources}`);
    }
    if (forbidden) {
        lines.push("Forbidden — the optimizer will not use it, and it cannot be added by hand");
        lines.push("⃠ to allow it again");
    } else {
        lines.push(used ? "Already in the rule" : "Click or drag to add to the rule");
    }
    return lines.join("\n");
}

export default function AttrRow({ attr, used, forbidden, onAdd, onUnforbid }: AttrRowProps) {
    // Forbidden is the stronger state: the row stays in the list so the ban is
    // visible where the user is scanning, but it neither drags nor adds.
    const inert = used || forbidden;
    return (
        <div
            className={`rb-attr${used ? " rb-used" : ""}${forbidden ? " rb-forbidden" : ""}`}
            draggable={!inert}
            onDragStart={
                inert
                    ? undefined
                    : (e) => {
                          e.dataTransfer.setData("text/plain", attr.id);
                          e.dataTransfer.effectAllowed = "copy";
                      }
            }
            onClick={inert ? undefined : () => onAdd(attr.id)}
            title={rowTitle(attr, used, forbidden)}
        >
            <TypeBadge kind={attr.kind} />
            <span className="rb-attr-name">{attr.label}</span>
            {forbidden ? (
                <button
                    type="button"
                    className="rb-attr-unforbid"
                    title="Allow the optimizer to use this attribute again"
                    aria-label={`Stop forbidding ${attr.label}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onUnforbid(attr.id);
                    }}
                >
                    ⃠
                </button>
            ) : used ? (
                <span className="rb-attr-check">✓</span>
            ) : (
                <ImportanceBar value={attr.importance} />
            )}
        </div>
    );
}
