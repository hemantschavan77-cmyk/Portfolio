import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

export function Education() {
  const educationRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" className="education-section" ref={educationRef}>
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header reveal-child">
          <div className="section-pill">
            <GraduationCap size={14} className="pill-icon" />
            <span>Academic Journey</span>
          </div>
          <h2 className="education-title">
            Education &amp; <span className="title-gradient">Qualifications</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="education-timeline">
          <div className="timeline-track" aria-hidden="true" />

          <div className="timeline-items-list">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item reveal-child">
                {/* Timeline Node Indicator */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="node-outer">
                    <div className="node-inner" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h3 className="degree-title">{item.degree}</h3>
                    <div className="timeline-badges">
                      <span className="timeline-year-badge">
                        <Calendar size={13} />
                        <span>{item.yearOfPassing}</span>
                      </span>
                      <span className="timeline-score-badge">
                        <Award size={13} />
                        <span>{item.percentage}</span>
                      </span>
                    </div>
                  </div>
                  <p className="institution-name">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
