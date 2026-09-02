import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src="\Profile4.jpg" alt="Hemant" className="profile-img" />
        <h2 className="profile-name">Hemant Chavan</h2>
      </div>

      <header className="header">
        <h1 className="title">
          Hi, I'm <span className="name-highlight">Hemant</span> 👋
        </h1>
        <p className="subtitle">
          Crafting Full-Stack Web Experiences with Java & Modern Tech
        </p>

        <Link to="/Qualification/Projects" className="btn">
          Explore My Work
        </Link>
      </header>

      <section className="about card">
        <h2>About Me</h2>
        <p>
          Motivated and aspiring Full-Stack Java Developer with hands-on experience in building responsive
          web applications and backend services. Proficient in Java, Spring Boot, RESTful APIs, and modern
          frontend frameworks like React.js. Experienced with relational and NoSQL databases, and passionate
          about writing clean, scalable code and solving real-world problems.

        </p>
      </section>
    </div>
  );
}

export default Home;
