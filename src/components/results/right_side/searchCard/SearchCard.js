import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'react-bootstrap';
import './SearchCard.css';
import Aos from 'aos';
import "aos/dist/aos.css"


function SearchCard() {
    useEffect(() => {
        Aos.init({duration:2000});
       }, [])

    return (
        <div className="searchCard" data-aos="fade-up">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-2">
                            <Avatar variant="rounded" src="https://www.shareicon.net/data/256x256/2016/02/07/715342_people_512x512.png" alt="name"> </Avatar>
                        </div>
                        <div className="col-10">
                            <h3>Full name</h3>
                            <p>Availability status</p>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <Button variant="btn btn-outline-success">View Profile</Button>
                    <Button variant="btn btn-success ml-2"><i class="fa fa-comments"></i> Message</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <i class="fa fa-tags"></i>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">UI/UX</button>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">Visual design</button>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">design system</button>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">typography</button>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">app design</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <i class="fa fa-address-card"></i>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">google UX design professional</button>
                    <button type="button" class="btn btn-sm btn__tag__color ml-2">build Wireframes and low-fidelity prototypes</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCard
