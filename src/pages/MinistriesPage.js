import React from "react";
import MinistriesHero from "../components/ministries/MinistriesHero";
import MinistriesContent from "../components/ministries/MinistriesContent";

const MinistriesPage = () => {
  return (
    <main className="pt-20">
      <MinistriesHero />
      <MinistriesContent />
    </main>
  );
};

export default MinistriesPage;
