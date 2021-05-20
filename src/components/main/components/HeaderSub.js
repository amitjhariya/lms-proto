import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'

function HeaderSub() {
    return (
        <div>
            <Navbar className="navbar__main" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav-link" href="/home">Technology</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Professionals</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Busness</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Lifestyle</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category A</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category B</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category C</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category D</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category E</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category F</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category G</Nav.Link>
                        <Nav.Link className="nav-link" href="/home">Category H</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderSub
