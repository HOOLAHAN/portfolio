import React from 'react';
import {
  Badge,
  Box,
  HStack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
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
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const mutedText = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box
      padding={4}
      width="100%"
      minH="315px"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      onClick={onOpen}
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
        src={require(`../../projects/${project.image}`)}
        alt={project.projectName}
        height="150px"
        width="100%"
        objectFit="cover"
        bgColor="white"
        borderRadius="md"
      />
      <Text fontWeight="bold" fontSize="md" mt={4}>{project.projectName}</Text>
      <Text color={mutedText} fontSize="sm" mt={1}>{project.location}</Text>
      <HStack spacing={2} flexWrap="wrap" mt="auto" pt={4}>
        <Badge colorScheme="blue" variant="subtle" textTransform="none">
          {company}
        </Badge>
        <Badge colorScheme="gray" variant="subtle" textTransform="none">
          {project.startDate} - {project.endDate}
        </Badge>
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

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>{project.projectName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={1}><strong>Company:</strong> {company}</Text>
            <Text mb={1}><strong>Location:</strong> {project.location}</Text>
            <Text mb={1}><strong>Start Date:</strong> {project.startDate}</Text>
            <Text mb={4}><strong>End Date:</strong> {project.endDate}</Text>
            <Text>{project.details}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConstructionProjectCard;
