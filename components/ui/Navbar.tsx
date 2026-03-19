import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      <span
        className="font-sans text-sm font-semibold tracking-tight"
        style={{ color: "var(--text)" }}
      >
        Senku
      </span>

      <div className="flex items-center gap-3">
        <a
          href="#features"
          className="text-sm transition-colors hover:text-[var(--accent-primary)]"
          style={{ color: "var(--text-secondary)" }}
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-sm transition-colors hover:text-[var(--accent-primary)]"
          style={{ color: "var(--text-secondary)" }}
        >
          How it works
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
