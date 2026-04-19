import React from 'react';
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
  const modalBg = useColorModeValue('white', 'gray.800');
  const panelBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const mutedText = useColorModeValue('gray.600', 'gray.300');
  const projectImage = require(`../../projects/${project.image}`);

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
        src={projectImage}
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

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <ModalContent bg={modalBg} mx={4} overflow="hidden">
          <ModalCloseButton />
          <ModalBody p={0}>
            <Box position="relative">
              <Image
                src={projectImage}
                alt={project.projectName}
                height={{ base: '210px', md: '320px' }}
                width="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, blackAlpha.800, transparent 65%)"
              />
              <Box
                bottom={0}
                color="white"
                left={0}
                p={{ base: 5, md: 7 }}
                position="absolute"
                right={0}
              >
                <Badge colorScheme="teal" mb={3} textTransform="none">
                  Construction Project
                </Badge>
                <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
                  {project.projectName}
                </Heading>
              </Box>
            </Box>

            <Box p={{ base: 5, md: 7 }}>
              <Flex
                bg={panelBg}
                borderColor={borderColor}
                borderRadius="lg"
                borderWidth="1px"
                direction={{ base: 'column', md: 'row' }}
                gap={4}
                mb={6}
                p={4}
              >
                <HStack flex="1" spacing={3}>
                  <Box color="teal.500">
                    <FaBuilding />
                  </Box>
                  <Box>
                    <Text color={mutedText} fontSize="xs" fontWeight="bold" textTransform="uppercase">
                      Company
                    </Text>
                    <Text fontWeight="semibold">{company}</Text>
                  </Box>
                </HStack>
                <HStack flex="1" spacing={3}>
                  <Box color="teal.500">
                    <FaMapMarkerAlt />
                  </Box>
                  <Box>
                    <Text color={mutedText} fontSize="xs" fontWeight="bold" textTransform="uppercase">
                      Location
                    </Text>
                    <Text fontWeight="semibold">{project.location}</Text>
                  </Box>
                </HStack>
                <HStack flex="1" spacing={3}>
                  <Box color="teal.500">
                    <FaCalendarAlt />
                  </Box>
                  <Box>
                    <Text color={mutedText} fontSize="xs" fontWeight="bold" textTransform="uppercase">
                      Period
                    </Text>
                    <Text fontWeight="semibold">
                      {project.startDate} - {project.endDate}
                    </Text>
                  </Box>
                </HStack>
              </Flex>

              <Heading as="h3" size="sm" mb={3}>
                Project Detail
              </Heading>
              <Text color={mutedText} fontSize={{ base: 'md', md: 'lg' }}>
                {project.details}
              </Text>
              <Divider mt={6} />
            </Box>
          </ModalBody>
          <ModalFooter borderTopWidth="1px" borderColor={borderColor}>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConstructionProjectCard;
