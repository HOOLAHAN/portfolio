// src/ProjectCard.tsx

import React from 'react';
import { Project } from './projectsData';

const ProjectCard: React.FC<Project> = ({ title, imageUrl, description, url }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
