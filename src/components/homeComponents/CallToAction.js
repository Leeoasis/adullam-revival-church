import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-orange-500 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Be Part of the Revival
        </h2>

        <p className="mt-6 text-lg">
          Join us as we seek God earnestly and grow together in faith.
        </p>

        <button className="mt-8 px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
