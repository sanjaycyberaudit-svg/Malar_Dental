import { cn } from "../../lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/** Overline / sub-label — 0.62rem, tracking-[0.2em], uppercase, teal. */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]",
        className,
      )}
    >
      {children}
    </span>
  );
}
