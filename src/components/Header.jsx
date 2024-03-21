import { Link } from "react-router-dom";
import { resources } from "../assets/ressurser";
import { useState } from "react";

export default function Header ({activeCategory, handleCategoryChange}) {
 
    return(
        <>
        <nav>
            <ul id="tabs">
              {/* Mapping over resources to create buttons */}
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    className={activeCategory === resource.category ? 'active' : ''}
                    onClick={() => handleCategoryChange(resource.category)}
                    data-category={resource.category}
                  >
                    {resource.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
    )
}