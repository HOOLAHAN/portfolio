// src/App.tsx
import './App.css';
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projectsData';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default App;
