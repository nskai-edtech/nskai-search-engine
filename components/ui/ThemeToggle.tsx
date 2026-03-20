"use client";

import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/lib/store";
import { useRef } from "react";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();
  const ref = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const btn = ref.current;
    if (!btn || !document.startViewTransition) {
      toggleTheme();
      return;
    }

    const { top, left, width, height } = btn.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-r", `${maxRadius}px`);

    document.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <button
      ref={ref}
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative flex items-center gap-1 rounded-full border p-1 transition-colors"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        borderColor: "var(--border-strong)",
      }}
    >
      <span
        className="absolute top-1 h-7 w-7 rounded-full transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-elevated)",
          left: isDark ? "calc(100% - 2rem)" : "0.25rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
      />
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
        style={{
          color: isDark ? "var(--text-tertiary)" : "var(--accent-primary)",
        }}
      >
        <Sun size={14} />
      </span>
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
        style={{
          color: isDark ? "var(--accent-primary)" : "var(--text-tertiary)",
        }}
      >
        <Moon size={14} />
      </span>
    </button>
  );
}
