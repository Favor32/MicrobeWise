import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { getArticleBySlug } from "@/data/articles";

// Decorative circles, like cells under a microscope
function Cells() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <circle cx="60" cy="50" r="46" fill="#C91832" opacity="0.07" />
      <circle cx="340" cy="150" r="70" fill="#C91832" opacity="0.06" />
      <circle cx="210" cy="30" r="22" fill="#C91832" opacity="0.1" />
      <circle cx="120" cy="170" r="30" fill="#C91832" opacity="0.08" />
      <circle cx="320" cy="40" r="14" fill="#C91832" opacity="0.12" />
    </svg>
  );
}

export function FeaturedHealthCard({ topic }) {
  const Icon = topic.icon;
  const article = getArticleBySlug(topic.slug);
  const points = article ? article.keyPoints.slice(0, 3) : [];

  return (
    <Reveal>
      <Link
        href={`/public-health/${topic.slug}`}
        className="card-classy group grid overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-crimson/30 hover:shadow-xl lg:grid-cols-5"
      >
        <div className="relative flex min-h-56 items-center justify-center bg-blush lg:col-span-2">
          <Cells />
          <span className="card-icon relative flex h-28 w-28 items-center justify-center rounded-full bg-white text-crimson shadow-sm">
            <Icon size={52} aria-hidden="true" />
          </span>
        </div>
        <div className="p-8 sm:p-10 lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">
            Featured topic
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl">{topic.title}</h2>
          <p className="mt-3 max-w-2xl text-muted">{topic.description}</p>
          {points.length > 0 && (
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-crimson">
            Read the full article
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function HealthCard({ topic, index = 0 }) {
  const Icon = topic.icon;
  return (
    <Reveal index={index} className="h-full">
      <Link
        href={`/public-health/${topic.slug}`}
        className="card-classy group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:border-crimson/30 hover:shadow-xl"
      >
        <div className="relative flex h-36 items-center justify-center bg-blush">
          <Cells />
          <span className="card-icon relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-crimson shadow-sm transition duration-300 group-hover:scale-110">
            <Icon size={30} aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg">{topic.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{topic.description}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
            Read more
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
