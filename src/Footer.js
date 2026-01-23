// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="py-10 bg-brand text-bgLight text-center">
//       <p>
//         © {new Date().getFullYear()} Adullam Revival Centre. All rights
//         reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => (
  <footer className="bg-[#583030] text-[#f5f5ed] py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Adullam Revival Centre. All rights
        reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-[#f5f5ed] hover:text-[#fdf9f2] transition">
          Facebook
        </a>
        <a href="#" className="text-[#f5f5ed] hover:text-[#fdf9f2] transition">
          Instagram
        </a>
        <a href="#" className="text-[#f5f5ed] hover:text-[#fdf9f2] transition">
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

