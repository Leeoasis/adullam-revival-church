import React from "react";

const LocationSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#583030]">
          Visit Us
        </h2>
        <p className="mt-6 text-[#3f2323] text-lg md:text-xl leading-relaxed opacity-85">
          Adullam Revival Centre, 123 Faith Avenue, Nairobi, Kenya.
        </p>
        <p className="mt-4 text-[#3f2323] text-lg opacity-80">
          Phone: +254 700 000 000 | Email: info@adullamrevival.org
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.123456!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a123456789%3A0xabcdef1234567890!2sAdullam+Revival+Centre!5e0!3m2!1sen!2ske!4v1610000000000!5m2!1sen!2ske"
          className="w-full h-80 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

export default LocationSection;
