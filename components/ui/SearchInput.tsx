"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";

const SUGGESTIONS = [
  "What is retrieval-augmented generation?",
  "How does Claude work?",
  "Latest AI research 2025",
];

interface Props {
  initialQuery?: string;
  onSearch: (query: string) => void;
  loading?: boolean;
  compact?: boolean;
}

export default function SearchInput({
  initialQuery = "",
  onSearch,
  loading,
  compact,
}: Props) {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const submit = (q: string) => {
    if (!q.trim()) return;
    setQuery("");
    onSearch(q.trim());
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
        className={`flex w-full items-center gap-2 rounded-2xl border transition-colors focus-within:border-[var(--accent-primary)] ${
          compact ? "px-3 py-2" : "px-4 py-3"
        }`}
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-strong)",
        }}
      >
        <Search
          size={15}
          style={{ color: "var(--text-tertiary)" }}
          className="shrink-0"
        />
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-tertiary)]"
          style={{ color: "var(--text)" }}
        />
        <button
          type="submit"
          disabled={!query.trim() || loading}
          className="rounded-xl p-1.5 transition-opacity disabled:opacity-30"
          style={{ backgroundColor: "var(--accent-primary)", color: "white" }}
        >
          <ArrowRight size={14} />
        </button>
      </form>

      {!compact && (
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setQuery(s);
                submit(s);
              }}
              className="rounded-full border px-3 py-1 text-xs transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
