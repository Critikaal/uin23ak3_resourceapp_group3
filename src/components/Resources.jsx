import { useParams } from "react-router-dom"
import {resources} from "../assets/ressurser"
import { useState } from "react";

export default function Resources ({activeCategory}) {
    
    return (
          <>
            {/* Displaying content based on activeCategory */}
            {resources.map((resource, index) => (
              <div key={index} style={{ display: activeCategory === resource.category ? 'block' : 'none' }}>
                <h2>{resource.category}</h2>
                <p>{resource.text}</p>
                <ul>
                  {resource.sources.map((source, idx) => (
                    <li key={idx}>
                      <a href={source.url}>{source.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
      );
    };

