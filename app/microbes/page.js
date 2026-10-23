import { Suspense } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import MicrobeLibrary from "@/components/microbes/MicrobeLibrary";
import { microbes } from "@/data/microbes";

export const metadata = { title: "Explore Microbes | MicrobeWise" };

export default function MicrobesPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
      <SectionHeading
        eyebrow="Microbe Library"
        title="Explore the Microbes"
        description="Search or filter to meet bacteria, viruses, fungi, and parasites. Remember that most microbes are harmless or helpful, and only some cause disease."
      />
      <div className="mt-10">
        <Suspense fallback={<p className="text-center text-muted">Loading...</p>}>
          <MicrobeLibrary microbes={microbes} />
        </Suspense>
      </div>
    </div>
  );
}
