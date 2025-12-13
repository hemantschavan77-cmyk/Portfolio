import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function NavbarCom() {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="logo">
          🚀 Hemant Chavan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Qualification/Education"
              className="nav-link-custom"
            >
              Qualification
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Qualification/Projects"
              className="nav-link-custom"
            >
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Skills" className="nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contacts" className="nav-link-custom">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
