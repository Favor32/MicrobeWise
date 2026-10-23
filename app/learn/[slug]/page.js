import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { learnTopics, getLearnTopicBySlug } from "@/data/learnTopics";
import { BulletList } from "@/components/microbes/InfoCard";
import ReferenceList from "@/components/microbes/ReferenceList";
import TopicCard from "@/components/ui/TopicCard";

export function generateStaticParams() {
  return learnTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getLearnTopicBySlug(slug);
  if (!topic) return { title: "Not found | MicrobeWise" };
  return { title: `${topic.title} | MicrobeWise`, description: topic.summary };
}

export default async function LearnArticle({ params }) {
  const { slug } = await params;
  const topic = getLearnTopicBySlug(slug);
  if (!topic) notFound();

  const Icon = topic.icon;
  const others = learnTopics.filter((t) => t.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-crimson"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        All Learn topics
      </Link>

      <header className="mt-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blush text-crimson">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl">{topic.title}</h1>
        <p className="mt-4 text-lg text-muted">{topic.intro}</p>
      </header>

      <div className="mt-10 space-y-10">
        {topic.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-muted">
                {p}
              </p>
            ))}
            {s.bullets && (
              <div className="mt-4 text-muted">
                <BulletList items={s.bullets} />
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-line bg-white p-6">
        <h2 className="flex items-center gap-3 text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blush text-crimson">
            <BookOpen size={18} aria-hidden="true" />
          </span>
          Sources and further reading
        </h2>
        <div className="mt-4">
          {topic.references.length > 0 ? (
            <ReferenceList references={topic.references} />
          ) : (
            <p className="text-sm text-muted">
              Specific sources for this page are still to be added.
            </p>
          )}
        </div>
        <p className="mt-5 text-xs text-muted">
          This page is for general education only. It is not medical advice.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">More to explore</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((t) => (
            <TopicCard
              key={t.slug}
              topic={{ ...t, description: t.summary }}
              href={`/learn/${t.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
