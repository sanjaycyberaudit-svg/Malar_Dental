/**
 * Centralised photo URLs (Unsplash). Every image is requested with sane
 * crop/quality params; the <Photo /> component degrades to a teal gradient
 * if any URL ever fails to load.
 */
import reviewKarthika from "../assets/review-karthika.png";
import reviewMurugesan from "../assets/review-murugesan.png";
import reviewLakshmi from "../assets/review-lakshmi.png";
import serviceVeneers from "../assets/service-veneers.jpg";

const u = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  hero: u("1606811841689-23dfddce3e95", 1920, 1280),
  clinicInterior: u("1629909613654-28e377c37b09", 640, 480),
  doctor: u("1612349317150-faec5d80b13a", 200, 200),
  team: u("1588776814546-1ffcf47267a5", 1000, 1100),
  photoCta: u("1598256989800-fe5f95da9787", 1920, 900),

  services: {
    checkup: u("1606811971618-4486d14f3f99", 800, 600),
    cleaning: u("1609840114035-3c981b782dfe", 800, 600),
    whitening: u("1581585504108-7e6e0d0b6e8f", 800, 600),
    implants: u("1559757175-5700dde675bc", 800, 600),
    veneers: serviceVeneers,
    emergency: u("1631549916768-4119b2e5f926", 800, 600),
  },

  process: {
    book: u("1556761175-b413da4baf72", 600, 500),
    welcome: u("1631217868264-e5b90bb7e133", 600, 500),
    assessment: u("1612277795421-9bc7706a4a34", 600, 500),
    treatment: u("1588776814546-1ffcf47267a5", 600, 500),
  },

  reviews: {
    karthika: reviewKarthika,
    murugesan: reviewMurugesan,
    lakshmi: reviewLakshmi,
  },
};
