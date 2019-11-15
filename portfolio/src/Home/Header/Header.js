import React from 'react';
import BottomLeft from "../../assets/BottomLeft.png";
import BottomMiddle from "../../assets/BottomMiddle.png"
import BottomRight from "../../assets/BottomRight.png"
import MiddleBehind from "../../assets/MiddleBehind.png"
import MiddleFront from "../../assets/MiddleFront.png"
import MiddleLeft from "../../assets/MiddleLeft.png"
import MiddleRight from "../../assets/MiddleRight.png"
import TopLeft from "../../assets/TopLeft.png"
import TopMiddle from "../../assets/TopMiddle.png"
import TopMiddleRight from "../../assets/TopMiddleRight.png"
import Arrow from "../../assets/Arrow.png"
import './Header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className='top-img-container'>
                <div className="top-left"><img src={TopLeft}></img></div>
                <div className="top-middle"><img src={TopMiddle}></img></div>
                
            </div>
            
            <div className='middle-img-container'>
                <div className="middle-left">
                    <div className="layer-one">
                        <p className='first-p'>Hi, my name is Kerry</p>
                        <p>McPhearson & I’m a</p>
                            <div className='underline'></div>
                        <p>Product Designer Hailing</p>
                            <div className='underline'></div>
                        <p>From Atlanta, GA</p>
                            <div className='underline'></div>
                    </div>
                    {/* <div className="layer-two">
                        <img src={MiddleLeft}></img>
                    </div> */}
                </div>
                <div className='profile-pic-container'>
                    <div className='img-and-ball'>
                        <div className="top-right" />
                        <div className="middle-front">
                            <img src={MiddleFront} alt='Profile Container'/>
                        </div> 
                    </div>
                    <div className="middle-right">
                        <img src={MiddleRight} />
                    </div>
                </div>
            </div>
            
            <div className='bottom-img-container'>
                <div className='bottom-img-pic-container'>
                    <div className='first-two'>
                        <div className="bottom-left"><img src={BottomLeft}></img></div>
                        <div className="bottom-middle"><img src={BottomMiddle}></img></div>
                    </div>
                   
                    <div className="bottom-right"><img src={BottomRight}></img></div>
                </div>
                <div className="bottom-bottom">
                    <a className='button' href="#Projects">
                        <p className="small1">Click Here to View My Projects</p>
                        <img className="center" src={Arrow}></img>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
