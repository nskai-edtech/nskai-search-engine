"use client";

import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/lib/store";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center gap-1 rounded-full border p-1 transition-colors"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        borderColor: "var(--border-strong)",
      }}
    >
      {/* sliding pill */}
      <span
        className="absolute top-1 h-7 w-7 rounded-full transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-elevated)",
          left: isDark ? "calc(100% - 2rem)" : "0.25rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
      />

      {/* Sun icon */}
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
        style={{ color: isDark ? "var(--text-tertiary)" : "var(--accent-primary)" }}
      >
        <Sun size={14} />
      </span>

      {/* Moon icon */}
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
        style={{ color: isDark ? "var(--accent-primary)" : "var(--text-tertiary)" }}
      >
        <Moon size={14} />
      </span>
    </button>
  );
}
