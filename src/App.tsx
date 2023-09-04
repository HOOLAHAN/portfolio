import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import projects, { Project } from './projectsData';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <ChakraProvider>
      <Box p="6">
        <Box display="flex" gridGap="4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </Box>
        {showModal && selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
