"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

const SUGGESTIONS = ["What is RAG?", "How does GPT-4 work?", "Latest AI research"];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <form
        className="flex w-full items-center gap-2 rounded-2xl border px-4 py-3 transition-colors focus-within:border-[var(--accent-primary)]"
        style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-strong)" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Search size={18} style={{ color: "var(--text-tertiary)" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-tertiary)]"
          style={{ color: "var(--text)" }}
        />
        <button
          type="submit"
          disabled={!query.trim()}
          className="rounded-xl p-1.5 transition-colors disabled:opacity-30"
          style={{ backgroundColor: "var(--accent-primary)", color: "white" }}
        >
          <ArrowRight size={16} />
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setQuery(s)}
            className="rounded-full border px-3 py-1 text-xs transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
