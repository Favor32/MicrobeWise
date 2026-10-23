import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { healthTopics } from "@/data/healthTopics";
import { articles, getArticleBySlug } from "@/data/articles";
import { BulletList } from "@/components/microbes/InfoCard";
import ReferenceList from "@/components/microbes/ReferenceList";
import TopicCard from "@/components/ui/TopicCard";

const LAST_REVIEWED = "Not yet reviewed. Add date after checking sources";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = healthTopics.find((t) => t.slug === slug);
  if (!topic) return { title: "Not found | MicrobeWise" };
  return {
    title: `${topic.title} | MicrobeWise`,
    description: topic.description,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const topic = healthTopics.find((t) => t.slug === slug);

  if (!article || !topic) notFound();

  const Icon = topic.icon;
  const others = healthTopics.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/public-health"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-crimson"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        All public health topics
      </Link>

      <header className="mt-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blush text-crimson">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl">{topic.title}</h1>
        <p className="mt-4 text-lg text-muted">{article.intro}</p>
      </header>

      <aside className="mt-8 rounded-2xl border border-line bg-blush p-6">
        <h2 className="flex items-center gap-2 text-base">
          <CheckCircle2 size={18} className="text-crimson" aria-hidden="true" />
          Key points
        </h2>
        <div className="mt-3 text-sm">
          <BulletList items={article.keyPoints} />
        </div>
      </aside>

      <div className="mt-10 space-y-10">
        {article.sections.map((s) => (
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
          <ReferenceList references={article.references} />
        </div>
        <p className="mt-5 text-xs text-muted">Last reviewed: {LAST_REVIEWED}</p>
        <p className="mt-2 text-xs text-muted">
          This page is for general education only. It is not medical advice and
          cannot diagnose or treat any condition. Vaccination schedules and
          health programmes differ between countries, so please confirm details
          with a local health worker.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">More topics</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((t) => (
            <TopicCard
              key={t.slug}
              topic={t}
              href={`/public-health/${t.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
