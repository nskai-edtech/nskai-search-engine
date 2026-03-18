const STEPS = [
  { step: "01", label: "You ask", detail: "Type any question in plain language." },
  { step: "02", label: "We retrieve", detail: "Live web search fetches the most relevant pages." },
  { step: "03", label: "We rank", detail: "A re-ranker scores and selects the best passages." },
  { step: "04", label: "You get answers", detail: "Claude synthesises a cited, coherent response." },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full border-t py-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            className="font-sans text-3xl font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            How it works
          </h2>
          <p className="max-w-sm text-sm" style={{ color: "var(--text-secondary)" }}>
            A four-step pipeline from your question to a grounded answer.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-px sm:grid-cols-4" style={{ backgroundColor: "var(--border)" }}>
          {STEPS.map(({ step, label, detail }) => (
            <div
              key={step}
              className="flex flex-col gap-3 p-6"
              style={{ backgroundColor: "var(--bg)" }}
            >
              <span className="font-mono text-xs font-semibold" style={{ color: "var(--accent-primary)" }}>
                {step}
              </span>
              <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                {label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
