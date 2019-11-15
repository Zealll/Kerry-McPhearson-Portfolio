import React from 'react';
import Kerry from "../assets/KerryMcPhearson.png"
import './NavBar.scss'
import { Link }  from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <a href="#Icon"><img width='38px' height= '38px'  src={Kerry} alt="Kerry"></img></a>
            </div>
            <div className="nav-right">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <a href="#Resume">Resume</a>
            </div>
        </div>
    )
}
