import React from 'react'
import Content from './Content/Content.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'


const Home = props => {

    return (
        <div className='home'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}


export default Home