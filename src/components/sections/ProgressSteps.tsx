import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "../ui/Container";

const steps = ["Smile Assessment", "Care Planning", "Treatment Process", "Dental Maintenance"];

export function ProgressSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-[hsl(var(--border))] bg-white px-6 md:px-[60px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step}
                onClick={() => setActive(i)}
                className="relative cursor-pointer border-r border-[hsl(var(--border))] px-6 py-5 text-left transition-colors last:border-r-0 even:border-r-0 md:even:border-r"
              >
                <span
                  className={`text-[0.7rem] tracking-[0.06em] transition-colors ${
                    isActive
                      ? "font-semibold text-[hsl(var(--surface-dark))]"
                      : "font-normal text-[hsl(var(--muted-foreground))]"
                  }`}
                >
                  {step}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="progress-underline"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-[hsl(var(--primary))]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
