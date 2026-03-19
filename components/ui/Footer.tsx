import { Github, Twitter, Linkedin } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-6 py-4"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span
          className="font-sans text-xs font-semibold"
          style={{ color: "var(--text-tertiary)" }}
        >
          Rudani
        </span>
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition-colors hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-tertiary)" }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
