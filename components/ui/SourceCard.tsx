import { ExternalLink } from "lucide-react";

interface Source {
  index: number;
  title: string;
  url: string;
  snippet: string;
}

export default function SourceCard({ source }: { source: Source }) {
  const domain = (() => {
    try {
      return new URL(source.url).hostname.replace("www.", "");
    } catch {
      return source.url;
    }
  })();

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-1.5 rounded-xl border p-3 text-xs transition-colors hover:border-[var(--accent-primary)]"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="font-mono font-semibold"
          style={{ color: "var(--accent-primary)" }}
        >
          [{source.index}]
        </span>
        <ExternalLink
          size={11}
          style={{ color: "var(--text-tertiary)" }}
          className="shrink-0"
        />
      </div>
      <p
        className="font-medium leading-snug line-clamp-2"
        style={{ color: "var(--text)" }}
      >
        {source.title}
      </p>
      <p style={{ color: "var(--text-tertiary)" }}>{domain}</p>
    </a>
  );
}
