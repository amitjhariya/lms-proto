import React from 'react'
import ChatLeft from './left/ChatLeft'
import ChatRight from './right/ChatRight'
import './Chats.css'
import Header from '../header/Header'

function Chats() {
    return (
        <div className="chats">
            <Header/>
            <div className="row">
                <div className="col-12 col-sm-3 chats__left">
                    <ChatLeft/>
                </div>
                <div className="col-12 col-sm-9">
                    <ChatRight/>
                </div>
            </div>
        </div>
    )
}

export default Chats
