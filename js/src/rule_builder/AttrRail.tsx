import { useMemo, useState } from "react";
import { SegControl, InfoTip, IMPORTANCE_HELP } from "./atoms";
import AttrRow from "./AttrRow";
import {
    EMPTY_FILTERS,
    activeFilterCount,
    facetOptions,
    filterAttributes,
    groupAttributes,
} from "./railGroups";
import type { FacetOption, GroupMode, KindFilter, RailFilters } from "./railGroups";
import type { Attribute } from "./types";

interface AttrRailProps {
    attributes: Attribute[];
    usedIds: string[];
    forbidden: Set<string>;
    onAdd: (id: string) => void;
    onUnforbid: (id: string) => void;
    width: number;
}

const GROUP_OPTIONS: { v: GroupMode; label: string }[] = [
    { v: "none", label: "none" },
    { v: "family", label: "family" },
    { v: "source", label: "source" },
];

const KIND_OPTIONS: { v: KindFilter; label: string }[] = [
    { v: "all", label: "all" },
    { v: "num", label: "123" },
    { v: "cat", label: "abc" },
];

function toggled(set: Set<string>, key: string): Set<string> {
    const next = new Set(set);
    if (!next.delete(key)) next.add(key);
    return next;
}

interface ChipListProps {
    label: string;
    options: FacetOption[];
    selected: Set<string>;
    onToggle: (key: string) => void;
}

function ChipList({ label, options, selected, onToggle }: ChipListProps) {
    return (
        <div className="rb-rail-facet">
            <span className="rb-rail-label">{label}</span>
            <div className="rb-chip-list">
                {options.map((option) => (
                    <button
                        key={option.key}
                        type="button"
                        className={`rb-chip${selected.has(option.key) ? " rb-on" : ""}`}
                        aria-pressed={selected.has(option.key)}
                        title={`${option.label} — ${option.count} attribute${option.count === 1 ? "" : "s"}`}
                        onClick={() => onToggle(option.key)}
                    >
                        <span className="rb-chip-label">{option.label}</span>
                        <span className="rb-chip-n">{option.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function AttrRail({
    attributes,
    usedIds,
    forbidden,
    onAdd,
    onUnforbid,
    width,
}: AttrRailProps) {
    const [filters, setFilters] = useState<RailFilters>(EMPTY_FILTERS);
    const [groupMode, setGroupMode] = useState<GroupMode>("none");
    const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
    const [filtersOpen, setFiltersOpen] = useState(false);

    const patch = (change: Partial<RailFilters>) =>
        setFilters((prev) => ({ ...prev, ...change }));

    const sorted = useMemo(
        () => [...attributes].sort((a, b) => b.importance - a.importance),
        [attributes],
    );
    const shown = useMemo(
        () => filterAttributes(sorted, filters, usedIds),
        [sorted, filters, usedIds],
    );
    const groups = useMemo(() => groupAttributes(shown, groupMode), [shown, groupMode]);
    const familyFacets = useMemo(() => facetOptions(sorted, "family"), [sorted]);
    const sourceFacets = useMemo(() => facetOptions(sorted, "source"), [sorted]);

    // Nothing to group by on a case log that was never enriched: hide the
    // control rather than offer one that yields a single "Other" group.
    const canGroup = sourceFacets.length > 0 || familyFacets.length > 1;
    const activeFilters = activeFilterCount(filters);
    const searching = filters.query.trim() !== "";

    const resetFilters = () => setFilters(EMPTY_FILTERS);

    return (
        <div className="rb-rail" style={{ width }}>
            <div className="rb-rail-head">
                <span>Attributes</span>
                <small>
                    by importance <InfoTip align="right">{IMPORTANCE_HELP}</InfoTip>
                </small>
            </div>

            <div className="rb-rail-toolbar">
                <div className="rb-rail-search-wrap">
                    <input
                        type="search"
                        className="rb-rail-search"
                        placeholder="Search attributes…"
                        aria-label="Search attributes"
                        value={filters.query}
                        onChange={(e) => patch({ query: e.target.value })}
                    />
                    {searching ? (
                        <button
                            type="button"
                            className="rb-rail-search-clear"
                            title="Clear search"
                            aria-label="Clear search"
                            onClick={() => patch({ query: "" })}
                        >
                            ×
                        </button>
                    ) : null}
                </div>

                {canGroup ? (
                    <div className="rb-rail-row">
                        <span className="rb-rail-label">Group</span>
                        <SegControl
                            options={GROUP_OPTIONS}
                            value={groupMode}
                            onChange={setGroupMode}
                        />
                    </div>
                ) : null}

                <div className="rb-rail-row">
                    <button
                        type="button"
                        className={`rb-rail-filter-btn${filtersOpen ? " rb-on" : ""}`}
                        aria-expanded={filtersOpen}
                        onClick={() => setFiltersOpen((open) => !open)}
                    >
                        <span className="rb-group-caret">{filtersOpen ? "▾" : "▸"}</span>
                        Filters
                        {activeFilters > 0 ? (
                            <span className="rb-rail-filter-badge">{activeFilters}</span>
                        ) : null}
                    </button>
                    <span className="rb-rail-count">
                        {shown.length} of {attributes.length}
                    </span>
                </div>

                {filtersOpen ? (
                    <div className="rb-rail-panel">
                        <div className="rb-rail-row">
                            <span className="rb-rail-label">Type</span>
                            <SegControl
                                options={KIND_OPTIONS}
                                value={filters.kind}
                                onChange={(kind) => patch({ kind })}
                            />
                        </div>
                        <div className="rb-rail-row">
                            <span className="rb-rail-label">Min. imp.</span>
                            <input
                                type="range"
                                className="rb-rail-slider"
                                min={0}
                                max={1}
                                step={0.05}
                                value={filters.minImportance}
                                aria-label="Minimum importance"
                                onChange={(e) =>
                                    patch({ minImportance: Number(e.target.value) })
                                }
                            />
                            <span className="rb-rail-value">
                                {filters.minImportance.toFixed(2)}
                            </span>
                        </div>
                        <label className="rb-rail-check">
                            <input
                                type="checkbox"
                                checked={filters.hideUsed}
                                onChange={(e) => patch({ hideUsed: e.target.checked })}
                            />
                            Hide attributes already in the rule
                        </label>
                        {familyFacets.length > 1 ? (
                            <ChipList
                                label="Family"
                                options={familyFacets}
                                selected={filters.families}
                                onToggle={(key) =>
                                    patch({ families: toggled(filters.families, key) })
                                }
                            />
                        ) : null}
                        {sourceFacets.length > 0 ? (
                            <ChipList
                                label="Source"
                                options={sourceFacets}
                                selected={filters.sources}
                                onToggle={(key) =>
                                    patch({ sources: toggled(filters.sources, key) })
                                }
                            />
                        ) : null}
                        {activeFilters > 0 || searching ? (
                            <button
                                type="button"
                                className="rb-rail-reset"
                                onClick={resetFilters}
                            >
                                Reset filters
                            </button>
                        ) : null}
                    </div>
                ) : null}
            </div>

            <div className="rb-rail-list">
                {shown.length === 0 ? (
                    <div className="rb-rail-empty">
                        {attributes.length === 0 ? (
                            "No attributes available."
                        ) : (
                            <>
                                No attribute matches these filters.
                                <button
                                    type="button"
                                    className="rb-rail-reset"
                                    onClick={resetFilters}
                                >
                                    Reset filters
                                </button>
                            </>
                        )}
                    </div>
                ) : groupMode === "none" ? (
                    shown.map((attr) => (
                        <AttrRow
                            key={attr.id}
                            attr={attr}
                            used={usedIds.includes(attr.id)}
                            forbidden={forbidden.has(attr.id)}
                            onAdd={onAdd}
                            onUnforbid={onUnforbid}
                        />
                    ))
                ) : (
                    groups.map((group) => {
                        const collapseKey = `${groupMode}|${group.key}`;
                        // A search must never leave its matches hidden behind a
                        // header the user collapsed earlier.
                        const isCollapsed = !searching && collapsed.has(collapseKey);
                        return (
                            <div className="rb-group" key={collapseKey}>
                                <button
                                    type="button"
                                    className="rb-group-head"
                                    aria-expanded={!isCollapsed}
                                    onClick={() =>
                                        setCollapsed((prev) => toggled(prev, collapseKey))
                                    }
                                >
                                    <span className="rb-group-caret">
                                        {isCollapsed ? "▸" : "▾"}
                                    </span>
                                    <span className="rb-group-label" title={group.label}>
                                        {group.label}
                                    </span>
                                    <span className="rb-group-count">{group.attrs.length}</span>
                                </button>
                                {isCollapsed
                                    ? null
                                    : group.attrs.map((attr) => (
                                          <AttrRow
                                              key={`${group.key}|${attr.id}`}
                                              attr={attr}
                                              used={usedIds.includes(attr.id)}
                                              forbidden={forbidden.has(attr.id)}
                                              onAdd={onAdd}
                                              onUnforbid={onUnforbid}
                                          />
                                      ))}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
