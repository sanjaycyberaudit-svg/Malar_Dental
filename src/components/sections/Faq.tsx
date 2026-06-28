import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, viewportOnce } from "../../lib/animations";

const faqs = [
  {
    q: "Do you accept new patients?",
    a: "Yes — we're always welcoming new patients and their families. You can book online, call us, or simply walk in during opening hours. Same-day appointments are often available.",
  },
  {
    q: "Is dental treatment painful?",
    a: "We prioritize your comfort at every step. All treatments are performed with local anesthesia so you don't feel pain during the procedure. We also offer sedation options for anxious patients.",
  },
  {
    q: "How often should I come in for a check-up?",
    a: "We recommend a dental check-up and professional cleaning every 6 months. Some patients may benefit from more frequent visits — your dentist will advise based on your individual needs.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible monthly EMI payment plans through our financing partners. Ask our team about 0% interest options on qualifying treatments over ₹15,000.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call our emergency line immediately — +91 90035 28907. We offer same-day emergency slots for toothaches, broken teeth, lost crowns, and dental trauma. Don't wait if you're in pain.",
  },
  {
    q: "Can children be patients at Malar Dental?",
    a: "Absolutely. We treat patients of all ages, including children from their first tooth onwards. Our team is experienced in making young patients feel comfortable and confident about dental care.",
  },
  {
    q: "How long do treatments take?",
    a: "It depends on the treatment. A standard check-up takes 45–60 minutes. Cleaning is 45 minutes. More complex procedures like implants or crowns involve multiple visits — your dentist will give you a full timeline at your consultation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[hsl(var(--surface-light))] px-6 py-24 md:px-[60px]">
      <Container narrow>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-center"
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.025em] text-[hsl(var(--surface-dark))]">
            Common questions, clear answers.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-[hsl(var(--border))] py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[0.92rem] font-semibold text-[hsl(var(--surface-dark))]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[hsl(var(--primary))] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 pb-2 text-[0.82rem] font-light leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
