"use client";

import Link from "next/link";
import { PanelRight, PanelLeft } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useSidebarStore } from "@/lib/store";

interface NavbarProps {
  slot?: React.ReactNode;
  showSidebarToggle?: boolean;
  hideThemeToggle?: boolean;
}

export default function Navbar({
  slot,
  showSidebarToggle,
  hideThemeToggle,
}: NavbarProps) {
  const { toggle } = useSidebarStore();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--text)" }}
        >
          Rudani
        </Link>
      </div>

      {slot && (
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm sm:max-w-lg px-4">
          {slot}
        </div>
      )}

      {showSidebarToggle && (
        <button
          onClick={toggle}
          className="transition-colors hover:text-[var(--accent-primary)]"
          style={{ color: "var(--text-tertiary)" }}
          aria-controls="app-sidebar"
          type="button"
        >
          {showSidebarToggle ? (
            <PanelRight size={18} />
          ) : (
            <PanelLeft size={18} />
          )}
        </button>
      )}

      {!hideThemeToggle && <ThemeToggle />}
    </nav>
  );
}
