import React, { useState, useRef } from 'react';
import { ChakraProvider, Box, Heading, extendTheme, Center } from '@chakra-ui/react';
import projects, { Project } from './projectsData';
import constructionProjects from './constructionProjectsData';
import ProjectCard from './ProjectCard';
import ConstructionProjectCard from './ConstructionProjectCard';
import Modal from './Modal';
import About from './About';

const theme = extendTheme({});

const App: React.FC = () => {
  const projectsRef = useRef(null);
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
    <ChakraProvider theme={theme}>
      <Box p="6" maxWidth={1600} mx="auto">
        <About />
        <Center><Heading ref={projectsRef} my={4} size="lg">Projects</Heading></Center>
        <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </Box>
        
        <Center><Heading ref={projectsRef} my={4} size="lg">Construction Projects</Heading></Center>
        <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
          {constructionProjects.map((company, companyIndex) =>
            company.projects.map((project, projectIndex) => (
              <ConstructionProjectCard
                key={`${companyIndex}-${projectIndex}`}
                project={project}
                company={company.company}
              />
            ))
          )}
        </Box>
        
        {showModal && selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
