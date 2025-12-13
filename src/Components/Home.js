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
          Motivated MCA student and Full-Stack Java Developer in training with
          experience in Java, C, C++, C#, Python, and JavaScript. Skilled in
          responsive web applications and databases.
        </p>
      </section>
    </div>
  );
}

export default Home;
