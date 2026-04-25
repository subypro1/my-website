import React from "react";
import HeroSection from "../components/home/HeroSection";
import DualPathSection from "../components/home/DualPathSection";
import QuickLinksSection from "../components/home/QuickLinksSection";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DualPathSection />
      <QuickLinksSection />
      <Footer />
    </div>
  );
}