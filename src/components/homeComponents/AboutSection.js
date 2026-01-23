import React from "react";

const AboutSection = () => {
  return (
    <section className="py-28 px-6 bg-[#fdf9f2]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-brand">
          Who We Are
        </h2>

        <p className="mt-10 text-textDark text-lg leading-relaxed opacity-90">
          Adullam Revival Church is a Word-anchored Christian fellowship devoted
          to spiritual formation and renewal. Our life together is shaped by a
          reverence for Scripture, a culture of prayer and fasting, and a
          commitment to walking in obedience to God’s Word.
        </p>

        <p className="mt-8 text-textDark text-lg leading-relaxed opacity-85">
          We believe true revival begins with consecration — hearts yielded to
          God, minds renewed by truth, and lives aligned with His will. Our
          gatherings are marked by sound doctrine, earnest prayer, and a shared
          hunger for God’s presence.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
