import { motion } from "motion/react";
import { Photo } from "../ui/Photo";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, viewportOnce } from "../../lib/animations";
import { images } from "../../lib/images";

const reviews = [
  {
    quote:
      "I travelled from Hasthampatti for my root canal and it was completely painless. Dr. Shantha Kumar explained every step in Tamil and the pricing was very reasonable. Best dental clinic in Salem.",
    name: "Karthika Ravichandran",
    location: "Hasthampatti, Salem",
    img: images.reviews.karthika,
  },
  {
    quote:
      "I used to be scared of dentists, but the team at Malar Dental made me feel comfortable. Got my teeth cleaning and whitening done — quick, gentle, and affordable. Highly recommend to everyone in Salem.",
    name: "Murugesan Subramani",
    location: "Fairlands, Salem",
    img: images.reviews.murugesan,
  },
  {
    quote:
      "Brought my children here after a neighbour recommended it. The staff are so patient and caring with kids. We are now a Malar Dental family for life. Proud to have such a clinic in Salem.",
    name: "Lakshmi Venkatesan",
    location: "Alagapuram, Salem",
    img: images.reviews.lakshmi,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-24 md:px-[60px]">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 text-center"
        >
          <SectionLabel>Patient Reviews</SectionLabel>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.025em] text-[hsl(var(--surface-dark))]">
            Don't take our word for it.
          </h2>
          <p className="mt-2 text-[0.85rem] font-normal text-[hsl(var(--muted-foreground))]">
            <span className="text-[hsl(var(--warning))]">★★★★★</span> 4.9 average from 1,200+ verified
            reviews
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-light))] p-7"
            >
              <div className="mb-4 text-sm tracking-[2px] text-[hsl(var(--warning))]">★★★★★</div>
              <blockquote className="text-[0.92rem] leading-[1.75] text-[hsl(var(--surface-dark))]">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full">
                  <Photo src={review.img} alt={review.name} />
                </div>
                <div>
                  <p className="text-[0.82rem] font-semibold text-[hsl(var(--surface-dark))]">
                    {review.name}
                  </p>
                  <p className="text-[0.68rem] font-light text-[hsl(var(--muted-foreground))]">
                    {review.location} · Verified Google Review
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
