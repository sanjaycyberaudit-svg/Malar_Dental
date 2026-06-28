import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Narrow variant for centered copy / FAQ. */
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        narrow ? "max-w-3xl" : "max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
