import Link from "next/link";

export function LogoMark({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#C91832" />
      <circle cx="20" cy="20" r="13" stroke="#fff" strokeWidth="2.5" />
      <circle cx="16" cy="17" r="3.6" fill="#fff" />
      <circle cx="25" cy="22" r="2.6" fill="#fff" />
      <circle cx="17.5" cy="26" r="1.8" fill="#fff" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="MicrobeWise home"
    >
      <LogoMark />
      <span className="text-xl font-extrabold tracking-tight text-ink">
        Microbe<span className="text-crimson">Wise</span>
      </span>
    </Link>
  );
}