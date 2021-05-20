import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid ml-3">
                <div className="row justify-content-center ml-3">
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="row">
                            <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" width="25px" height="25px" />
                            <h3>avan</h3>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <p>Copyright © 2020 FutureTal Inc.</p>
                                <p>All rights reserved.</p>
                            </div>
                        </div>
                        <div className="row">
                            <a className="btn btn-social-icon rounded-circle social__links " href="https://www.instagram.com"><i class="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon rounded-circle social__links ml-3" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon rounded-circle social__links ml-3" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon rounded-circle social__links ml-3" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4"></div>
                    <div className="col-12 col-sm-2">
                        <h5>Company</h5>
                        <ul className="list-unstyled links__link">
                            <li><Link className="text-dark" to="/home">Become a provider</Link></li>
                            <li><Link className="text-dark" to="/aboutus">About Us</Link></li>
                            <li><Link className="text-dark" to="/blog">Blog</Link></li>
                            <li><Link className="text-dark" to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-2">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><Link className="text-dark" to="/home">Help center</Link></li>
                            <li><Link className="text-dark" to="/aboutus">Terms of service</Link></li>
                            <li><Link className="text-dark" to="/blog">Privacy policy</Link></li>
                            <li><Link className="text-dark" to="/contactus">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
