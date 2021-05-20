import React, { useEffect } from 'react'
import SearchCard from './searchCard/SearchCard'
import "./RightSide.css"


function RightSide() {
    return (
        <div className="rightSide">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />

        </div>
    )
}

export default RightSide
