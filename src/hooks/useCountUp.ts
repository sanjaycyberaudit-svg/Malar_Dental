import { useEffect, useRef, useState } from "react";

const easeInOut = (t: number): number => {
  // approximates cubic-bezier(0.25, 0.1, 0.25, 1)
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

interface Options {
  target: number;
  duration?: number;
  decimals?: number;
  /** External trigger (e.g. row entered viewport). Counts once. */
  start: boolean;
}

export function useCountUp({ target, duration = 1400, decimals = 0, start }: Options) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(target * easeInOut(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
