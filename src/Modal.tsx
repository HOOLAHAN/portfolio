import React from 'react';
import { Project } from './projectsData';
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
  Button,
  Tag,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

type ModalProps = {
  project: Project;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {

  const navigateToLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ChakraModal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="800px" maxWidth="90%">
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>{project.description}</Text>
          <Text fontWeight="bold" mb={2}>Technologies Used:</Text>
          <Wrap>
            {project.technologies.map((tech, index) => (
              <WrapItem key={index}>
                <Tag size="md" variant="solid" colorScheme="blue">
                  {tech}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Links:</Text>
            {project.url !== "N/A" && (
              <Button mr={2} mb={2} size="sm" colorScheme="blue" onClick={() => navigateToLink(project.url)}>
                Web Page
              </Button>
            )}
            {project.client_repo !== "N/A" && (
              <Button mr={2} mb={2} size="sm" colorScheme="green" onClick={() => navigateToLink(project.client_repo)}>
                Github Repo - Client
              </Button>
            )}
            {project.server_repo !== "N/A" && (
              <Button mr={2} mb={2} size="sm" colorScheme="teal" onClick={() => navigateToLink(project.server_repo)}>
                Github Repo - Server
              </Button>
            )}
          </Box>
          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Website Preview:</Text>
            <iframe
              src={project.url}
              title={project.title}
              width="100%"
              height="300"
              style={{ border: '1px solid #ccc' }}
            />
          </Box>
          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Features:</Text>
            <Accordion allowToggle>
              {project.features.map((feature, index) => (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {feature[0]}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {feature[1]}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
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
