import Image from "next/image";
import { MicrobeIcon } from "../illustrations/MicrobeArt";
import { getMicrobeImage } from "@/data/microbeImages";

export default function MicrobePhoto({ slug, category, sizes, priority = false }) {
  const img = getMicrobeImage(slug);

  if (!img) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-blush">
        <MicrobeIcon type={category} className="h-24 w-24" />
      </div>
    );
  }

  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover transition duration-700 ease-out group-hover:scale-110"
    />
  );
}
