import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-24 px-6 bg-[#fdf9f2]">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#583030]">
          Get In Touch
        </h2>
        <p className="mt-4 text-[#3f2323] text-lg opacity-85">
          Whether you have a question, need prayer, or would like to visit, you
          are welcome to reach out.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* CONTACT DETAILS */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-[#583030] mb-2">
              Worship With Us
            </h3>
            <p className="text-[#3f2323] opacity-85">
              Sundays at 3:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#583030] mb-2">
              Church Address
            </h3>
            <p className="text-[#3f2323] opacity-85 leading-relaxed">
              37 Springvale Scouts<br />
              Springbok Street<br />
              Wierdapark, Centurion
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#583030] mb-2">
              Contact & WhatsApp
            </h3>
            <p className="text-[#3f2323] opacity-85 mb-4">
              073&nbsp;511&nbsp;7407
            </p>

            {/* WhatsApp Widget */}
            <a
              href="https://wa.me/27735117407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
            >
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-[#f5f5ed] p-10 rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.03)] border border-[#583030]/10">
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
      </div>
    </section>
  );
};

export default ContactForm;
