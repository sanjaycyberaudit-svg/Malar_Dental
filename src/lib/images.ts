/**
 * Centralised image map. People-featuring photos are locally bundled,
 * AI-generated to represent Salem / Tamil Nadu patients and staff. The two
 * non-people shots (clinic interior, implant model) stay on Unsplash. The
 * <Photo /> component degrades to a teal gradient if any image fails to load.
 */
import heroImg from "../assets/img-hero.webp";
import teamImg from "../assets/img-team.webp";
import photoCtaImg from "../assets/img-photo-cta.webp";

import svcCheckup from "../assets/svc-checkup.webp";
import svcCleaning from "../assets/svc-cleaning.webp";
import svcWhitening from "../assets/svc-whitening.webp";
import svcEmergency from "../assets/svc-emergency.webp";
import serviceVeneers from "../assets/service-veneers.webp";

import procBook from "../assets/proc-book.webp";
import procWelcome from "../assets/proc-welcome.webp";
import procAssessment from "../assets/proc-assessment.webp";
import procTreatment from "../assets/proc-treatment.webp";

import reviewKarthika from "../assets/review-karthika.webp";
import reviewMurugesan from "../assets/review-murugesan.webp";
import reviewLakshmi from "../assets/review-lakshmi.webp";

const u = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  hero: heroImg,
  clinicInterior: u("1629909613654-28e377c37b09", 640, 480),
  team: teamImg,
  photoCta: photoCtaImg,

  services: {
    checkup: svcCheckup,
    cleaning: svcCleaning,
    whitening: svcWhitening,
    implants: u("1559757175-5700dde675bc", 800, 600),
    veneers: serviceVeneers,
    emergency: svcEmergency,
  },

  process: {
    book: procBook,
    welcome: procWelcome,
    assessment: procAssessment,
    treatment: procTreatment,
  },

  reviews: {
    karthika: reviewKarthika,
    murugesan: reviewMurugesan,
    lakshmi: reviewLakshmi,
  },
};
