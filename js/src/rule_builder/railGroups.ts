import type { Attribute } from "./types";

export type GroupMode = "none" | "family" | "source";
export type KindFilter = "all" | "num" | "cat";

export interface RailFilters {
    /** Case-insensitive substring matched against the attribute label. */
    query: string;
    kind: KindFilter;
    minImportance: number;
    hideUsed: boolean;
    /** Empty set means "no restriction"; otherwise membership is OR-ed. */
    families: Set<string>;
    sources: Set<string>;
}

export interface AttrGroup {
    key: string;
    label: string;
    attrs: Attribute[];
}

export interface FacetOption {
    key: string;
    label: string;
    count: number;
}

/** Attributes whose enrichment source is unknown, kept in one group at the end. */
const NO_SOURCE_KEY = "";
const NO_SOURCE_LABEL = "No source";

export const EMPTY_FILTERS: RailFilters = {
    query: "",
    kind: "all",
    minImportance: 0,
    hideUsed: false,
    families: new Set<string>(),
    sources: new Set<string>(),
};

/** How many of the *panel* filters are narrowing the list. The search box is
 *  always visible and speaks for itself, so it is deliberately not counted. */
export function activeFilterCount(filters: RailFilters): number {
    return (
        (filters.kind !== "all" ? 1 : 0) +
        (filters.minImportance > 0 ? 1 : 0) +
        (filters.hideUsed ? 1 : 0) +
        (filters.families.size > 0 ? 1 : 0) +
        (filters.sources.size > 0 ? 1 : 0)
    );
}

/** Every filter dimension is AND-ed; selections within one dimension are OR-ed. */
export function filterAttributes(
    attributes: Attribute[],
    filters: RailFilters,
    usedIds: string[],
): Attribute[] {
    const needle = filters.query.trim().toLowerCase();
    const used = new Set(usedIds);
    return attributes.filter((attr) => {
        if (needle && !attr.label.toLowerCase().includes(needle)) return false;
        if (filters.kind !== "all" && attr.kind !== filters.kind) return false;
        if (attr.importance < filters.minImportance) return false;
        if (filters.hideUsed && used.has(attr.id)) return false;
        if (filters.families.size > 0 && !filters.families.has(attr.family)) return false;
        if (
            filters.sources.size > 0 &&
            !attr.sources.some((source) => filters.sources.has(source))
        ) {
            return false;
        }
        return true;
    });
}

/** Group an already importance-sorted list, keeping that order within each
 *  group (insertion order) and ordering the groups by their best member.
 *
 *  In `"source"` mode an attribute appears once per source, so a delay between
 *  two activities shows up under both of them -- that is what makes "everything
 *  derived from this activity" complete. */
export function groupAttributes(attributes: Attribute[], mode: GroupMode): AttrGroup[] {
    if (mode === "none") {
        return attributes.length ? [{ key: "", label: "", attrs: attributes }] : [];
    }

    const groups = new Map<string, AttrGroup>();
    const push = (key: string, label: string, attr: Attribute) => {
        const group = groups.get(key);
        if (group) group.attrs.push(attr);
        else groups.set(key, { key, label, attrs: [attr] });
    };

    for (const attr of attributes) {
        if (mode === "family") {
            push(attr.family, attr.familyLabel, attr);
        } else if (attr.sources.length === 0) {
            push(NO_SOURCE_KEY, NO_SOURCE_LABEL, attr);
        } else {
            for (const source of attr.sources) push(source, source, attr);
        }
    }

    // Best-first, so the most promising attribute stays near the top in every
    // mode. The sourceless catch-all is always last regardless of importance.
    return [...groups.values()].sort((a, b) => {
        if (a.key === NO_SOURCE_KEY) return 1;
        if (b.key === NO_SOURCE_KEY) return -1;
        const diff = maxImportance(b.attrs) - maxImportance(a.attrs);
        return diff !== 0 ? diff : a.label.localeCompare(b.label);
    });
}

function maxImportance(attrs: Attribute[]): number {
    return attrs.reduce((max, attr) => Math.max(max, attr.importance), 0);
}

/** The selectable values of one grouping axis, most populated first. Sources
 *  that no attribute declares -- and the sourceless catch-all -- are omitted:
 *  a facet nobody can match is not worth a chip. */
export function facetOptions(
    attributes: Attribute[],
    mode: "family" | "source",
): FacetOption[] {
    const counts = new Map<string, FacetOption>();
    const bump = (key: string, label: string) => {
        const option = counts.get(key);
        if (option) option.count += 1;
        else counts.set(key, { key, label, count: 1 });
    };

    for (const attr of attributes) {
        if (mode === "family") bump(attr.family, attr.familyLabel);
        else for (const source of attr.sources) bump(source, source);
    }

    return [...counts.values()].sort(
        (a, b) => b.count - a.count || a.label.localeCompare(b.label),
    );
}
