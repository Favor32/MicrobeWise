import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function CategoryCard({ category, index = 0 }) {
  return (
    <Reveal index={index} className="h-full">
      <Link
        href={`/microbes?category=${category.slug}`}
        className="card-classy group flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-1.5 hover:border-crimson/30 hover:shadow-xl"
      >
        <div className="relative h-52 overflow-hidden rounded-xl bg-blush">
          <Image
            src={category.image}
            alt={category.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <h3 className="mt-5 px-2 text-xl">{category.name}</h3>
        <p className="mt-2 flex-1 px-2 text-sm text-muted">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 px-2 pb-2 text-sm font-semibold text-crimson">
          Explore {category.name.toLowerCase()}
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}
