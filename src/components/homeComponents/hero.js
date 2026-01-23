import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] px-6 py-28 overflow-hidden flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/hero.png"
          alt="Congregation gathered in worship and prayer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3e2222]/70 via-[#583030]/75 to-[#4a2929]/85" />

      {/* Gentle vignette */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-textLight">
        
        <p className="text-xs tracking-[0.35em] uppercase opacity-60 mb-6 font-sans">
          Welcome to
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15]">
          Adullam Revival Church
        </h1>

        <div className="w-20 h-px bg-textLight/40 mx-auto my-10" />

        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-textLight/90">
          A people formed by the Word, refined through consecration, and awakened
          to revival. We are committed to biblical teaching, prayer, fasting, and
          living out our faith with obedience and compassion.
        </p>

        <div className="mt-14">
          <p className="text-lg font-medium">
            Sundays at 3:00 PM
          </p>
          <p className="mt-2 text-sm text-textLight/75">
            37 Springvale Scouts, Springbok Street, Wierdapark, Centurion
          </p>
        </div>

        {/* CTA – FIXED */}
        <div className="mt-14">
          <Link
            to="/contact"
            className="inline-block px-14 py-4 border border-textLight/70 rounded-md font-medium transition-all duration-300 hover:bg-textLight hover:text-brand"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
