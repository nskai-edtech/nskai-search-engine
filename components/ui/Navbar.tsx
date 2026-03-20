import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <span
        className="font-sans text-sm font-semibold tracking-tight"
        style={{ color: "var(--text)" }}
      >
        Rudani
      </span>
      <ThemeToggle />
    </nav>
  );
}
