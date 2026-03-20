"use client";

import { LogIn, UserPlus, PanelLeft, PanelRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useSidebarStore } from "@/lib/store";

export default function Sidebar() {
  const { open, close } = useSidebarStore();

  return (
    <>
      {/* Full-screen overlay — all breakpoints, closes on outside click */}
      {open && <div className="fixed inset-0 z-30" onClick={close} />}

      <aside
        className={`fixed top-0 right-0 z-40 flex h-full w-56 flex-col border-l px-4 py-6 gap-6
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="flex items-center justify-between">
          <span
            className="font-sans text-sm font-semibold"
            style={{ color: "var(--text)" }}
          >
            Menu
          </span>
          <button
            onClick={close}
            aria-label="Close Sidebar"
            style={{ color: "var(--text-tertiary)" }}
            aria-controls="app-sidebar"
            type="button"
          >
            {open ? <PanelLeft size={18} /> : <PanelRight size={18} />}
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-tertiary)" }}
          >
            Account
          </p>
          <button
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ color: "var(--text)" }}
          >
            <LogIn size={15} />
            Sign in
          </button>
          <button
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--accent-primary)", color: "#fff" }}
          >
            <UserPlus size={15} />
            Sign up
          </button>
        </div>

        <div
          className="flex flex-col gap-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "var(--text-tertiary)" }}
          >
            Appearance
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Dark mode
            </span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
