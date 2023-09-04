import React from 'react';
import { Project } from './projectsData'; // Import the Project type
import {
  Box,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

type ModalProps = {
  project: Project; // Use the Project type here
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    <ChakraModal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>{project.description}</Text>
          <Text fontWeight="bold">Technologies Used:</Text>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <Box mt={4}>
            <Text fontWeight="bold">Link:</Text>
            <Link href={project.url} isExternal>
              Visit the project
            </Link>
          </Box>
          <Box mt={4}>
            <Text fontWeight="bold">Website Preview:</Text>
            <iframe
              src={project.url}
              title={project.title}
              width="100%"
              height="300"
              style={{ border: '1px solid #ccc' }}
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
