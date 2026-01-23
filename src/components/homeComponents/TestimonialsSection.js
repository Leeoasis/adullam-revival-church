import React from "react";

const testimonials = [
  {
    story:
      "When I first joined Adullam Revival Centre, I was spiritually dry and searching for direction. Through consistent teaching, prayer, and genuine fellowship, my faith has been restored. I’ve grown not just in knowledge of the Word, but also in love for God and people.",
    author: "John D",
  },
  {
    story:
      "Adullam Revival Centre has been a place of healing and renewal for me. The teachings are practical and rooted in Scripture, and the community truly lives out the love of Christ. Every week, I leave encouraged and strengthened to face life with faith.",
    author: "John D",
  },
  {
    story:
      "Being part of this ministry has transformed my walk with God. The atmosphere of worship, sound doctrine, and sincere fellowship has helped me rediscover purpose and spiritual discipline. Adullam truly feels like a home where faith is built.",
    author: "John D",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 px-6 bg-[#fdf9f2]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#583030]">
        Testimonies
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-lg border border-[#583030]/10 shadow-[0_2px_5px_rgba(0,0,0,0.03)]"
          >
            <p className="text-[#3f2323] opacity-85 leading-relaxed">
              {t.story}
            </p>
            <p className="mt-4 font-semibold text-[#583030]">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;