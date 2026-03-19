import SearchBar from "@/components/ui/SearchBar";

export default function Hero() {
  return (
    <section className="flex w-full max-w-2xl flex-col items-center gap-8 pt-40 pb-24 text-center">
      <div className="flex flex-col gap-3">
        <div
          className="mx-auto mb-2 w-fit rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: "var(--accent-soft)",
            backgroundColor: "var(--accent-light)",
            color: "var(--accent-text-on-light)",
          }}
        >
          Powered by Claude · Serper · Jina
        </div>

        <h1
          className="font-sans text-5xl font-semibold leading-tight tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Search that actually{" "}
          <span style={{ color: "var(--accent-primary)" }}>understands</span> you
        </h1>

        <p className="mx-auto max-w-md text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Ask anything in plain language. Get a direct, cited answer synthesised from
          across the web — not a list of links to click through.
        </p>
      </div>

      <SearchBar />
    </section>
  );
}
