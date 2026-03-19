import { FileText, GitMerge, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "Cited answers",
    description:
      "Every claim is backed by a source. See exactly where the information came from and verify it yourself.",
  },
  {
    icon: GitMerge,
    title: "Multi-source synthesis",
    description:
      "Pulls from multiple web pages and combines them into one coherent, de-duplicated answer.",
  },
  {
    icon: MessageSquare,
    title: "Contextual follow-ups",
    description:
      "Ask follow-up questions naturally. The engine remembers your conversation and builds on prior context.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full border-t py-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            className="font-sans text-3xl font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Why Senku?
          </h2>
          <p
            className="max-w-sm text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Built on a RAG pipeline that retrieves, ranks, and synthesises — not
            just searches.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border p-6 transition-colors"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent-primary)",
                }}
              >
                <Icon size={18} />
              </span>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
