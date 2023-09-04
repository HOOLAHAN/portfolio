import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa'; 
import { Project } from './projectsData';


type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Box 
      position="relative" 
      onClick={onClick} 
      cursor="pointer"
      _hover={{ 
        boxShadow: 'lg', 
        "> div": {
          opacity: '1'
        }
      }}
    >
      <Image 
        src={project.logo} 
        alt={project.altTextLogo} 
        width="200px" 
        height="200px" 
        objectFit="contain"
      />
      <Text>{project.title}</Text>
      <Box 
        position="absolute" 
        top="10px" 
        right="10px" 
        opacity="0"
      >
        <FaEye size={24} />
      </Box>
    </Box>
  );
};

export default ProjectCard;
