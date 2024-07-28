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
            Hi, I'm Iain! A software engineer with a foundation in civil engineering and a robust track record of problem-solving,
            continuous learning, and collaborative innovation. Having transitioned from civil engineering to software development,
            my rigorous training at Makers Academy's 16-week coding bootcamp has greatly enhanced my technical skills, especially in
            Full Stack Development using technologies like React, Node.js, and AWS.
          </Text>
          <Text mb={6}>
            My career began in civil engineering, where I managed key aspects of major projects like the Hinkley Point C nuclear power
            station and Crossrail at Liverpool Street Station. Now in tech, I apply the same dedication to quality and innovation,
            developing applications like 'StratoStruct', a full-stack MERN app for construction product sourcing, and 'Tipsy Tourist',
            which integrates Google APIs for dynamic travel itineraries.
          </Text>
          <Text>
            I am particularly enthusiastic about joining a forward-thinking team, where I can contribute to creating cutting-edge software
            solutions and continue to grow both personally and professionally.
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
