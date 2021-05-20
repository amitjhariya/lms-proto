import React from 'react'
import LeftSide from './left_side/LeftSide'
import RightSide from './right_side/RightSide'
import './Results.css'
import Header from '../header/Header'

function Results() {
    return (
        <div className="results">
            <Header/>
            <div className="container">
                {/* number of search results */}
                <div className="row rightSide__show">
                    <div className="col-12 col-sm-3">

                    </div>
                    <div className="col-12 col-sm-9">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <h4 className="rightSide__span">Showing 32 results for "ux design</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <select class="form-select form-select-lg p-2" aria-label=".form-select-lg example">
                                    <option value="1">Experience: High to Low</option>
                                    <option value="2">Experience: High to Medium</option>
                                    <option value="3">Experience: Medium to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <LeftSide />
                    </div>
                    <div className="col-12 col-sm-9">
                        <RightSide />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Results
