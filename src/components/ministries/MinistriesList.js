import React from "react";

const ministries = [
  {
    title: "Bible Teaching",
    description:
      "Systematic, Christ-centered exposition of Scripture.",
  },
  {
    title: "Prayer & Intercession",
    description:
      "Focused prayer gatherings seeking God earnestly.",
  },
  {
    title: "Discipleship",
    description:
      "Intentional spiritual formation and mentorship.",
  },
];

const MinistriesList = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-orange-500">
              {ministry.title}
            </h3>
            <p className="mt-4 text-gray-600">
              {ministry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinistriesList;
