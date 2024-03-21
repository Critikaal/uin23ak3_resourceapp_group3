import { Link } from "react-router-dom";
import Header from "./Header";
import Resources from "./Resources";
import Links from "./Links";
import { useState } from "react";

export default function Layout({ resource }) {
  // lager en aktiv kategori som blir brukt til å skrive ut riktig data fra arrayen ressurser.js. Og useState er bare for å sette en default kategori
  const [activeCategory, setActiveCategory] = useState("HTML");

  // Endrer sånn at kategorien blir satt til riktig i forhold til hvilken som blir trykket på.
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  return (
    <>
      <div id="center-box">
        {/* f.eks. resource={resource} blir brukt til å sende ut en prop med navnet resource */}
        <Header
          resource={resource}
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
        ></Header>
        <div id="main-content">
          <Resources
            resource={resource}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          ></Resources>
          <Links
            resource={resource}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
    </>
  );
}