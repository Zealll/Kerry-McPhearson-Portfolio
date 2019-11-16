import React from 'react'
import Purple from '../../assets/Purple_Vector.svg'
import BackPic from '../../assets/back_pic.png'
import GuySitting from '../../assets/Guy_Sitting.png'
import BlueCircle from '../../assets/TopMiddleRight.png'
import GreenPolygon from '../../assets/Polygon.png'
import PurplePolygon from '../../assets/BottomMiddle.png'

const Description = () => {

    return (
        <div className='description'>
            <div className='top-pictures-holder'>
                <div className='left'>
                    <img src={Purple} className='purple-vector' alt='purple vector' />
                    <img src={BackPic} className='board-pic' alt='Writing on the board' />
                </div>
                <div className='right'>
                    <div className='right-div-column-container'>
                        <div className='top-figures'>
                            <img src={BlueCircle} alt='blue circle' />
                            <img src={GreenPolygon} className='green-polygon' alt='Green Tirangle' />
                        </div>
                        <div className="middle-front">
                            <img src={GuySitting} alt='Profile Container'/>
                        </div> 
                        <div className='bottom-figures'>
                            <img src={PurplePolygon} alt='Purple Polygon' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-me'>
                <h2>About Me</h2>
                <p>Hi, my name is Kerry and I’m a lover of design, art, and music. I believe that ideation, erudition, and design is the key to innovation. My vision is to create a world where technology and design can coexist to be ubiquitous, accessible, and as elegant as nature. I desire a world where we as people are 'in tune' with ourselves, each other, and our environment. I’m often described as being a creative thinker, empathizer, analytical, storyteller and a flat out enjoyable person to work with.</p>
            </div>

            <div className='quotes'>
                <h2>Quotes I Love By</h2>
                <p>“If you want to go fast, go alone. If you want to go far, go with others” - African Proverb  </p>
                <p>“We can't solve problems by using the same kind of thinking we used when we created them."​ - Albert Einstein</p>
                <p>"If you had an easy time making a decision, then you don’t know all the facts" - Rob Redmon</p>
            </div>
        </div>
    )
}


export default Description