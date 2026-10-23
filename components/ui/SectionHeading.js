export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-crimson">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </div>
  );
}