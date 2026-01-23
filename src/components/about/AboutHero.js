import React from "react";

const AboutHero = () => {
  return (
    <section className="relative py-28 px-6 bg-brand text-textLight text-center overflow-hidden">
      {/* Soft gradient texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3e2222]/40 to-transparent pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-6 font-sans">
          About Us
        </p>

        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight">
          Adullam Revival Church
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#f5f5ed]/85 leading-relaxed">
          A Word-anchored Christian fellowship devoted to spiritual formation,
          prayer, consecration, and faithful obedience to God.
        </p>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fdf9f2"
            fillOpacity="1"
            d="M0,96 C360,0 1080,192 1440,96 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
