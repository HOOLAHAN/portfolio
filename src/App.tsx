import React, { useState, useRef } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import projects, { Project } from './projectsData';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import About from './About';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';

const App: React.FC = () => {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

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

  const scrollToRef = (ref: React.MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider>
      <Box p="6">
        <About 
          scrollToRef={scrollToRef} 
          projectsRef={projectsRef} 
          experienceRef={experienceRef} 
          educationRef={educationRef} 
        />
        <Heading ref={projectsRef} size="lg" my="4">Projects</Heading>
        <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </Box>
        {showModal && selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
        <Heading ref={experienceRef} size="lg" my="4">Work Experience</Heading>
        <ExperienceCard />
        <Heading ref={educationRef} size="lg" my="4">Education</Heading>
        <EducationCard />
      </Box>
    </ChakraProvider>
  );
};

export default App;
