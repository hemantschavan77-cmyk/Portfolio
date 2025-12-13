import React from "react";
import { Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Recipe Hub</Card.Title>
          <Card.Text>
            A social recipe-sharing platform built with React.js where users can
            upload, explore, and search recipes based on their cravings. It
            features recipe categories, likes, and ratings, offering a
            social-media–like experience for food enthusiasts.
          </Card.Text>
          <Button
            variant="dark"
            href="https://github.com/hemantschavan77-cmyk/Hemant-s-Recipie-Hub.git"
            target="_blank"
            className="me-2"
          >
            GitHub
          </Button>
          <Button
            variant="primary"
            href="https://hemant-s-recipie-hub.vercel.app/"
            target="_blank"
          >
            Live Demo
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Movie Ticket Booking System</Card.Title>
          <Card.Text>
            A desktop-based movie ticket booking system developed using C# and
            MS Access. The application enables users to select movies,
            showtimes, and book seats while securely storing booking data in
            the database.
          </Card.Text>
          <Button
            variant="dark"
            href="https://github.com/hemantschavan77-cmyk/MovieBookingApp.git"
            target="_blank"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Cinephile Quiz</Card.Title>
          <Card.Text>
            A fun and interactive movie-themed quiz application built using
            HTML and CSS. Designed for movie lovers to test their knowledge
            through a simple, clean, and engaging interface.
          </Card.Text>
          <Button
            variant="primary"
            href="https://cinema-quiz-roan.vercel.app/"
            target="_blank"
          >
            Live Demo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
