import Button from "./Button";

export default function ComingSoon({ title }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-crimson">
        Coming soon
      </p>
      <h1 className="mt-3 text-4xl">{title}</h1>
      <p className="mt-4 text-muted">
        We&apos;re building this section. Check back shortly.
      </p>
      <Button href="/" variant="secondary" className="mt-8">
        Back to home
      </Button>
    </div>
  );
}