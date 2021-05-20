import React from 'react'
import './ChatLeft.css'
import ChatsCard from './ChatsCard/ChatsCard'

function ChatLeft() {
    return (
        <div className="chatsLeft">
            <div className="container mt-3 ">
                <h3 className="ChatLeft__header">Chats</h3>
                <div className="row">
                    <div className="col">
                        <div class="input-group mb-3 border rounded ">
                            <span class="input-group-text bg-white rounded-circle border-0" id="inputGroup-sizing-default"><i class="fa fa-search"></i></span>
                            <input type="text" class="form-control border-0 p-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-0">
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                        <ChatsCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatLeft
