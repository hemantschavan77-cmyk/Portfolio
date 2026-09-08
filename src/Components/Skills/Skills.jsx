import React from 'react';
import { Cpu } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

export function Skills() {
  const skillsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header reveal-child">
          <div className="section-pill">
            <Cpu size={14} className="pill-icon" />
            <span>Technical Stack</span>
          </div>
          <h2 className="skills-title">
            Skills &amp; <span className="title-gradient">Core Capabilities</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillsData.map((categoryGroup, idx) => (
            <div key={categoryGroup.category || idx} className="skill-category-card reveal-child">
              <div className="category-header">
                <h3 className="category-title">{categoryGroup.category}</h3>
                <span className="category-count">{categoryGroup.skills.length}</span>
              </div>
              <ul className="skills-pill-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-chip">
                    <span className="skill-chip-dot" aria-hidden="true" />
                    <span className="skill-chip-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
