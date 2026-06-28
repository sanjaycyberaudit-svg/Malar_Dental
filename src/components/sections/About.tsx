import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { User } from "lucide-react";
import { Photo } from "../ui/Photo";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { Stat } from "../ui/Stat";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { images } from "../../lib/images";
import { site } from "../../lib/site";

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="bg-white px-6 py-20 md:px-[60px]">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionLabel className="mb-12">About Us</SectionLabel>
        </motion.div>

        {/* Editorial statement */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 max-w-[760px] text-[clamp(1.6rem,3vw,2.8rem)] font-bold leading-[1.3] tracking-[-0.02em] text-[hsl(var(--surface-dark))]"
        >
          We deliver{" "}
          <span className="text-[hsl(var(--primary))]">personalized dental treatments</span> with
          modern technology and gentle care ensuring healthy confident smiles for every patient.
        </motion.h2>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="mb-10 flex flex-wrap items-center gap-x-10 gap-y-8 border-b border-t border-[hsl(var(--border))] py-8"
        >
          <p className="max-w-[130px] text-[0.68rem] font-light leading-[1.6] text-[hsl(var(--muted-foreground))]">
            Thousands trust us for smiles!
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Stat target={98} suffix="%" label="Satisfaction Rate" start={statsInView} />
            <Stat target={2} suffix="k+" label="Smiles Transformed" start={statsInView} />
            <Stat
              target={4.9}
              decimals={1}
              starSuffix
              label="Customer Rating"
              start={statsInView}
            />
          </div>

          <div className="ml-auto hidden h-[160px] w-[210px] overflow-hidden rounded-2xl sm:block">
            <Photo src={images.clinicInterior} alt="Modern dental clinic interior" />
          </div>
        </div>

        {/* Doctor profile */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-2 flex items-center gap-4"
        >
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
            {site.doctor.photo ? (
              <Photo src={site.doctor.photo} alt={site.doctor.name} />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))]"
                aria-label={`${site.doctor.name} — photo coming soon`}
              >
                <User className="h-6 w-6" />
              </div>
            )}
          </div>
          <div>
            <p className="text-[0.9rem] font-bold text-[hsl(var(--surface-dark))]">
              {site.doctor.name}
            </p>
            <p className="mt-1 text-[0.72rem] font-normal text-[hsl(var(--muted-foreground))]">
              {site.doctor.role} · {site.doctor.reviews}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
