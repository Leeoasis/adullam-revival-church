import React from "react";
import HeroSection from "../components/homeComponents/hero";
import AboutSection from "../components/homeComponents/AboutSection";
import ServicesSection from "../components/homeComponents/ServicesSection";
import CallToAction from "../components/homeComponents/CallToAction";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CallToAction />
        </div>
    )
};

export default HomePage;
