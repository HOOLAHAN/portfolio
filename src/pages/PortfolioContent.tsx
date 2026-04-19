import React, { useState, useRef } from 'react';
import {
  Box,
  Heading,
  Center,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import projects, { Project } from '../data/projectsData';
import constructionProjects from '../data/constructionProjectsData';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ConstructionProjectCard from '../components/ConstructionProjectCard/ConstructionProjectCard';
import Modal from '../components/Modal/Modal';
import About from '../components/About/About';
import ServiceNowExperience from '../components/ServiceNowExperience/ServiceNowExperience';

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
      <Box px={{ base: 4, md: 8 }} py={{ base: 5, md: 8 }} maxWidth={1440} mx="auto" bg="transparent">
        <About />

        <VStack as="section" align="stretch" spacing={5} mt={{ base: 8, md: 12 }}>
          <Box textAlign="center">
            <Heading size="lg">ServiceNow Experience</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')} mt={2}>
              Current consulting work across enterprise workflow automation, platform configuration, and stakeholder delivery.
            </Text>
          </Box>
          <ServiceNowExperience />
        </VStack>

        <VStack as="section" align="stretch" spacing={5} mt={{ base: 8, md: 12 }}>
          <Box textAlign="center">
            <Heading ref={projectsRef} size="lg">Software Projects</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')} mt={2}>
              Selected web applications and side projects demonstrating practical full-stack delivery.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={5}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </SimpleGrid>
        </VStack>

        <VStack as="section" align="stretch" spacing={6} mt={{ base: 10, md: 14 }}>
          <Box textAlign="center">
            <Heading ref={projectsRef} size="lg">Construction Foundation</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')} mt={2}>
              Infrastructure, engineering, surveying, and project management experience.
            </Text>
          </Box>
          {constructionProjects.map((company, companyIndex) => (
            <Box key={companyIndex} mb={6}>
              <Center>
                <Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>
                  {company.company}
                </Text>
              </Center>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={5}>
                {company.projects.map((project, projectIndex) => (
                  <ConstructionProjectCard
                    key={`${companyIndex}-${projectIndex}`}
                    project={project}
                    company={company.company}
                  />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </VStack>

        {showModal && selectedProject && (
          <Modal project={selectedProject} onClose={handleCloseModal} />
        )}
      </Box>
    </Box>
  );
};

export default PortfolioContent;
