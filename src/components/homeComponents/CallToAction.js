import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-brand">
      <div className="max-w-4xl mx-auto text-center text-textLight">
        <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug">
          Walk With Us in the Pursuit of God
        </h2>

        <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-90">
          Adullam Revival Church is a community devoted to the Word, prayer,
          consecration, and faithful obedience.
        </p>

        <p className="mt-6 text-lg leading-relaxed opacity-85">
          Join us this Sunday, connect during the week, and walk alongside a
          people hungry for truth and revival.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Internal SPA navigation */}
          <Link
            to="/contact"
            className="px-10 py-4 bg-textLight text-brand rounded-md font-medium transition-transform duration-300 hover:scale-105"
          >
            Plan Your Visit
          </Link>

          {/* External action must remain <a> */}
          <a
            href="tel:0735117407"
            className="px-10 py-4 border border-textLight/70 rounded-md font-medium transition-colors duration-300 hover:bg-textLight/10"
          >
            Contact the Church
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
