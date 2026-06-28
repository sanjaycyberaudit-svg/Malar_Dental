import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outline-white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChild?: never;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full font-semibold text-[0.82rem] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]/60 focus-visible:ring-offset-2 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-110 hover:shadow-[0_10px_30px_rgba(11,184,184,0.35)]",
  secondary:
    "bg-[hsl(var(--surface-dark))] text-white hover:bg-[hsl(var(--surface-dark))]/90",
  ghost:
    "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  white:
    "bg-white text-[hsl(var(--primary))] hover:bg-white/90",
  "outline-white":
    "border border-white/35 text-white font-normal hover:bg-white/10",
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
