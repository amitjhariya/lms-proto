import React from 'react'
import Header from '../header/Header';
import Footer from './components/Footer';
import HeaderSub from './components/HeaderSub';
import Home from './components/Home'
import Secondary from './components/Secondary';

function MainComponent() {
    return (
        <div>
            <Header/>
            <HeaderSub/>
            <Home/>
            <Secondary/>
            <Footer/>
        </div>
    )
}

export default MainComponent
