export default function Footer() {
  return (
    <footer
      className="w-full border-t px-6 py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span
          className="font-sans text-xs font-semibold"
          style={{ color: "var(--text-tertiary)" }}
        >
          Senku
        </span>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          Built by{" "}
          <a
            href="izuaba.xyz"
            className="underline hover:text-[var(--accent-primary)]"
          >
            Kelechukwu Izuaba
          </a>
        </p>
      </div>
    </footer>
  );
}
