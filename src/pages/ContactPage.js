import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <main className="pt-20">
      <ContactHero />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
