import { FileText, GitMerge, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "Cited answers",
    description: "Every claim is backed by a source you can verify.",
  },
  {
    icon: GitMerge,
    title: "Multi-source synthesis",
    description: "Combines multiple pages into one coherent answer.",
  },
  {
    icon: MessageSquare,
    title: "Contextual follow-ups",
    description: "Remembers your conversation and builds on context.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex flex-col gap-4">
      <p
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--text-tertiary)" }}
      >
        Why Rudani
      </p>
      <div className="flex flex-col gap-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: "var(--accent-light)",
                color: "var(--accent-primary)",
              }}
            >
              <Icon size={14} />
            </span>
            <div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                {title}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {" "}
                — {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
