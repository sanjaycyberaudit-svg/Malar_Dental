import { Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { site } from "../../lib/site";
import { images } from "../../lib/images";

export function PhotoCta() {
  return (
    <section className="relative flex h-[340px] items-center overflow-hidden md:h-[300px]">
      <div className="absolute inset-0 z-0">
        <Photo src={images.photoCta} alt="Happy dental patient smiling" className="object-center" />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(6,12,20,0.90)] via-[rgba(6,12,20,0.65)] to-[rgba(6,12,20,0.15)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-8 px-6 md:px-[60px]">
        <div>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold tracking-[-0.025em] text-white">
            Ready for your best smile?
          </h2>
          <p className="mt-2 text-[0.88rem] font-light text-white/60">
            Same-day appointments available. No waiting lists.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="#contact" className="h-12 px-9">
            Book Appointment
          </Button>
          <Button href={`tel:${site.phoneTel}`} variant="ghost" className="h-12 px-8">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
