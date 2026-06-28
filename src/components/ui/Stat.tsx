import { useCountUp } from "../../hooks/useCountUp";

interface StatProps {
  target: number;
  label: string;
  suffix?: string;
  decimals?: number;
  starSuffix?: boolean;
  start: boolean;
}

export function Stat({ target, label, suffix = "", decimals = 0, starSuffix, start }: StatProps) {
  const value = useCountUp({ target, decimals, start });

  return (
    <div>
      <p className="text-[2.8rem] font-extrabold leading-[1] tracking-[-0.035em] text-[hsl(var(--surface-dark))]">
        {value.toFixed(decimals)}
        {suffix}
        {starSuffix && <span className="text-[hsl(var(--primary))]">★</span>}
      </p>
      <p className="mt-1 text-[0.7rem] font-normal text-[hsl(var(--muted-foreground))]">{label}</p>
    </div>
  );
}
