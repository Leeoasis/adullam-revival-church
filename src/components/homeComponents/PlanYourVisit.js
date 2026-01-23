import React from "react";

const PlanYourVisit = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand">
          Plan Your Visit
        </h2>

        <p className="mt-8 text-textDark text-lg leading-relaxed opacity-85">
          We would love to welcome you in person. Join us for worship and the
          ministry of the Word this Sunday.
        </p>

        <div className="mt-10 text-textDark text-lg space-y-3">
          <p>
            <strong>Sunday Service:</strong> 3:00 PM
          </p>
          <p>
            37 Springvale Scouts, Springbok Street, Wierdapark, Centurion
          </p>
          <p>
            <strong>Contact:</strong> 073 511 7407
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisit;
