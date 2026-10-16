import type { CatAttribute } from "./types";

interface CatBarsProps {
    attr: CatAttribute;
    value: string;
    onChange: (value: string) => void;
}

export default function CatBars({ attr, value, onChange }: CatBarsProps) {
    return (
        <div className="rb-cats">
            {attr.categories.map((c) => {
                const sel = value === c.value;
                const posW = attr.maxN > 0 ? (c.pos / attr.maxN) * 100 : 0;
                const restW = attr.maxN > 0 ? ((c.n - c.pos) / attr.maxN) * 100 : 0;
                return (
                    <button
                        key={c.value}
                        type="button"
                        className={`rb-cat-row${sel ? " rb-sel" : ""}`}
                        onClick={() => onChange(c.value)}
                        title={`${c.value}: ${c.n} cases, ${c.pos} outcome-positive`}
                    >
                        <span className="rb-cat-label">{c.value}</span>
                        <span className="rb-cat-bar">
                            <span className="rb-cat-pos" style={{ width: `${posW}%` }} />
                            <span className="rb-cat-rest" style={{ width: `${restW}%` }} />
                        </span>
                        <span className="rb-cat-n">{c.n}</span>
                    </button>
                );
            })}
        </div>
    );
}
