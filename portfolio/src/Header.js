import React from 'react';
import BottomLeft from "./assets/BottomLeft.png";
import BottomMiddle from "./assets/BottomMiddle.png"
import BottomRight from "./assets/BottomRight.png"
import MiddleBehind from "./assets/MiddleBehind.png"
import MiddleFront from "./assets/MiddleFront.png"
import MiddleLeft from "./assets/MiddleLeft.png"
import MiddleRight from "./assets/MiddleRight.png"
import TopLeft from "./assets/TopLeft.png"
import TopMiddle from "./assets/TopMiddle.png"
import TopMiddleRight from "./assets/TopMiddleRight.png"
import Arrow from "./assets/Arrow.png"

export default function Header() {
    return (
        <div className="header">
            <div className='top-img-container'>
                <div className="top-left"><img src={TopLeft}></img></div>
                <div className="top-middle"><img src={TopMiddle}></img></div>
                <div className="top-right"><img src={TopMiddleRight}></img></div>
            </div>
            
            <div className='middle-img-container'>
                <div className="middle-left">
                    <div className="layer-one">
                        <p>Hi, my name is Kerry
                        <br />
                        McPhearson & I’m a 
                        <br />
                        Product Designer Hailing 
                        <br />
                        From Atlanta, GA</p>
                    </div>
                    {/* <div className="layer-two">
                        <img src={MiddleLeft}></img>
                    </div> */}
                </div>
                <div className='profile-pic-container'>
                    <div className="middle-front">
                        <img src={MiddleFront} />
                    </div> 
                    <div className="middle-right"><img src={MiddleRight}></img></div>
                </div>
            </div>
            
            {/* <div className='bottom-img-container'>
                <div className="bottom-left"><img src={BottomLeft}></img></div>
                <div className="bottom-middle"><img src={BottomMiddle}></img></div>
                <div className="bottom-right"><img src={BottomRight}></img></div>
                <div className="bottom-bottom"><a href="#Projects"><p className="small1">Click Here to View My Projects</p><img className="center" src={Arrow}></img></a></div>
            </div> */}
            
        </div>
    )
}
