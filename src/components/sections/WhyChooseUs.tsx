import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { images } from "../../lib/images";

const checklist = [
  "Dental check-ups",
  "Root canal treatment",
  "Hygiene treatments",
  "Dental implant restoration",
  "Crowns, veneers & bridges",
  "Professional tooth whitening",
];

export function WhyChooseUs() {
  return (
    <section id="team" className="bg-white px-6 py-24 md:px-[60px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel className="mb-4">Why Choose Us</SectionLabel>
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[hsl(var(--surface-dark))]">
              Are you looking for a dentist to give you that special smile?
            </h2>
            <p className="mb-10 max-w-md text-[0.85rem] font-light leading-[1.8] text-[hsl(var(--muted-foreground))]">
              Malar Dental provides the highest quality dental care with a group of experienced
              dentists and specialists, blending precision technology with a calm, caring touch.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
                  <span className="text-[0.82rem] text-[hsl(var(--surface-dark))]">{item}</span>
                </div>
              ))}
            </div>

            <Button href="#team" variant="secondary" className="h-11 px-6">
              Meet Our Team <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            variants={fadeUp}
            custom={1.5}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="h-[420px] overflow-hidden rounded-2xl lg:h-[520px]"
          >
            <Photo src={images.team} alt="The Malar Dental team" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
