import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BioModal: React.FC<BioModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Text mt={6} mb={6}>
            Hi, I’m Iain — a ServiceNow consultant with a background in civil
            engineering and construction.
          </Text>
          <Text mb={6}>
            I started my career working on major infrastructure projects like
            Hinkley Point C and Crossrail, before moving into residential
            project management. More recently, I’ve transitioned into tech,
            delivering workflow automation and building digital solutions for
            enterprise clients.
          </Text>
          <Text>
            I’m at my best working between people and technology —
            understanding real-world problems and shaping practical,
            user-focused solutions, particularly within construction and related
            industries.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" size="sm" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BioModal;
