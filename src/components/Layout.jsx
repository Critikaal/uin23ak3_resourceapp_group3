import { Link } from "react-router-dom";
import Header from './Header'
import Resources from './Resources'
import Links from "./Links";
import { resources } from "../assets/ressurser";

export default function Layout(){
return (
    <>
    <div id="center-box">
        <Header></Header>
        <div id="main-content">
            <Resources></Resources>
            <Links/>
        </div>
    </div>

    <script src="./assests/resourcechanger.js"></script>
    <script src="./assests/ressurser.js"></script>
    </>
)
}