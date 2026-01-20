import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-gray-400 text-center">
      <p>
        © {new Date().getFullYear()} Adullam Revival Centre. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
