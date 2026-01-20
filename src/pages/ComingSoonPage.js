import React from "react";

const ComingSoonPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="max-w-3xl w-full text-center text-white">
        
        {/* LOGO / TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Website <span className="text-orange-400">Coming Soon</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          We are currently working behind the scenes to build something
          intentional, meaningful, and well-structured.
        </p>

        <p className="mt-4 text-gray-400">
          Thank you for your patience.
        </p>

        {/* STATUS CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-orange-400 font-semibold">Design</p>
            <p className="mt-1 text-sm text-gray-400">In progress</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-orange-400 font-semibold">Content</p>
            <p className="mt-1 text-sm text-gray-400">In preparation</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-orange-400 font-semibold">Development</p>
            <p className="mt-1 text-sm text-gray-400">Ongoing</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@adullamrevival.org"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
          >
            Contact Us
          </a>

          <span className="px-8 py-3 border border-orange-400 text-orange-400 rounded-lg font-semibold cursor-default">
            Launching Soon
          </span>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Adullam Revival Centre
        </p>
      </div>
    </main>
  );
};

export default ComingSoonPage;
