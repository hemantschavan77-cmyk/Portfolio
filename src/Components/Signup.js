import React from "react";
import { Form, Button,Container ,FormGroup } from "react-bootstrap";
function Signup()
{
    return (
        <Container className="mt-5">
            <h2 className="section-title">SignIn</h2>
            <Form>
            <FormGroup className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name"></Form.Control>
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"></Form.Control>
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password"></Form.Control>
            </FormGroup>
            <Button variant="secondary">SignIn</Button>
            </Form>
        </Container>
    );
}

export default Signup;