import { Link } from "react-router-dom";

export default function Header () {
    return(
        <>
        <nav>
            <ul id="tabs">
                <li><Link to="/HTML" className="active">HTML</Link></li>
                <li><Link to="/CSS">CSS</Link></li>
                <li><Link to="/JavaScript">JavaScript</Link></li>
                <li><Link to="/React">React</Link></li>
                <li><Link to="/Sanity">Sanity and headless CMS</Link></li>
            </ul>
        </nav>
        </>
    )
}