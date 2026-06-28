import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { fadeUp, wordUp } from "../../lib/animations";
import { images } from "../../lib/images";
import { site } from "../../lib/site";

const headline = [
  { text: "Experience", teal: false },
  { text: "Comfortable", teal: false },
  { text: "Dental", teal: true },
  { text: "Care.", teal: true },
];

const tags = [
  "Dental Checkup",
  "Teeth Cleaning",
  "Tooth Whitening",
  "Gum Treatment",
  "Implants",
  "Root Canal",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-end overflow-hidden md:min-h-[90vh]"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Photo src={images.hero} alt="Patient receiving comfortable dental care" className="object-center" />
      </div>

      {/* Left-to-right legibility fade */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(6,12,20,0.95) 0%, rgba(6,12,20,0.80) 38%, rgba(6,12,20,0.45) 65%, rgba(6,12,20,0.15) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 20%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-14 pt-28 md:px-[60px]">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/15 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
          <span className="text-[0.62rem] font-semibold tracking-[0.12em] text-[hsl(var(--primary))]">
            BEST DENTAL CARE · {site.location}
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="mb-6 max-w-[580px] text-[2.8rem] font-extrabold leading-[1.0] tracking-[-0.03em] text-white sm:text-[clamp(3rem,5.5vw,5.5rem)]">
          {headline.map((word, i) => (
            <motion.span
              key={word.text}
              variants={wordUp}
              custom={i}
              initial="hidden"
              animate="visible"
              className={`mr-[0.22em] inline-block ${word.teal ? "text-[hsl(var(--primary))]" : ""}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
          className="mb-10 max-w-full text-[0.92rem] font-light leading-[1.75] text-white/55 md:max-w-[380px]"
        >
          Your family's dental health, handled with care. Modern technology, gentle hands, and
          transparent pricing — always.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={6.5}
          initial="hidden"
          animate="visible"
          className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#contact" className="h-12 px-8">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </Button>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-[0.82rem] font-normal text-white/50 transition-colors hover:text-white/80"
          >
            Or Call: {site.phone}
          </a>
        </motion.div>

        {/* Service tag pills */}
        <motion.div
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2.5"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[0.72rem] font-medium text-white/65"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
