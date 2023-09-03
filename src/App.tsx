// src/App.tsx
import './App.css';
import React, { useEffect } from 'react'; // Import useEffect
import ProjectCard from './ProjectCard';
import projects from './projectsData';

const App: React.FC = () => {

  useEffect(() => {
    document.title = 'Iain Hoolahan';
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
