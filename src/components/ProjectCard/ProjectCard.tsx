import React from 'react';
import { Badge, Box, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Project } from '../../data/projectsData';
import { ViewIcon } from '@chakra-ui/icons';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const logoPanelBg = useColorModeValue('white', 'gray.400');
  const logoPanelBorder = useColorModeValue('gray.100', 'whiteAlpha.300');
  const mutedText = useColorModeValue('gray.600', 'gray.300');
  const summary =
    project.description.length > 96
      ? `${project.description.slice(0, 96).trim()}...`
      : project.description;

  return (
    <Box
      padding={4}
      width="100%"
      minH="290px"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      onClick={onClick}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      bg={cardBg}
      boxShadow="sm"
      transition="transform 160ms ease, box-shadow 160ms ease"
      _hover={{
        boxShadow: 'xl',
        transform: 'translateY(-3px)',
        "> div": {
          opacity: '1'
        }
      }}
    >
      <Image
        src={project.logo}
        alt={project.altTextLogo}
        objectFit="contain"
        bg={logoPanelBg}
        p={3}
        borderRadius="md"
        width="100%"
        height="120px"
        borderWidth="1px"
        borderColor={logoPanelBorder}
      />
      <Text fontWeight="bold" fontSize="lg" mt={4}>{project.title}</Text>
      <Text color={mutedText} fontSize="sm" mt={2} noOfLines={3}>
        {summary}
      </Text>
      <HStack spacing={2} flexWrap="wrap" mt="auto" pt={4}>
        {project.technologies.slice(0, 3).map((technology) => (
          <Badge key={technology} colorScheme="teal" variant="subtle" textTransform="none">
            {technology}
          </Badge>
        ))}
      </HStack>
      <Box
        position="absolute"
        top="14px"
        right="14px"
        opacity="0"
        color="teal.500"
      >
        <ViewIcon boxSize={6} />
      </Box>
    </Box>
  );
};

export default ProjectCard;
