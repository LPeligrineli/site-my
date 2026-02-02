"use client";

import AboutSection from "@/components/sections/AboutSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IdentificationSection from "@/components/sections/IdentificationSection";
import TrustSection from "@/components/sections/TrustSection";
import WhoIsForSection from "@/components/sections/WhoIsForSection"; 

export default function Home() {

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IdentificationSection />
      <WhoIsForSection />
      <AboutSection />
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
