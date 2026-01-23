import React from "react";
import HeroSection from "../components/homeComponents/hero";
import AboutSection from "../components/homeComponents/AboutSection";
import ServicesSection from "../components/homeComponents/ServicesSection";
import CallToAction from "../components/homeComponents/CallToAction";
import TestimonialsSection from "../components/homeComponents/TestimonialsSection";
import LocationSection from "../components/homeComponents/LocationSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <CallToAction />
            <LocationSection />
        </div>
    )
};

export default HomePage;
