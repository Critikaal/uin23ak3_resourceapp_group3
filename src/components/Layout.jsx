export default function Layout(){
return (
    <>
    <div id="center-box">
        <nav>
            <ul id="tabs">
                <li><button className="active" data-category="HTML">HTML</button></li>
                <li><button data-category="CSS">CSS</button></li>
                <li><button data-category="JavaScript">JavaScript</button></li>
                <li><button data-category="React">React</button></li>
                <li><button data-category="Sanity and headless CMS">Sanity and headless CMS</button></li>
            </ul>
        </nav>
        <div id="main-content">
            <h2>HTML</h2>
            <p>HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.</p>

            <ul>
                <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
                <li><a href="https://html.com/">HTML.com Tutorials</a></li>
            </ul>
        </div>
    </div>

    <script src="./assests/resourcechanger.js"></script>
    <script src="./assests/ressurser.js"></script>
    </>
)

}