import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Header() {
    return <header>
        <Navbar fixed="top" collapseOnSelect expand="lg" className="navProperty">
            <Navbar.Brand className="navBrand" href="https://www.google.ca">GameName</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="navlink"> 
                        <Nav.Link href="#title">Top</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#title">Download</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#highlights">Highlights</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#gameshow">Rule</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#contactme">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
}

export default Header;