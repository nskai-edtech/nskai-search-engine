const STEPS = [
  {
    step: "01",
    label: "You ask",
    detail: "Type any question in plain language.",
  },
  {
    step: "02",
    label: "We retrieve",
    detail: "Live web search fetches the most relevant pages.",
  },
  {
    step: "03",
    label: "We rank",
    detail: "A re-ranker scores and selects the best passages.",
  },
  {
    step: "04",
    label: "You get answers",
    detail: "Claude synthesises a cited, coherent response.",
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-4">
      <p
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--text-tertiary)" }}
      >
        How it works
      </p>
      <div className="flex flex-col gap-2">
        {STEPS.map(({ step, label, detail }) => (
          <div key={step} className="flex items-baseline gap-3">
            <span
              className="font-mono text-xs shrink-0"
              style={{ color: "var(--accent-primary)" }}
            >
              {step}
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              {label}
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              — {detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
