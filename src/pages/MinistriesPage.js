import React from "react";
import MinistriesHero from "../components/ministries/MinistriesHero";
import MinistriesList from "../components/ministries/MinistriesList";

const MinistriesPage = () => {
  return (
    <main className="pt-20">
      <MinistriesHero />
      <MinistriesList />
    </main>
  );
};

export default MinistriesPage;
