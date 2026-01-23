import React from "react";
import HeroSection from "../components/homeComponents/hero";
import AboutSection from "../components/homeComponents/AboutSection";
import GatheringsSection from "../components/homeComponents/GatheringsSection";
import SoupKitchenSection from "../components/homeComponents/SoupKitchenSection";
import PlanYourVisit from "../components/homeComponents/PlanYourVisit";
import CTASection from "../components/homeComponents/CallToAction";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GatheringsSection />
      <SoupKitchenSection />
      <PlanYourVisit />
      <CTASection />
    </div>
  );
};

export default HomePage;
