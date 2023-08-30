// src/ProjectCard.tsx
import React from 'react';
import { Project } from './projectsData';

const ProjectCard: React.FC<Project> = ({ title, logo, description, url, technologies }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={title} className="thumbnail-logo" />
      </a>
      <p>{description}</p>
      <div className="preview-box">
        <iframe 
          src={url}
          title={title}
          width="100%"
          height="500"
        ></iframe>
      </div>
      <div className="card-footer">
        <div className="technologies">
          <strong>Technologies:</strong>
          <div>
            {technologies.map((tech, index) => (
              <span className="tech-tag" key={index}>{tech}</span>
            ))}
          </div>
        </div>
        <a className="visit-button" href={url} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
