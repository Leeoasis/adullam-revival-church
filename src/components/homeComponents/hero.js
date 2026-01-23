import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center px-6 py-10 bg-[#f5f5ed]">
      {/* Inner dark hero card */}
      <div className="relative w-full max-w-6xl">
        <div
          className="rounded-xl px-8 py-12 relative z-10 mx-auto"
          style={{
            background: "linear-gradient(to bottom, #583030 0%, #4f2d2d 100%)",
          }}
        >
          {/* Overlay layer */}
          <div className="text-center bg-[#3f2323]/60 px-8 py-12 rounded-lg">
            <h1 className="font-serif leading-snug">
              <span className="block text-base md:text-lg tracking-[0.15em] text-[#f5f5ed]/80 uppercase mb-4">
                Welcome to
              </span>

              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-[#f5f5ed]">
                Adullam Revival
              </span>

              <span className="block mt-2 text-2xl md:text-3xl text-[#f5f5ed]/85">
                Centre
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#f5f5ed]/75">
              A place of restoration, discipleship, and spiritual renewal.
            </p>

            <div className="mt-10">
              <button className="px-8 py-3 border border-[#f5f5ed]/80 text-[#f5f5ed] rounded-md font-sans transition-colors duration-300 hover:bg-[#f5f5ed]/10">
                Join Us
              </button>

              <p className="mt-3 text-sm text-[#f5f5ed]/60">Sundays at 10 AM</p>
            </div>
          </div>
        </div>

        {/* SVG Curve — only under the maroon card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl overflow-hidden leading-[0] h-24">
          <svg
            className="relative block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cardCurve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f2d2d" stopOpacity="1" />
                <stop offset="100%" stopColor="#fdf9f2" stopOpacity="1" />
              </linearGradient>
            </defs>

            <path
              fill="url(#cardCurve)"
              d="M0,64 C360,128 1080,0 1440,64 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
