// Importerer nødvendige moduler fra React-pakken
import { useParams } from "react-router-dom"; // Importerer useParams hook fra react-router-dom
import { resources } from "../assets/ressurser"; // Importerer ressursene fra en fil
import { useState } from "react"; // Importerer useState hook fra React

// Definerer en funksjonell komponent kalt Resources med en props kalt activeCategory
export default function Resources({ activeCategory }) {
    // Returnerer JSX-innhold
    return (
        <>
            {/* Viser innhold basert på den aktive kategorien */}
            {/* Mapper over ressursene og genererer et div-element for hver ressurs */}
            {resources.map((resource, index) => (
                <div key={index} style={{ display: activeCategory === resource.category ? 'block' : 'none' }}>
                    {/* Viser kategorien og teksten for hver ressurs */}
                    <h2>{resource.category}</h2>
                    <p>{resource.text}</p>
                </div>
            ))}
        </>
    );
}
