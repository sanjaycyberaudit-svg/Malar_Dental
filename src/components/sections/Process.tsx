import { motion } from "motion/react";
import { Photo } from "../ui/Photo";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { images } from "../../lib/images";

const steps = [
  {
    num: "01",
    title: "Book Online",
    body: "Fill out our quick form or call us — we'll confirm your appointment within the hour.",
    img: images.process.book,
  },
  {
    num: "02",
    title: "Welcome Visit",
    body: "Arrive at your scheduled time, meet your dentist, and we'll go over your dental history.",
    img: images.process.welcome,
  },
  {
    num: "03",
    title: "Smile Assessment",
    body: "Digital X-rays, full examination, and a transparent care plan with pricing before we start.",
    img: images.process.assessment,
  },
  {
    num: "04",
    title: "Treatment & Care",
    body: "Treatment completed, results reviewed, aftercare explained. We follow up to make sure you're happy.",
    img: images.process.treatment,
  },
];

export function Process() {
  return (
    <section className="bg-[hsl(var(--surface-dark))] px-6 py-24 md:px-[60px]">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-[560px] text-center"
        >
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.025em] text-white">
            Your journey to a healthier smile.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6"
            >
              <p className="mb-5 text-[3rem] font-extrabold leading-[1] tracking-[-0.04em] text-white/[0.07]">
                {step.num}
              </p>
              <div className="mb-5 h-[130px] overflow-hidden rounded-xl">
                <Photo src={step.img} alt={step.title} />
              </div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[0.65rem] font-bold text-white">
                  {step.num}
                </span>
                <h3 className="text-[0.88rem] font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-[0.78rem] font-light leading-relaxed text-white/50">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
