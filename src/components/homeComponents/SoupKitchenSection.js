import React from "react";

const SoupKitchenSection = () => {
  return (
    <section className="py-28 px-6 bg-[#fdf9f2]">
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-[1fr_1.1fr] items-center">
        <div className="grid grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-200 h-40 rounded-lg"
            />
          ))}
        </div>

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
