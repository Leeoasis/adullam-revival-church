import React from "react";

const SoupKitchenSection = () => {
  const images = [
    "/assets/images/soup2.png",
    "/assets/images/soup3.png",
    "/assets/images/soup4.png",
    "/assets/images/soup5.png",
  ];

  return (
    <section className="py-28 px-6 bg-[#fdf9f2]">
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-[1fr_1.1fr] items-center">
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-40 md:h-44 rounded-lg overflow-hidden bg-gray-200"
            >
              <img
                src={src}
                alt="Community soup kitchen outreach"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand">
            Living the Gospel Through Service
          </h2>

          <div className="w-16 h-[2px] bg-brand/30 my-6"></div>

          <p className="text-textDark text-lg leading-relaxed opacity-85">
            Faith expressed only in words is incomplete. As part of our
            commitment to living out the Gospel, Adullam Revival Church hosts a
            soup kitchen every first weekend of the month, serving our community
            with compassion, dignity, and love.
          </p>

          <p className="mt-6 text-textDark text-lg leading-relaxed opacity-85">
            This ministry reflects our conviction that the Gospel must be both
            proclaimed and practiced.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoupKitchenSection;
