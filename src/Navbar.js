import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bgLight text-brand border-b border-brand border-opacity-15 font-serif">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* LOGO / BRAND */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/assets/adullam-logo.jpg"
                alt="Adullam Revival Centre"
                className="h-20 w-auto rounded-full"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12 uppercase tracking-[0.08em] font-normal">
            <li>
              <Link
                to="/"
                className="hover:text-textDark hover:underline transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-textDark hover:underline transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ministries"
                className="hover:text-textDark hover:underline transition duration-300 ease-in-out"
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-textDark hover:underline transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-2 border border-brand text-brand rounded-full hover:bg-brand hover:text-bgLight transition duration-300 ease-in-out"
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
          <div className="md:hidden bg-bgLight border-t border-brand border-opacity-15">
            <ul className="flex flex-col px-6 py-6 space-y-4 uppercase tracking-[0.08em] font-normal">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-textDark transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-textDark transition duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-textDark transition duration-300 ease-in-out"
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-textDark transition duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>

              <li className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-2 border border-brand text-brand rounded-full hover:bg-brand hover:text-bgLight transition duration-300 ease-in-out"
                >
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
