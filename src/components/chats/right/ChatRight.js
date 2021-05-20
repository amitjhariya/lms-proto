import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';
import { Container, Form, FormControl, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa';

import "./ChatsRight.css"

function ChatRight() {
    const [showBookSession, setShowBookSession] = useState(false);
    const [modify, setModify] = useState(false)
    const [activeKey, setActiveKey] = useState("1")
    return (
        <div className="chatsRight p-2">
            <div className="row border-bottom">
                <div className="col-12 col-sm-9">
                    <div className="row justify-content-between">
                        <Avatar variant="rounded" src="https://www.shareicon.net/data/256x256/2016/02/07/715342_people_512x512.png" alt="name"> </Avatar>
                        <div className="col">
                            <h3 className="m-0">Full name</h3>
                            <p>Availability status</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <Button onClick={() => setShowBookSession(true)} variant="btn btn-success ml-2"><VideoCallIcon />Book Session</Button>
                </div>
            </div>
            <div className="row pl-3 chatsRight__senderPosition ">
                <div className="senderBar__button">
                    <Button variant="btn btn-outline-secondary border-0"><AttachmentIcon /></Button>
                    <Button variant="btn btn-outline-secondary border-0 ml-2"><VideoCallIcon /></Button>
                </div>
                <div className="col">
                    <div class="input-group mb-3 border rounded">
                        <input type="text" class="form-control border-0" aria-label="Amount (to the nearest dollar)" />
                        <Button variant="btn btn-outline-secondary border-0 ml-2"><SendIcon /></Button>
                    </div>
                </div>
            </div>
            <Modal className="BookSession__modal" show={showBookSession} onHide={() => setShowBookSession(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Book Session
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey={activeKey} id="uncontrolled-tab-example">
                        <Tab eventKey="1" title="1. Select Topic">
                            <Form>
                                <dov className="container">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5>How to become a UX designer?</h5>
                                            <div className="row">
                                                <p className="col-3">60min</p>
                                                <p className="col-3">$35</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <Button onclick={()=>setActiveKey("2")} variant="btn btn-success ml-2">Continue</Button>
                                        </div>
                                    </div>
                                </dov>
                            </Form>
                        </Tab>
                        <Tab eventKey="2" title="2. Book or Request">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <p>TOPIC</p>
                                        <p>Getting started with user empathy</p>
                                    </div>
                                </div>
                                {modify == false ? (
                                    <div>
                                        <div className="row border-bottom">
                                            <p className="col-3">60min</p>
                                            <p className="col-3">$35</p>
                                            <Button className="col-4" variant="btn btn-outline-success  ml-2" onClick={() => setModify(true)} >Modify</Button>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p>If you like to negotiate, you can modify the duration and charges, and place the request.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <Button variant="btn btn-outline-secondary border-0 ml-2">Back</Button>
                                            <Button variant="btn btn-success ml-2">Book Session</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="row border-bottom">
                                            <div className="col-12 col-sm-6">
                                                <label>Duration</label>
                                                <div class="input-group mb-3">
                                                    <input type="num" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"/>
                                                        <span class="input-group-text" id="basic-addon2">mins</span>
                                                </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                <label>Charges</label>
                                                <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon2">$</span>
                                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"/>
                                                        
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p>Modify the duration or charges, and send the request to provider for approval.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <Button onClick={()=>setModify(false)} variant="btn btn-outline-secondary border-0 ml-2">Back</Button>
                                                <Button variant="btn btn-success ml-2">Send Request</Button>
                                            </div>
                                        </div>
                                )}
                                    </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default ChatRight
