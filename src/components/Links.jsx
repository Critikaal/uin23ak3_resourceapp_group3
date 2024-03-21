import { resources } from "../assets/ressurser"

export default function Links({resource}) {
    return(
        <>
        <ul>
                <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
                <li><a href="https://html.com/">HTML.com Tutorials</a></li>
        </ul>
            {/* <ul>
            {resources.sources.map((source, idx) => (
            <li key={idx}>
                <a href={source.url}>{source.title}</a>
            </li>
            ))}
            </ul> */}
        
        </>
    )
}