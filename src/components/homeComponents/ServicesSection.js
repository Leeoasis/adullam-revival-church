import React from "react";

const services = [
  {
    title: "Bible Study",
    description: "Deep, systematic study of Scripture rooted in truth.",
  },
  {
    title: "Prayer & Revival",
    description: "Focused prayer sessions fostering spiritual renewal.",
  },
  {
    title: "Discipleship",
    description: "Equipping believers to live Christ-centered lives.",
  },
];

const ServicesSection = () => (
  <section
    className="py-28 px-6 bg-contain bg-center relative"
    style={{
      backgroundImage: "url('/assets/church.jpg')",
    }}
  >
    {/* Overlay for tonal consistency */}
    <div className="absolute inset-0 bg-[#583030]/50"></div>

    <div className="relative max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#f5f5ed] mb-12">
        What We Do
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white p-8 rounded-lg border border-[#583030]/10 transition-transform duration-300 shadow-[0_2px_5px_rgba(0,0,0,0.03)] 
              ${idx % 2 === 0 ? "md:mt-0" : "md:mt-4"} 
            hover:scale-105`}
          >
            <h3 className="text-xl font-semibold text-[#583030] mb-2">
              {service.title}
            </h3>
            <p className="text-[#3f2323] opacity-80 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
