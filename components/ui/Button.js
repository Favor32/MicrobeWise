import Link from "next/link";

const styles = {
  primary:
    "bg-crimson text-white hover:bg-crimson-dark shadow-sm hover:shadow-md",
  secondary:
    "border border-line bg-white text-ink hover:border-crimson hover:text-crimson",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`;

  // If an href is given it's a link; otherwise it's a real button.
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}