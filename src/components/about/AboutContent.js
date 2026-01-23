import React from "react";

const AboutContent = () => {
  return (
    <section className="bg-[#fdf9f2]">

      {/* OUR IDENTITY */}
      <div className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand mb-3">
            Our Identity
          </h2>
          <p className="text-sm text-textDark/60 mb-8">
            2 Timothy 3:16–17 · John 17:17 · Acts 2:42
          </p>
          <p className="text-lg leading-relaxed text-textDark/90">
            Adullam Revival Church exists as a people being formed by the Word of
            God. We are committed to Scripture as the final authority for faith
            and life, and we seek to live out the Gospel through obedience,
            prayer, and reverent worship.
          </p>
        </div>
      </div>

      {/* OUR CONVICTION */}
      <div className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand mb-3">
            Our Conviction
          </h2>
          <p className="text-sm text-textDark/60 mb-8">
            Joel 2:12–13 · Psalm 51:10–17 · 2 Chronicles 7:14
          </p>
          <p className="text-lg leading-relaxed text-textDark/90 max-w-3xl mx-auto">
            We believe that true revival does not begin with outward activity,
            but with inward consecration. Revival begins in the heart, shapes the
            home, and is expressed through transformed lives that honour God in
            word and conduct.
          </p>
        </div>
      </div>

      {/* IMAGE + QUOTE ANCHOR */}
      <section
        className="relative h-[420px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/bible-study.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand/75"></div>

        {/* Quote */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <blockquote className="max-w-3xl text-center text-textLight font-serif text-2xl md:text-3xl font-light leading-snug">
            “Revival is not an event we attend, but a work God performs in
            yielded hearts.”
            <span className="block mt-6 text-sm opacity-70 font-sans tracking-wide">
              Ezekiel 36:26–27 · Philippians 2:12–13
            </span>
          </blockquote>
        </div>
      </section>

      {/* OUR PRACTICE */}
      <div className="py-28 px-6 bg-[#fdf9f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand mb-3">
            Our Practice
          </h2>
          <p className="text-sm text-textDark/60 mb-8">
            Matthew 4:4 · Acts 13:2–3 · Hebrews 10:24–25
          </p>
          <p className="text-lg leading-relaxed text-textDark/90">
            Our life together is marked by biblical teaching, earnest prayer,
            fasting, and intentional fellowship. We gather regularly to seek the
            presence of God, to grow in sound doctrine, and to encourage one
            another in faithful Christian living.
          </p>
        </div>
      </div>

      {/* OUR EXPRESSION */}
      <div className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand mb-3">
            Our Expression
          </h2>
          <p className="text-sm text-textDark/60 mb-8">
            James 1:22 · James 2:14–17 · Matthew 25:35–40
          </p>
          <p className="text-lg leading-relaxed text-textDark/90">
            We believe that the Gospel must be both proclaimed and practiced.
            This conviction is expressed through acts of compassion and service,
            including our monthly soup kitchen, as we seek to love our community
            with dignity, humility, and grace.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutContent;
