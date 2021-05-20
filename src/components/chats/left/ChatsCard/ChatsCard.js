import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChatsCard.css'

function ChatsCard() {
    return (
        <div className="chatsCard">
            <div className="row pl-3">
                <div className="col-3">
                    <Avatar variant="rounded" src="https://www.shareicon.net/data/256x256/2016/02/07/715342_people_512x512.png" alt="name"> </Avatar>
                </div>
                <div className="col-9">
                    <h3 className="m-0">Full name</h3>
                    <p>Last message.... -time</p>
                </div>
            </div>
        </div>
    )
}

export default ChatsCard
