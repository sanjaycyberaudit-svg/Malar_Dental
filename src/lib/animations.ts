import type { Variants } from "motion/react";

/** Staggered blur-up entrance. Pass the index via `custom`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

/** Word-by-word stagger used by the hero headline. */
export const wordUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.08 },
  }),
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
