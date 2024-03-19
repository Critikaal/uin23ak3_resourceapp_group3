import { Link } from "react-router-dom";
import Header from '../components/Header'
import Content from '../components/Content'

export default function Layout(){
return (
    <>
    <div id="center-box">
        <Header></Header>
        <div id="main-content">
            <Content></Content>
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