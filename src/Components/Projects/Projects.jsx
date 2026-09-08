import React from 'react';
import { FolderGit2, ArrowUpRight, FolderCode } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

function GithubIcon({ size = 16, className = '' }) {
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

export function Projects() {
  const projectsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="projects-container">
        {/* Section Header */}
        <header className="projects-header reveal-child">
          <div className="section-pill">
            <FolderGit2 size={14} className="pill-icon" />
            <span>Featured Work</span>
          </div>
          <h2 className="projects-title">
            Recent Projects &amp; <span className="title-gradient">Applications</span>
          </h2>
        </header>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card reveal-child">
              {/* Card Top / Icon & Status */}
              <div className="project-card-top">
                <div className="project-icon-box" aria-hidden="true">
                  <FolderCode size={22} className="project-folder-icon" />
                </div>
                {project.liveDemoUrl && (
                  <span className="live-status-badge">
                    <span className="live-status-dot" aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="project-body">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              {/* Project Actions */}
              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>Code</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} className="btn-arrow-icon" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
