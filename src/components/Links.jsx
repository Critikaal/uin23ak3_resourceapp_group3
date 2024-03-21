// Importerer ressursene fra en fil
import { resources } from "../assets/ressurser";

// Definerer en funksjonell komponent kalt Links med en props kalt activeCategory
export default function Links({ activeCategory }) {
    // Returnerer JSX-innhold
    return (
        <>
            {/* Mapper over ressursene og genererer et <ul>-element for hver ressurs */}
            {resources.map((resource, index) => (
                <ul key={index} style={{ display: activeCategory === resource.category ? "block" : "none" }}>
                    {/* Mapper over kildene til hver ressurs og genererer et <li>-element for hver kilde */}
                    {resource.sources.map((source, idx) => (
                        <li key={idx}>
                            {/* Viser en lenke for hver kilde */}
                            <a href={source.url}>{source.title}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
}