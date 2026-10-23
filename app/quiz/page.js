import SectionHeading from "@/components/ui/SectionHeading";
import QuizLab from "@/components/quiz/QuizLab";

export const metadata = { title: "Quiz Lab | MicrobeWise" };

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
      <SectionHeading
        eyebrow="Quiz Lab"
        title="Test Your Microbiology Knowledge"
        description="Beat the clock, build a streak, and learn from every explanation. No account needed."
      />
      <div className="mt-10">
        <QuizLab />
      </div>
      <p className="mt-8 max-w-xl text-xs text-muted">
        This quiz is for general education only and is not medical advice.
      </p>
    </div>
  );
}
