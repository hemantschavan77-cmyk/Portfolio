import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
function Skills()
{
    return (
        <Container className="m-5">
            <h2 className="section-title">Skills</h2>
            <Row>
                <Col md={3}>
                <Card className="p-3 text-center">
                <h5 className="text-primary">HTML , CSS, Bootstrap and React Js</h5>
                <p>Modern UI , Responsive Design</p>
                </Card>
                </Col>
                <Col md={3}>
                <Card className="p-3 text-center">
                <h5 className="text-primary">Javascript</h5>
                <p>ES6, DOM , Async/await</p>
                </Card>
                </Col>
                <Col md={3}>
                <Card className="p-3 text-center">
                <h5 className="text-primary">C,CPP</h5>
                <p>Functions ,Pointers , OOP</p>
                </Card>
                </Col>
                <Col md={3}>
                <Card className="p-3 text-center">
                <h5 className="text-primary">Database</h5>
                <p>SQL , NoSQL , MongoDB</p>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;