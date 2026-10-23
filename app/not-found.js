import Button from "@/components/ui/Button";

export const metadata = { title: "Page not found | MicrobeWise" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-crimson">
        404
      </p>
      <h1 className="mt-3 text-4xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-muted">
        The page may have moved, or the address may be mistyped.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/microbes">Browse the microbe library</Button>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </div>
  );
}
