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

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          What We Do
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-500">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
