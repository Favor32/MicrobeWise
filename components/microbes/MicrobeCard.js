import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import MicrobePhoto from "./MicrobePhoto";
import { categoryLabels } from "@/data/microbes";

export default function MicrobeCard({ microbe, index = 0 }) {
  return (
    <Reveal index={index} className="h-full">
      <Link
        href={`/microbes/${microbe.slug}`}
        className="card-classy group flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-1.5 hover:border-crimson/30 hover:shadow-xl"
      >
        <div className="relative h-48 overflow-hidden rounded-xl bg-blush">
          <MicrobePhoto
            slug={microbe.slug}
            category={microbe.category}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <span className="mt-4 w-fit rounded-full bg-blush px-3 py-1 text-xs font-bold text-crimson">
          {categoryLabels[microbe.category]}
        </span>
        <h3
          className={`mt-3 text-lg ${microbe.category !== "viruses" ? "italic" : ""}`}
        >
          {microbe.name}
        </h3>
        <p className="text-xs text-muted">{microbe.commonName}</p>
        <p className="mt-2 flex-1 text-sm text-muted">
          {microbe.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
          View profile
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}
