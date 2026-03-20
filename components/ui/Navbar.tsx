import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavbarProps {
  slot?: React.ReactNode;
}

export default function Navbar({ slot }: NavbarProps) {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      <Link
        href="/"
        className="font-sans text-sm font-semibold tracking-tight transition-opacity hover:opacity-70 shrink-0"
        style={{ color: "var(--text)" }}
      >
        Rudani
      </Link>

      {slot && (
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm lg:max-w-3xl px-4">
          {slot}
        </div>
      )}

      <ThemeToggle />
    </nav>
  );
}
