import React, { useState, useRef } from 'react';
import { ChakraProvider, Box, Heading, extendTheme, Center, Text } from '@chakra-ui/react';
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
        {constructionProjects.map((company, companyIndex) => (
          <Box key={companyIndex} mb={6}>
            <Center><Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>{company.company}</Text></Center>
            <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
              {company.projects.map((project, projectIndex) => (
                <ConstructionProjectCard
                  key={`${companyIndex}-${projectIndex}`}
                  project={project}
                  company={company.company}
                />
              ))}
            </Box>
          </Box>
        ))}
        
        {showModal && selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
