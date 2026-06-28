import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProgressSteps } from "./components/sections/ProgressSteps";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Process } from "./components/sections/Process";
import { Testimonials } from "./components/sections/Testimonials";
import { PhotoCta } from "./components/sections/PhotoCta";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Footer } from "./components/sections/Footer";
import { FloatingCall } from "./components/ui/FloatingCall";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--background))]">
      <Navbar />
      <main>
        <Hero />
        <ProgressSteps />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <PhotoCta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
