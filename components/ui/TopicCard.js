import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function TopicCard({ topic, href, index = 0 }) {
  const Icon = topic.icon;
  return (
    <Reveal index={index} className="h-full">
      <Link
        href={href}
        className="card-classy group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-crimson/30 hover:shadow-xl"
      >
        <span className="card-icon flex h-12 w-12 items-center justify-center rounded-xl bg-blush text-crimson">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg">{topic.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{topic.description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
          Read more
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}