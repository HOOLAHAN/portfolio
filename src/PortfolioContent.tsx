import React, { useState, useRef } from 'react';
import {
  Box,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import projects, { Project } from './projectsData';
import constructionProjects from './constructionProjectsData';
import ProjectCard from './ProjectCard';
import ConstructionProjectCard from './ConstructionProjectCard';
import Modal from './Modal';
import About from './About';

const PortfolioContent: React.FC = () => {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const backgroundImage = useColorModeValue(
    "url('/background_light.png')",
    "url('/background_dark.png')"
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundAttachment="fixed"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
    >
      <Box p="6" maxWidth={1600} mx="auto" bg="transparent">
        <About />

        <Center><Heading ref={projectsRef} my={4} size="lg">Software Projects</Heading></Center>
        <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </Box>

        <Center><Heading ref={projectsRef} my={4} size="lg">Construction Projects</Heading></Center>
        {constructionProjects.map((company, companyIndex) => (
          <Box key={companyIndex} mb={6}>
            <Center>
              <Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>
                {company.company}
              </Text>
            </Center>
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

        {showModal && selectedProject && (
          <Modal project={selectedProject} onClose={handleCloseModal} />
        )}
      </Box>
    </Box>
  );
};

export default PortfolioContent;
