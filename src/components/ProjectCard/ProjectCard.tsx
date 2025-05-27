import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Project } from '../../data/projectsData';
import { ViewIcon } from '@chakra-ui/icons';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Box
      padding={3}
      width="300px"
      maxWidth="100%"
      borderRadius="md"
      position="relative"
      onClick={onClick}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      justifyContent="top"
      alignItems="center"
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
        height="100px"
        objectFit="contain"
        bgColor="white"
        p={1}
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Text textAlign="center" fontSize="sm" mt={2}>{project.title} - {project.description}</Text>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        opacity="0"
      >
        <ViewIcon boxSize={6} />
      </Box>
    </Box>
  );
};

export default ProjectCard;
