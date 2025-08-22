import React from "react";

import { Navbar,Nav,Container, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarCom()
{
    return(
        <Navbar expand="lg" className="navbar-custom sticky-top bg-dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link}>Hemant Chavan</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/Qualification/Education">QUALIFICATION</Nav.Link>
                        <Nav.Link as={Link} to="/Qualification/Experience">EXPERIENCE</Nav.Link>
                        <Nav.Link as={Link} to="/Skills">SKILLS</Nav.Link>
                        <Nav.Link as={Link} to="/Contacts">CONTACTS</Nav.Link>
                        <Nav.Link as={Link} to="/Signup">SIGNUP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarCom;