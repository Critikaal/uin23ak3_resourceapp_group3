import { Link } from "react-router-dom";
import Header from './Header'
import Resources from './Resources'
import Links from "./Links";
import { resources } from "../assets/ressurser";
import { useState } from "react";

export default function Layout({resource}){
    const [activeCategory, setActiveCategory] = useState('HTML');

    
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };
return (
    <>
    <div id="center-box">
        <Header resource={resource} activeCategory={activeCategory} handleCategoryChange={handleCategoryChange}></Header>
        <div id="main-content">
            <Resources resource={resource} activeCategory={activeCategory} handleCategoryChange={handleCategoryChange}></Resources>
            <Links resource={resource} activeCategory={activeCategory} handleCategoryChange={handleCategoryChange}/>
        </div>
    </div>

    <script src="./assests/resourcechanger.js"></script>
    <script src="./assests/ressurser.js"></script>
    </>
)
}