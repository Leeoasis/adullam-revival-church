import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-[#fdf9f2] relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#583030] leading-tight">
          Who We Are
        </h2>

        <p className="mt-6 text-[#3f2323] text-lg md:text-xl leading-relaxed opacity-90">
          Adullam Revival Centre exists to nurture spiritual growth, deepen
          faith, and equip believers for service through biblical teaching,
          prayer, and community.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="h-[2px] w-24 bg-[#583030]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
