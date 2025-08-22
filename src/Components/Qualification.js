import React from "react";
import { Link,Outlet } from "react-router-dom";
import { Container,Nav } from "react-bootstrap";
import "./Qualification.css";

function Qualification()
{
    return (
        <Container className="mt-5">
            <h2 className="section-title">Qualification</h2>
            <Nav variant="tabs" defaultActiveKey="/Qualification/Education">
            <Nav.Item>
                <Nav.Link as={Link} to="Education" className="custom-nav-link">
                Education
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="Experience" className="custom-nav-link">
                Experience
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Outlet/>
        </Container>
    );
}

export default Qualification;