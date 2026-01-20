import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-orange-400">Adullam Revival Centre</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          A place of restoration, discipleship, and spiritual renewal.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
            Join Us
          </button>
          <button className="px-6 py-3 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
