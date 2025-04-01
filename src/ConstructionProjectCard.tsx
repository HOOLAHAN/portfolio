import React from 'react';
import { Box, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

interface ConstructionProjectCardProps {
  project: {
    projectName: string;
    image: string;
    startDate: string;
    endDate: string;
    location: string;
    details: string;
  };
  company: string;
}

const ConstructionProjectCard: React.FC<ConstructionProjectCardProps> = ({ project, company }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      padding={3}
      width="300px"
      maxWidth="100%"
      borderRadius="md"
      position="relative"
      onClick={onOpen}
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
        src={require(`./projects/${project.image}`)}
        alt={project.projectName}
        height="100px"
        objectFit="contain"
        bgColor="white"
        p={1}
        borderRadius="md"
      />
      <Text>{project.projectName} - {project.location}</Text>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        opacity="0"
      >
        <ViewIcon boxSize={6} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.projectName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text><strong>Company:</strong> {company}</Text>
            <Text><strong>Location:</strong> {project.location}</Text>
            <Text><strong>Start Date:</strong> {project.startDate}</Text>
            <Text><strong>End Date:</strong> {project.endDate}</Text>
            <Text><strong>Details:</strong> {project.details}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConstructionProjectCard;