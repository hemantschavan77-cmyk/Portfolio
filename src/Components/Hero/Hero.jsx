import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.css';

function GithubIcon({ size = 19, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Hero() {
  const heroRef = useScrollReveal({ threshold: 0.1 });

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-container">
        {/* Left / Main Content */}
        <div className="hero-content reveal-child">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">{personalInfo.title}</span>
          </div>

          <h1 className="hero-title">
            {personalInfo.greeting}
          </h1>

          <p className="hero-subtitle">
            {personalInfo.about}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-btn-primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={17} className="btn-icon" />
            </a>

            <a
              href="#contact"
              className="hero-btn-secondary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>Let's Talk</span>
              <Send size={15} className="btn-icon" />
            </a>

            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={19} />
              </a>
            )}
          </div>
        </div>

        {/* Right / Profile Avatar */}
        <div className="hero-visual reveal-child">
          <div className="avatar-wrapper">
            <div className="avatar-ambient-glow" aria-hidden="true" />
            <div className="avatar-ring">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="avatar-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
