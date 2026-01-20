import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO / BRAND */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-orange-400"
        >
          Adullam Revival Centre
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/ministries" className="hover:text-orange-400 transition">
              Ministries
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-semibold transition"
          >
            Visit Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block hover:text-orange-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ministries"
                onClick={() => setIsOpen(false)}
                className="block hover:text-orange-400"
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block hover:text-orange-400"
              >
                Contact
              </Link>
            </li>

            <li className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
