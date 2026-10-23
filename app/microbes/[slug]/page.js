import Link from "next/link";
import MicrobePhoto from "@/components/microbes/MicrobePhoto";
import { getMicrobeImage } from "@/data/microbeImages";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Microscope,
  Layers,
  MapPin,
  Stethoscope,
  Share2,
  Thermometer,
  TestTube,
  ShieldCheck,
  BookOpen,
  Info,
} from "lucide-react";
import { microbes, categoryLabels, getMicrobeBySlug } from "@/data/microbes";
import { MicrobeIcon } from "@/components/illustrations/MicrobeArt";
import InfoCard, { BulletList } from "@/components/microbes/InfoCard";
import ReferenceList from "@/components/microbes/ReferenceList";
import MicrobeCard from "@/components/microbes/MicrobeCard";

const LAST_REVIEWED = "Not yet reviewed. Add date after checking sources";

export function generateStaticParams() {
  return microbes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const microbe = getMicrobeBySlug(slug);
  if (!microbe) return { title: "Not found | MicrobeWise" };
  return {
    title: `${microbe.name} | MicrobeWise`,
    description: microbe.shortDescription,
  };
}

export default async function MicrobeProfile({ params }) {
  const { slug } = await params;
  const microbe = getMicrobeBySlug(slug);

  if (!microbe) notFound();

  const italic = microbe.category !== "viruses" ? "italic" : "";

  const related = microbes
    .filter((m) => m.category === microbe.category && m.slug !== microbe.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10">
      <Link
        href="/microbes"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-crimson"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to the library
      </Link>

      <header className="mt-6 grid items-center gap-8 rounded-3xl border border-line bg-blush p-8 sm:p-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-crimson">
            {categoryLabels[microbe.category]}
          </span>
          <h1 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl ${italic}`}>
            {microbe.name}
          </h1>
          <p className="mt-2 text-muted">Common name: {microbe.commonName}</p>
          <p className="mt-4 max-w-2xl text-lg">{microbe.shortDescription}</p>
          <p className="mt-4 text-sm text-muted">
            <strong className="text-ink">Classification:</strong>{" "}
            {microbe.classification}
          </p>
        </div>
       <div className="mx-auto w-full max-w-sm">
  <div className="group relative aspect-square overflow-hidden rounded-2xl bg-white">
    <MicrobePhoto
      slug={microbe.slug}
      category={microbe.category}
      sizes="(min-width: 1024px) 384px, 90vw"
      priority
    />
  </div>
  <p className="mt-2 text-center text-xs text-muted">
    {getMicrobeImage(microbe.slug)?.credit
      ? `Image: ${getMicrobeImage(microbe.slug).credit}`
      : getMicrobeImage(microbe.slug)
        ? "Image shown for illustration."
        : "Simplified illustration. Not this exact organism and not to scale."}
  </p>
</div>
      </header>

      <aside className="mt-6 flex gap-3 rounded-2xl border border-crimson/30 bg-white p-5 text-sm">
        <Info
          size={20}
          className="mt-0.5 shrink-0 text-crimson"
          aria-hidden="true"
        />
        <p>{microbe.note}</p>
      </aside>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <InfoCard icon={Layers} title="General characteristics">
          <p>{microbe.characteristics}</p>
        </InfoCard>
        <InfoCard icon={Microscope} title="Structure and appearance">
          <p>{microbe.morphology}</p>
        </InfoCard>
        <InfoCard icon={MapPin} title="Habitat or reservoir">
          <p>{microbe.habitat}</p>
        </InfoCard>
        <InfoCard icon={Stethoscope} title="Associated diseases">
          <BulletList items={microbe.diseases} />
        </InfoCard>
        <InfoCard icon={Share2} title="How it spreads">
          <BulletList items={microbe.transmission} />
        </InfoCard>
        <InfoCard icon={Thermometer} title="Symptoms of associated infections">
          <BulletList items={microbe.symptoms} />
        </InfoCard>
        <InfoCard icon={TestTube} title="How it is diagnosed">
          <BulletList items={microbe.diagnosis} />
          <p className="mt-4 text-xs">
            Test results always need to be interpreted by a health professional
            in the context of the person&apos;s symptoms and history.
          </p>
        </InfoCard>
        <InfoCard icon={ShieldCheck} title="Prevention and control">
          <BulletList items={microbe.prevention} />
        </InfoCard>
      </div>

      <section className="mt-8 rounded-2xl border border-line bg-white p-6">
        <h2 className="flex items-center gap-3 text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blush text-crimson">
            <BookOpen size={18} aria-hidden="true" />
          </span>
          Sources and further reading
        </h2>
        <div className="mt-4">
          <ReferenceList references={microbe.references} />
        </div>
        <p className="mt-5 text-xs text-muted">Last reviewed: {LAST_REVIEWED}</p>
        <p className="mt-2 text-xs text-muted">
          This page is for general education only. It is not medical advice and
          cannot diagnose or treat any condition. If you are unwell, please see
          a qualified healthcare professional.
        </p>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl">
            More {categoryLabels[microbe.category].toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((m) => (
              <MicrobeCard key={m.slug} microbe={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
