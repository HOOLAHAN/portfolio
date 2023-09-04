import { Box, Image } from "@chakra-ui/react";
import React from 'react';
import { Project } from './projectsData';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <Box onClick={onClick} borderWidth="1px" borderRadius="lg" p="6">
      <Image src={project.logo} alt={project.altTextLogo} />
    </Box>
  );
}

export default ProjectCard;
