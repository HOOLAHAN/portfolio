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
          Hi, I'm Iain! I’m a versatile and results-driven professional with a diverse background spanning civil engineering, project management, and software development. My career journey has seen me transition from delivering key infrastructure projects like Hinkley Point C and Crossrail to managing high-end bespoke residential projects for private clients at Harbour Contractors. More recently, I have applied my problem-solving skills to software development, completing intensive training at Makers Academy and building full-stack applications.
          </Text>
          <Text mb={6}>
          I thrive on tackling complex challenges, whether in engineering environments or through innovative software solutions. My technical toolkit spans project management, surveying, full-stack development, and client engagement, enabling me to approach problems with a unique blend of practical and technical perspectives.
          </Text>
          <Text>
          I’m passionate about joining forward-thinking teams where I can leverage my diverse skill set to drive results and continuously learn. I value collaboration and am committed to creating impactful solutions. 
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
