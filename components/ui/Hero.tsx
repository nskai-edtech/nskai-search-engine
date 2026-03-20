export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-8 lg:pr-16">
      <div
        className="w-fit rounded-full border px-3 py-1 text-xs"
        style={{
          borderColor: "var(--accent-soft)",
          backgroundColor: "var(--accent-light)",
          color: "var(--accent-text-on-light)",
        }}
      >
        Powered by Claude · Serper · Jina
      </div>

      <div className="flex flex-col gap-3">
        <h1
          className="font-sans text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{ color: "var(--text)" }}
        >
          Search that actually{" "}
          <span style={{ color: "var(--accent-primary)" }}>understands</span>{" "}
          you
        </h1>
        <p
          className="max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Ask anything. Get a direct, cited answer synthesised from across the
          web.
        </p>
      </div>

      <a
        href="/search"
        className="w-fit rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
        style={{ backgroundColor: "var(--accent-primary)", color: "#fff" }}
      >
        Start searching
      </a>
    </section>
  );
}
