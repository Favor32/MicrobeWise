import { ExternalLink } from "lucide-react";

export default function ReferenceList({ references }) {
  return (
    <ul className="space-y-2">
      {references.map((r) => (
        <li key={r.url}>
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:underline"
          >
            {r.label}
            <ExternalLink size={14} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}