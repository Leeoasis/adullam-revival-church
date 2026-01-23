import React from "react";

const GatheringsSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-brand mb-16">
          Our Gatherings & Weekly Rhythm
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Sunday Worship Service",
              desc: "Our central weekly gathering for worship, teaching, and fellowship.",
              time: "Sundays · 3:00 PM",
            },
            {
              title: "Monday Consecration Day",
              desc: "A dedicated time of prayer and fasting, focused on humility, intercession, and spiritual renewal.",
              time: "Online · 18:00",
            },
            {
              title: "Wednesday Bible Study",
              desc: "Structured teaching and careful engagement with Scripture to grow in understanding and sound doctrine.",
              time: "Online · 19:30",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#fdf9f2] p-10 rounded-xl border border-brand/10"
            >
              <h3 className="font-serif text-2xl font-light text-brand mb-4">
                {item.title}
              </h3>

              <p className="text-textDark text-base leading-relaxed opacity-80">
                {item.desc}
              </p>

              <p className="mt-8 text-sm uppercase tracking-wide text-brand font-medium">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatheringsSection;
