import { ShieldAlert } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FeaturedHealthCard,
  HealthCard,
} from "@/components/ui/HealthCards";
import { healthTopics } from "@/data/healthTopics";

export const metadata = { title: "Public Health | MicrobeWise" };

export default function PublicHealthPage() {
  const featured = healthTopics.find((t) => t.slug === "malaria-prevention");
  const rest = healthTopics.filter((t) => t.slug !== featured.slug);

  return (
    <div className="mx-auto max-w-screen-2xl px-6 py-14">
      <SectionHeading
        eyebrow="Public health education"
        title="Knowledge That Protects"
        description="Practical, evidence-based information on preventing infectious disease, with a focus on health issues that matter in Nigeria and across Africa."
      />

      <div className="mt-8 flex max-w-3xl gap-3 rounded-2xl border border-crimson/30 bg-white p-5 text-sm">
        <ShieldAlert
          size={20}
          className="mt-0.5 shrink-0 text-crimson"
          aria-hidden="true"
        />
        <p>
          These articles are for general education. They are not medical advice
          and cannot diagnose or treat any condition. If you or someone you
          care for is unwell, please see a qualified healthcare professional.
        </p>
      </div>

      <div className="mt-10">
        <FeaturedHealthCard topic={featured} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((t, i) => (
          <HealthCard key={t.slug} topic={t} index={i} />
        ))}
      </div>
    </div>
  );
}
