import React from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export function About() {
  const aboutRef = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header reveal-child">
          <div className="section-pill">
            <User size={14} className="pill-icon" />
            <span>About Me</span>
          </div>
          <h2 className="about-title">
            Passionate About Crafting <span className="title-gradient">Modern Web & Java Solutions</span>
          </h2>
        </div>

        {/* About Main Card */}
        <div className="about-card-main reveal-child">
          <p className="about-bio-text">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
