// import React from "react";

// const AboutHero = () => {
//   return (
//     <section className="py-24 bg-brand text-textLight text-center px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           About <span className="text-brand">Adullam Revival Centre</span>
//         </h1>
//         <p className="mt-6 text-lg text-bgLight">
//           A place of spiritual formation, prayer, and biblical faithfulness.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative py-28 px-6 bg-brand text-textLight text-center overflow-hidden">
      {/* Optional subtle texture or gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#583030]/20 to-transparent pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          About <span className="text-[#f5f5ed]">Adullam Revival Centre</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#f5f5ed]/80 leading-relaxed">
          A place of spiritual formation, prayer, and biblical faithfulness.
        </p>
      </div>

      {/* Bottom curve for transition to content */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="block w-full h-24"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#fdf9f2"
      fillOpacity="1"
      d="M0,96 C360,0 1080,192 1440,96 L1440,320 L0,320 Z"
    ></path>
  </svg>
</div>
    </section>
  );
};

export default AboutHero;

