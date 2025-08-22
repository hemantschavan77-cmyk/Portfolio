import React from "react";
import { Form , Button , Container, FormGroup } from "react-bootstrap";

function Contacts()
{
    return (
        <Container className="mt-5">
            <h2 className="section-title">Contact Me</h2>
            <Form>
                <FormGroup className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"></Form.Control>
                </FormGroup>
                <FormGroup className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                </FormGroup>
                <FormGroup className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}></Form.Control>
                </FormGroup>
                <Button variant="primary">Send</Button>
            </Form>
        </Container>
    );
}

export default Contacts;