import { Link } from "react-router-dom";
import { resources } from "../assets/ressurser";
import { useState } from "react";

export default function Header ({activeCategory, handleCategoryChange}) {
 
    return(
        <>
        <nav>
            <ul id="tabs">
              {/* Mapper ut fra resourse for å lage knapper */}
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    // Setter klassen active på kategorien som er lik det som står i active category
                    className={activeCategory === resource.category ? 'active' : ''}
                    // onClicken gjør at den endrer den aktive kategorien til den brukeren trykker på.
                    onClick={() => handleCategoryChange(resource.category)}>
                    {/* Teksten som står i selve knappen på nettsiden. */}
                    {resource.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
    )
}