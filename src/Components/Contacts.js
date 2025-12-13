import React, { useState } from "react";
import { Form, Button, Container, FormGroup, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: "", error: "" });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    emailjs
      .send(
        "service_phwslut",
        "template_sd9ahy6",
        templateParams,
        "hSzjbil4fkOQKpVC2"
      )
      .then(() => {
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: ""
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          loading: false,
          success: "",
          error: "Failed to send message. Please try again later."
        });
      });
  };

  return (
    <Container className="mt-5">
      <h2 className="section-title">Contact Me</h2>

      {status.success && <Alert variant="success">{status.success}</Alert>}
      {status.error && <Alert variant="danger">{status.error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button variant="primary" type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send"}
        </Button>
      </Form>
    </Container>
  );
}

export default Contacts;
