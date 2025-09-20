import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Hi, I'm Hemant 👋</h1>
        <p className="subtitle">A passionate Web Developer</p>
        <Link to="/Qualification/Experience" className="btn">
          Explore My Work
        </Link>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I love building modern, interactive, and user-friendly web
          applications. Currently exploring React, full stack development, and
          solving real-world problems with code.
        </p>
      </section>
    </div>
  );
}

export default Home;
 