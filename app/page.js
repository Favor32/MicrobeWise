import {
  ArrowRight,
  Brain,
  Layers,
  Trophy,
  ListChecks,
  FlaskConical,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TopicCard from "@/components/ui/TopicCard";
import CategoryCard from "@/components/microbes/CategoryCard";
import { HeroArt } from "@/components/illustrations/MicrobeArt";
import { categories } from "@/data/categories";
import { healthTopics } from "@/data/healthTopics";
import FactFlipCards from "@/components/ui/FactFlipCards";

const learningFeatures = [
  {
    icon: ListChecks,
    title: "Quizzes by topic",
    text: "Multiple-choice questions with instant feedback.",
  },
  {
    icon: Brain,
    title: "Explained answers",
    text: "Every answer comes with the reasoning behind it.",
  },
  {
    icon: Layers,
    title: "Flashcards",
    text: "Quick review cards are planned for a future update.",
  },
  {
    icon: Trophy,
    title: "Score tracking",
    text: "See how well you did and try again to improve.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="mx-auto grid max-w-screen-2xl items-center gap-10 px-4 sm:px-6 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-crimson">
            <FlaskConical size={14} aria-hidden="true" />
            Explore the microbial world
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Discover the World You{" "}
            <span className="text-crimson">Can&apos;t See.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Explore the fascinating world of bacteria, viruses, fungi, and
            parasites. Understand the science behind infections and discover
            how microbiology shapes our everyday lives.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/microbes">
              Explore Microbes <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="/quiz" variant="secondary">
              Test Your Knowledge
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-8 border-blush shadow-xl lg:max-w-lg">
  <Image
    src="/images/hero.jpg"
    alt="Microscopic view of different microorganisms"
    fill
    priority
    sizes="(min-width: 1024px) 512px, 90vw"
    className="object-cover"
  />
</div>
          <p className="mt-2 text-center text-xs text-muted">
            Simplified illustration. Not to scale.
          </p>
        </div>
      </section>

      {/* ---------- MICROBE CATEGORIES ---------- */}
      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Explore the microbes"
          title="Meet the Microbial World"
          description="Four major groups of microorganisms. Some make us ill, many help us, and most simply go about their business."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         {categories.map((c, i) => (
  <CategoryCard key={c.slug} category={c} index={i} />
))}
        </div>
      </section>

      {/* ---------- INTERACTIVE LEARNING ---------- */}
      <section className="bg-blush">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Quiz Lab"
              title="Science Is Better When You Explore It."
              description="Test what you know, learn from the explanations, and come back to improve your score. No account needed."
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {learningFeatures.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-crimson">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base">{title}</h3>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button href="/quiz" className="mt-8">
              Go to the Quiz Lab <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>

          {/* A static preview of what a quiz question looks like */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">
              Sample question
            </p>
            <p className="mt-3 text-lg font-bold">
              Which type of microorganism causes malaria?
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              <li className="rounded-xl border border-line px-4 py-3">
                A. A virus
              </li>
              <li className="rounded-xl border border-line px-4 py-3">
                B. A bacterium
              </li>
              <li className="rounded-xl border border-crimson bg-blush px-4 py-3 text-crimson">
                C. A parasite (<em>Plasmodium</em>) ✓
              </li>
              <li className="rounded-xl border border-line px-4 py-3">
                D. A fungus
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted">
              Malaria is caused by <em>Plasmodium</em> parasites, which are
              spread by infected <em>Anopheles</em> mosquitoes.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- PUBLIC HEALTH ---------- */}
      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Public health education"
            title="Knowledge That Protects"
            description="Clear, evidence-based information on prevention, with a focus on health issues that matter in Nigeria and across Africa."
          />
          <Button href="/public-health" variant="secondary">
            View all topics
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {healthTopics.map((t) => (
  <TopicCard key={t.slug} topic={t} href={`/public-health/${t.slug}`} />
))}
        </div>
      </section>

      {/* ---------- FEATURED DISCOVERY ---------- */}
  {/* ---------- FEATURED DISCOVERY ---------- */}
<section className="mx-auto max-w-screen-2xl px-4 sm:px-6 pb-20">
  <SectionHeading
    eyebrow="Discovery"
    title="Flip to Discover"
    description="Click a card to reveal the science behind it."
  />
  <FactFlipCards />
</section>
    </>
  );
}