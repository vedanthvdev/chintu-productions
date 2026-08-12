import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FilmsSection } from "@/components/sections/FilmsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FilmsSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
