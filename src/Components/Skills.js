import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  return (
    <Container className="m-5">
      <h2 className="section-title">Skills</h2>
      <Row className="g-4">
        <Col md={3}>
          <Card className="p-4 text-center shadow-sm border-0 rounded-4 h-100 skill-card">
            <h5 className="text-primary">Web Development</h5>
            <p>HTML, CSS, Bootstrap, React.js</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-4 text-center shadow-sm border-0 rounded-4 h-100 skill-card">
            <h5 className="text-primary">Programming Languages</h5>
            <p>C, C++, C#, Java, Python, JavaScript</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-4 text-center shadow-sm border-0 rounded-4 h-100 skill-card">
            <h5 className="text-primary">Databases</h5>
            <p>MS Access, MySQL, Oracle, MongoDB</p>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-4 text-center shadow-sm border-0 rounded-4 h-100 skill-card">
            <h5 className="text-primary">Other Skills</h5>
            <p>Problem Solving, Teamwork, Communication</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
