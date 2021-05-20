import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

import './Header.css'
import Login from '../LoginSignUp/Login.js';



function Header() {
    const [user, setUser] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);



    return (
        <div>
            <Navbar className="navbar__main" expand="lg">
                <Navbar.Brand href="/">Website Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" href="/home"><AiOutlinePlayCircle />How it works?</Nav.Link>
                        <Nav.Link className="nav-link" href="/menu">Become a Provider</Nav.Link>
                    </Nav>
                    {user ? (
                        <div>
                            <Button variant="btn mr-3 navbar__main__message rounded-circle"><a className="text-dark" href="/chats"><i class="fa fa-envelope navbar__main__message__icon"></i></a></Button>
                            <Button onClick={() => setUser("")} variant="btn btn-outline-success">Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Button href="/login" variant="btn btn-outline-success">Log In</Button>
                            <Button onClick={() => setShowSignup(true)} variant="btn btn-success ml-2">Sign Up</Button>
                        </div>

                    )}

                </Navbar.Collapse>
            </Navbar>



            <Modal show={showLogin} onHide={() => setShowLogin(false)} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Log In
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                            </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                    </Form.Group>
                                    <Container fluid="md">
                                        <Row className="justify-content-md-center">
                                            <Button className="col-8" variant="primary" type="submit">
                                                Log In
                                </Button>
                                        </Row>
                                    </Container>
                                </Form>
                            </Modal.Body>
                        </div>
                    </div>
                </div>
            </Modal>




            <Modal show={showSignup} onHide={() => setShowSignup(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign Up
                 </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <div className="row ml-1">
                                <Form.Check type="checkbox" /><p>I agree to the <a href="">Terms of service</a> and <a href="">Privacy Policy</a></p>
                            </div>
                        </Form.Group>
                        <Container fluid="md">
                            <Row className="justify-content-md-center">
                                <Button className="col-8" variant="outline-secondary" type="submit">
                                    <FaFacebook className="facebook__button__icon" />Sign Up
                                </Button>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default Header
