export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-6">
      <h2 className="flex items-center gap-3 text-lg">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blush text-crimson">
          <Icon size={18} aria-hidden="true" />
        </span>
        {title}
      </h2>
      <div className="mt-4 text-sm text-muted">{children}</div>
    </section>
  );
}

// A bulleted list with crimson bullets
export function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}