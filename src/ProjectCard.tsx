import React from 'react';
import { Project } from './projectsData';

const ProjectCard: React.FC<Project> = ({ title, logo, description, url, client_repo, server_repo, technologies }) => {
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
        {client_repo && client_repo.length > 3 && (
          <a className="visit-button" href={client_repo} target="_blank" rel="noopener noreferrer">
            Client Repo
          </a>
        )}
        {server_repo && server_repo.length > 3 && (
          <a className="visit-button" href={server_repo} target="_blank" rel="noopener noreferrer">
            Server Repo
          </a>
        )}
        <a className="visit-button" href={url} target="_blank" rel="noopener noreferrer">
          Visit Web Page
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
