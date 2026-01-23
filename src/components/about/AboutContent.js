// import React from "react";

// const AboutContent = () => {
//   return (
//     <section className="py-20 px-6 bg-bgLight">
//       <div className="max-w-5xl mx-auto space-y-8 text-textDark leading-relaxed">
//         <p>
//           Adullam Revival Centre exists to cultivate a deep, Scripture-anchored
//           relationship with God. Our focus is not entertainment, but
//           transformation through truth, prayer, and discipleship.
//         </p>

//         <p>
//           We believe revival begins in the heart, flows into the home, and
//           expresses itself in obedient living and service to others.
//         </p>

//         <p>
//           Our gatherings emphasize biblical teaching, reverent worship, and
//           intentional community.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutContent;
import React from "react";

const paragraphs = [
  "Adullam Revival Centre exists to cultivate a deep, Scripture-anchored relationship with God. Our focus is not entertainment, but transformation through truth, prayer, and discipleship.",
  "We believe revival begins in the heart, flows into the home, and expresses itself in obedient living and service to others.",
  "Our gatherings emphasize biblical teaching, reverent worship, and intentional community.",
];

const AboutContent = () => {
  return (
    <section className="py-20 px-6 bg-[#fdf9f2]">
      <div className="max-w-5xl mx-auto space-y-12">
        {paragraphs.map((para, idx) => (
          <div
            key={idx}
            className="p-8 rounded-xl bg-[#f5f5ed] border border-[#583030]/10 shadow-[0_2px_5px_rgba(0,0,0,0.03)]"
          >
            <p className="text-[#3f2323] text-lg md:text-xl leading-relaxed">
              {para}
            </p>
          </div>
        ))}

        {/* Optional accent line at the end */}
        <div className="flex justify-center">
          <div className="h-[2px] w-24 bg-[#583030]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
