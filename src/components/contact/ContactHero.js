import React from "react";

const ContactHero = () => {
  return (
    <section className="relative py-28 px-6 bg-[#583030] text-[#f5f5ed] text-center overflow-hidden">
      {/* Subtle gradient layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4f2d2d] to-[#583030] opacity-80 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Contact Us
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#f5f5ed]/85">
          Reach out — we would love to hear from you.
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
            d="M0,128 C480,0 960,256 1440,128 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
