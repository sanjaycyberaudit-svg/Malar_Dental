import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { images } from "../../lib/images";

const services = [
  {
    price: "FROM ₹300",
    title: "Dental Check-Up",
    body: "Comprehensive examination of your teeth, gums, and jaw. Includes digital X-rays and a full treatment plan.",
    img: images.services.checkup,
  },
  {
    price: "FROM ₹800",
    title: "Teeth Cleaning",
    body: "Professional scaling and polishing to remove plaque, tartar, and surface stains for a healthier smile.",
    img: images.services.cleaning,
  },
  {
    price: "FROM ₹6,000",
    title: "Tooth Whitening",
    body: "Professional in-office or at-home whitening to brighten your smile by up to 8 shades.",
    img: images.services.whitening,
  },
  {
    price: "FROM ₹25,000",
    title: "Dental Implants",
    body: "Permanent, natural-looking replacements for missing teeth — surgically placed and built to last a lifetime.",
    img: images.services.implants,
  },
  {
    price: "FROM ₹5,000",
    title: "Veneers & Crowns",
    body: "Custom-crafted porcelain shells and crowns to restore shape, color, and strength to damaged teeth.",
    img: images.services.veneers,
  },
  {
    price: "SAME DAY",
    title: "Emergency Care",
    body: "Same-day emergency appointments for toothaches, broken teeth, lost fillings, and dental pain. Call anytime.",
    img: images.services.emergency,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[hsl(var(--surface-light))] px-6 py-24 md:px-[60px]">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel className="mb-3">Feature Treatment</SectionLabel>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-[hsl(var(--surface-dark))]">
              Advanced Dental Care
              <br />
              for a Healthier Smile
            </h2>
          </motion.div>
          <Button href="#services" variant="secondary" className="h-10 px-6">
            View All Services <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white transition-all duration-[220ms] ease-out hover:-translate-y-[5px] hover:shadow-[0_20px_56px_rgba(0,0,0,0.09)]"
            >
              <div className="h-[148px] overflow-hidden">
                <Photo
                  src={service.img}
                  alt={service.title}
                  className="transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="mb-3 inline-flex rounded-full bg-[hsl(var(--primary-light))] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.08em] text-[hsl(var(--primary))]">
                  {service.price}
                </span>
                <h3 className="mb-2 text-[0.95rem] font-bold text-[hsl(var(--surface-dark))]">
                  {service.title}
                </h3>
                <p className="text-[0.78rem] font-light leading-[1.65] text-[hsl(var(--muted-foreground))]">
                  {service.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[hsl(var(--primary))] transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
