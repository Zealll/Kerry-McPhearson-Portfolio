import React from 'react'
import Behance from "./assets/Behance.png"
import LinkedIn from "./assets/LinkedIn.png"
import Medium from "./assets/MediumLogo.png"
import Dribble from "./assets/Dribble.png"

export default function Footer() {
    return (
        <div>
            <div className="footer">
            <div className="footer-left">
                <a href = "mailto: kerrymcphearson9@gmail.com">Contact: KerryMcPhearson9@gmail.com</a>
            </div>
            <div className="footer-right">
                <a href="http://medium.com"><img src={Medium}></img></a>
                <a href="http://linkedin.com"><img className="padding" src={LinkedIn}></img></a>
                <a href="http://behance.com"><img src={Behance}></img></a>
                <a href="http://dribbble.com"><img className="padding" src={Dribble}></img></a>
            </div>
            </div>
        </div>
    )
}
