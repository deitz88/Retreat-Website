import React from "react";
import './NavBar.css'

export default function NavBar() {
    return (
        <div id='navCont'>
            <ul id='listCont'>
                <li id="homeLink">Home</li>
                <li id="servicesLink">Services</li>
                <li id='aboutLink'>About</li>
                <li id='contactLink'>Contact</li>

            </ul>
        </div>
    )
}