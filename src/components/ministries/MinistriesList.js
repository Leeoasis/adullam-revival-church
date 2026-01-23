import React from "react";

const ministries = [
  {
    title: "Bible Teaching",
    description:
      "Systematic, Christ-centered exposition of Scripture that strengthens believers in truth.",
  },
  {
    title: "Prayer & Intercession",
    description:
      "Focused prayer gatherings seeking God earnestly for revival and transformation.",
  },
  {
    title: "Discipleship",
    description:
      "Intentional spiritual formation and mentorship that nurtures mature followers of Christ.",
  },
  {
    title: "Youth Ministry",
    description:
      "Raising a generation passionate for God through mentorship, fellowship, and service.",
  },
  {
    title: "Children’s Ministry",
    description:
      "Teaching young hearts the Word of God in a loving, engaging, and creative environment.",
  },
  {
    title: "Worship & Music",
    description:
      "Leading the congregation into God’s presence through reverent and Spirit-led worship.",
  },
  {
    title: "Outreach & Evangelism",
    description:
      "Sharing the gospel and demonstrating Christ’s love in our communities and beyond.",
  },
  {
    title: "Hospitality Ministry",
    description:
      "Creating a welcoming atmosphere and serving others with grace and warmth.",
  },
  {
    title: "Media & Communications",
    description:
      "Using digital platforms and creative media to share the message of hope and faith.",
  },
];

const MinistriesList = () => {
  return (
    <section className="py-24 px-6 bg-[#fdf9f2]">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className="bg-[#f5f5ed] p-8 rounded-xl border border-[#583030]/10 shadow-[0_2px_5px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform duration-300 text-center"
          >
            {/* Optional accent line */}
            <div className="mx-auto mb-4 h-[2px] w-16 bg-[#583030]/30 rounded-full"></div>

            <h3 className="text-xl font-semibold text-[#583030] mb-2">
              {ministry.title}
            </h3>
            <p className="text-[#3f2323] opacity-85 leading-relaxed">
              {ministry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinistriesList;
