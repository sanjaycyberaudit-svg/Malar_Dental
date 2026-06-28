import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { site } from "../../lib/site";

const trust = ["No waiting list", "Transparent pricing", "All ages welcome"];

export function FinalCta() {
  return (
    <section id="contact" className="bg-[hsl(var(--primary))] px-6 py-20 md:px-[60px]">
      <Container narrow>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-0.03em] text-white"
          >
            Your healthiest smile starts today.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-5 text-[0.92rem] font-light leading-relaxed text-white/70"
          >
            Request a free consultation in under 2 minutes. Same-day appointments available.
            Transparent pricing, no surprises.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button href={`tel:${site.phoneTel}`} variant="white" className="h-12 px-10">
              Book Free Consultation
            </Button>
            <Button href={`tel:${site.phoneTel}`} variant="outline-white" className="h-12 px-8">
              <Phone className="h-4 w-4" /> {site.phone}
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {trust.map((item) => (
              <span key={item} className="text-[0.85rem] font-light text-white/75">
                ✓ {item}
              </span>
            ))}
          </div>

          <motion.a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              site.address.mapQuery,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-10 flex max-w-md items-start justify-center gap-2.5 text-[0.85rem] font-light leading-relaxed text-white/80 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{site.address.full}</span>
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
