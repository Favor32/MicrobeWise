import SectionHeading from "@/components/ui/SectionHeading";
import TopicCard from "@/components/ui/TopicCard";
import { learnTopics } from "@/data/learnTopics";

export const metadata = { title: "Learn | MicrobeWise" };

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 py-14">
      <SectionHeading
        eyebrow="Learn"
        title="Microbiology in Everyday Life"
        description="Microbes are part of your food, water, body, and environment. These short explainers show how."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {learnTopics.map((t) => (
          <TopicCard
            key={t.slug}
            topic={{ ...t, description: t.summary }}
            href={`/learn/${t.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
