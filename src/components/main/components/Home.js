import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 align-self-center ">
                    <h1 className="heading_h1">Instantly connect with an expert of your choice</h1>
                    <div class="input-group input-group-lg border__search ">
                        <span class="input-group-text bg-white rounded-circle border-0"><i class="fa fa-search"></i></span>
                       < input type="text" class="form-control border-0" placeholder='Try "Big data"' aria-label="search" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary border-0 border__radius__right button__search" type="button" id="button-addon2">Search</button>
                    </div>
                    <div class="input-group input-group-lg mt-3">
                        <button class="btn btn-outline-secondary options__color " type="button" id="button-addon2">Big Data</button>
                        <button class="btn btn-outline-secondary options__color ml-3" type="button" id="button-addon2">Design</button>
                        <button class="btn btn-outline-secondary options__color ml-3" type="button" id="button-addon2">Machine Learning</button>
                        <button class="btn btn-outline-secondary options__color ml-3" type="button" id="button-addon2">Node.js</button>
                        <button class="btn btn-outline-secondary options__color ml-3" type="button" id="button-addon2">Flutter</button>
                    </div>
                </div>
                <div className="col-12 col-sm-5">
                </div>
            </div>
        </div>
    )
}

export default Home
