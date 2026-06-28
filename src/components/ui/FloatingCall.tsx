import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { site } from "../../lib/site";

/** Fixed bottom-right button that places a call directly via tel:. */
export function FloatingCall() {
  return (
    <motion.a
      href={`tel:${site.phoneTel}`}
      aria-label={`Call ${site.brand} for an appointment`}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[hsl(var(--primary))] px-5 py-3.5 text-white shadow-[0_10px_30px_rgba(11,184,184,0.45)] md:bottom-7 md:right-7"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[hsl(var(--primary))]/60" />
      <Phone className="h-5 w-5 shrink-0" />
      <span className="hidden text-[0.82rem] font-semibold sm:inline">Book Appointment</span>
    </motion.a>
  );
}
