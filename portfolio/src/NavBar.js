import React from 'react';
import Kerry from "./assets/KerryMcPhearson.png"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <a href="#Icon"><img width='38px' height= '38px'  src={Kerry} alt="Kerry"></img></a>
            </div>
            <div className="nav-right">
            <a href="#Home">Home</a>
            <a href="#Contact">Contact</a>
            <a href="#About">About</a>
            <a href="#Resume">Resume</a>
            </div>
        </div>
    )
}
