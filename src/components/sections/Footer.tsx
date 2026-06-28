import { Share2, Camera, Star, MessageCircle, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { ToothIcon } from "../ui/ToothIcon";
import { site } from "../../lib/site";

const servicesLinks = [
  "Dental Check-Up",
  "Teeth Cleaning",
  "Whitening",
  "Implants",
  "Veneers",
  "Emergency Care",
];
const clinicLinks = ["About Us", "Meet the Team", "Patient Reviews", "Blog", "Careers"];
const socials = [
  { icon: Share2, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: Star, label: "Google" },
  { icon: MessageCircle, label: "Yelp" },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--surface-dark))] px-6 py-16 md:px-[60px]">
      <Container>
        <div className="mb-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-white/25 bg-white/15">
                <ToothIcon className="h-4 w-4 text-white" />
              </span>
              <span className="text-[1.1rem] font-extrabold tracking-[-0.01em] text-white">
                {site.brand}
              </span>
            </div>
            <p className="mt-1 text-[0.7rem] font-light tracking-[0.1em] text-white/40">
              {site.tagline}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-5 block text-sm font-semibold text-white transition-colors hover:text-[hsl(var(--primary))]"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm font-light text-white/50 transition-colors hover:text-white"
            >
              {site.email}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                site.address.mapQuery,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex items-start gap-2.5 text-sm font-light text-white/50 transition-colors hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--primary))]" />
              <span className="not-italic leading-relaxed">
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
              Services
            </p>
            {servicesLinks.map((link) => (
              <a
                key={link}
                href="#services"
                className="mb-3 block text-sm text-white/55 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Clinic */}
          <div>
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
              Clinic
            </p>
            {clinicLinks.map((link) => (
              <a
                key={link}
                href="#about"
                className="mb-3 block text-sm text-white/55 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
              Opening Hours
            </p>
            <p className="mb-2 text-sm text-white/55">Mon – Fri: 8:00am – 7:00pm</p>
            <p className="mb-2 text-sm text-white/55">Saturday: 9:00am – 5:00pm</p>
            <p className="mb-2 text-sm text-white/55">Sunday: Emergency only</p>
            <p className="mt-2 text-sm text-white/70">24/7 Emergency: {site.phone}</p>
            <div className="mt-5 flex gap-5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/30 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs font-light text-white/30">
            © 2026 {site.brand} Clinic. All rights reserved.
          </p>
          <p className="text-xs font-light text-white/30">
            <a href="#" className="transition-colors hover:text-white/60">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="#" className="transition-colors hover:text-white/60">
              Terms of Service
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
