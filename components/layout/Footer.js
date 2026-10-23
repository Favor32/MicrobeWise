import Link from "next/link";
import { LogoMark } from "./Logo";

const explore = [
  { href: "/microbes", label: "Microbe Library" },
  { href: "/learn", label: "Learn" },
  { href: "/quiz", label: "Quiz Lab" },
  { href: "/public-health", label: "Public Health" },
];

const sources = [
  { href: "https://www.who.int", label: "World Health Organization (WHO)" },
  { href: "https://www.cdc.gov", label: "U.S. CDC" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-blush">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <LogoMark size={32} />
            <span className="text-lg font-extrabold">
              Microbe<span className="text-crimson">Wise</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            An interactive platform that makes microbiology, infectious
            diseases, and public health easier to understand, explore, and
            remember.
          </p>
          <div className="mt-5">
  <p className="text-sm font-semibold">Connect</p>
  <ul className="mt-3 flex flex-wrap gap-2">
    {[
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
      { label: "Twitter / X", href: "https://x.com/uniq_favie" },
      { label: "GitHub", href: "https://github.com/favor32" },
    ].map((s) => (
      <li key={s.label}>
        <a
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold transition hover:border-crimson hover:text-crimson"
        >
          {s.label}
        </a>
      </li>
    ))}
  </ul>
</div>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-widest text-crimson">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-crimson">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-widest text-crimson">
            Scientific sources
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-crimson"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-screen-2xl px-6 py-6 text-xs text-muted">
          <p>
            <strong className="text-ink">Educational disclaimer:</strong>{" "}
            MicrobeWise provides general educational information only. It is
            not medical advice and cannot diagnose, treat, or replace
            consultation with a qualified healthcare professional.
          </p>
          <p className="mt-2">
            © 2026 MicrobeWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}