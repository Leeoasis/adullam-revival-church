import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-28 px-6 bg-[#fdf9f2]">
      
      {/* PAGE INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand">
          Get In Touch
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-textDark/85">
          Whether you have a question, need prayer, or would like to visit,
          we would love to hear from you.
        </p>
      </div>

      {/* CONTACT DETAILS + FORM */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* CONTACT DETAILS */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-brand mb-2">
              Worship With Us
            </h3>
            <p className="text-textDark/85">
              Sundays at 3:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brand mb-2">
              Church Address
            </h3>
            <p className="text-textDark/85 leading-relaxed">
              37 Springvale Scouts<br />
              Springbok Street<br />
              Wierdapark, Centurion
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brand mb-2">
              Contact & WhatsApp
            </h3>
            <p className="text-textDark/85 mb-5">
              073&nbsp;511&nbsp;7407
            </p>

            <a
              href="https://wa.me/27735117407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium shadow hover:scale-105 transition-transform"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-[#f5f5ed] p-10 rounded-2xl shadow border border-brand/10">
          <form className="space-y-8 text-left">
            <div>
              <label className="block text-sm uppercase tracking-wide font-medium text-brand/80">
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full p-3 rounded-lg border bg-[#fdf9f2] focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide font-medium text-brand/80">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full p-3 rounded-lg border bg-[#fdf9f2] focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide font-medium text-brand/80">
                Message
              </label>
              <textarea
                rows="5"
                className="mt-2 w-full p-3 rounded-lg border bg-[#fdf9f2] focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-brand text-textLight rounded-lg font-medium transition hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* PARTNER WITH US */}
      <section className="mt-40">
        <div className="max-w-6xl mx-auto bg-brand/5 rounded-3xl py-24 px-6 md:px-16 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand">
            Partner With Us
          </h2>

          <div className="w-20 h-[1px] bg-brand/40 mx-auto my-8" />

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-textDark/85 mb-16">
            As the Lord leads, we invite you to partner with us in stewarding
            the work He is establishing through Adullam Revival Church.
            Giving is voluntary, prayerful, and an act of worship.
          </p>

          {/* BANKING DETAILS CARD */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-brand/10 p-10 text-left">

            <p className="text-xs uppercase tracking-[0.25em] text-brand/60 mb-6">
              Banking Details
            </p>

            <ul className="space-y-4 text-textDark">
              <li><strong>Bank Name:</strong> Capitec Bank</li>
              <li><strong>Account Name:</strong> Adullam Revival Church</li>
              <li><strong>Account Type:</strong> Business Account</li>
              <li><strong>Account Number:</strong> 1054&nbsp;177&nbsp;589</li>
              <li><strong>Branch Code:</strong> 450105</li>
            </ul>

            <p className="mt-8 text-sm italic text-brand/70 leading-relaxed">
              “Each one must give as he has decided in his heart,
              not reluctantly or under compulsion.”<br />
              <span className="not-italic">— 2 Corinthians 9:7</span>
            </p>

          </div>
        </div>
      </section>

    </section>
  );
};

export default ContactForm;
