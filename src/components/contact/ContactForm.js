import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-24 px-6 bg-[#fdf9f2]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#583030]">
          Get In Touch
        </h2>
        <p className="mt-4 text-[#3f2323] text-lg opacity-85">
          We’re here to listen, pray with you, and answer any questions you may
          have.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-[#f5f5ed] p-10 rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.03)] border border-[#583030]/10">
        <form className="space-y-8 text-left">
          <div>
            <label className="block text-sm uppercase tracking-wide font-medium text-[#583030]/90">
              Name
            </label>
            <input
              type="text"
              className="mt-2 w-full p-3 rounded-lg border border-[#583030]/20 bg-[#fdf9f2] focus:ring-[#583030] focus:border-[#583030] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide font-medium text-[#583030]/90">
              Email
            </label>
            <input
              type="email"
              className="mt-2 w-full p-3 rounded-lg border border-[#583030]/20 bg-[#fdf9f2] focus:ring-[#583030] focus:border-[#583030] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide font-medium text-[#583030]/90">
              Message
            </label>
            <textarea
              rows="5"
              className="mt-2 w-full p-3 rounded-lg border border-[#583030]/20 bg-[#fdf9f2] focus:ring-[#583030] focus:border-[#583030] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#583030] hover:bg-[#4f2d2d] text-[#f5f5ed] rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
