// import React from "react";

// const CallToAction = () => {
//   return (
//     <section className="py-20 px-6 bg-brand text-textLight text-center">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Be Part of the Revival
//         </h2>

//         <p className="mt-6 text-lg">
//           Join us as we seek God earnestly and grow together in faith.
//         </p>

//         <button className="mt-8 px-8 py-4 bg-brand text-textLight rounded-lg font-semibold hover:bg-hoverBrand transition">
//           Contact Us
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
import React from "react";

const CTASection = () => (
  <section className="py-20 px-6 bg-[#fdf9f2] relative">
    <div className="max-w-4xl mx-auto text-center bg-[#583030]/5 rounded-xl px-10 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#583030] leading-snug">
        Be Part of The Revival
      </h2>
      <p className="mt-6 text-[#3f2323] text-lg md:text-xl leading-relaxed opacity-85">
        Join us as we seek God earnestly and grow together in faith.
      </p>
      <button className="mt-8 px-10 py-4 bg-[#583030] text-[#f5f5ed] rounded-md font-sans transition-transform duration-300 hover:scale-105 hover:bg-[#4f2d2d]">
        Get Involved
      </button>
    </div>
  </section>
);

export default CTASection;

