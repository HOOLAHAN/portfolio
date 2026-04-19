import React from 'react';
import {
  Badge,
  Box,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaCertificate, FaCloud, FaUsersCog } from 'react-icons/fa';
import {
  serviceNowCertifications,
  serviceNowExperience,
} from '../../data/serviceNowData';

const ServiceNowExperience: React.FC = () => {
  const panelBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const mutedText = useColorModeValue('gray.600', 'gray.300');

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
      <Box
        bg={panelBg}
        borderColor={borderColor}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="sm"
        p={{ base: 5, md: 6 }}
      >
        <HStack spacing={3} mb={4}>
          <Box color="teal.500">
            <FaCloud />
          </Box>
          <Box>
            <Heading as="h3" size="md">
              {serviceNowExperience.role}
            </Heading>
            <Text color={mutedText} fontSize="sm">
              {serviceNowExperience.company} | {serviceNowExperience.duration}
            </Text>
          </Box>
        </HStack>
        <Text color={mutedText} mb={4}>
          {serviceNowExperience.summary}
        </Text>
        <List spacing={3}>
          {serviceNowExperience.highlights.map((highlight) => (
            <ListItem key={highlight} display="flex">
              <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
              <Text>{highlight}</Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <VStack align="stretch" spacing={5}>
        <Box
          bg={panelBg}
          borderColor={borderColor}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="sm"
          p={{ base: 5, md: 6 }}
        >
          <HStack spacing={3} mb={4}>
            <Box color="teal.500">
              <FaCertificate />
            </Box>
            <Heading as="h3" size="md">
              Certifications
            </Heading>
          </HStack>
          <VStack align="stretch" spacing={3}>
            {serviceNowCertifications.mainline.map((certification) => (
              <Badge
                key={certification}
                alignSelf="flex-start"
                colorScheme="teal"
                fontSize="sm"
                px={3}
                py={1}
                textTransform="none"
                whiteSpace="normal"
              >
                {certification}
              </Badge>
            ))}
          </VStack>
        </Box>

        <Box
          bg={panelBg}
          borderColor={borderColor}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="sm"
          p={{ base: 5, md: 6 }}
        >
          <HStack spacing={3} mb={4}>
            <Box color="teal.500">
              <FaUsersCog />
            </Box>
            <Heading as="h3" size="md">
              Micro-Certifications
            </Heading>
          </HStack>
          <HStack spacing={2} flexWrap="wrap">
            {serviceNowCertifications.micro.map((certification) => (
              <Badge
                key={certification}
                colorScheme="gray"
                mb={2}
                px={3}
                py={1}
                textTransform="none"
              >
                {certification}
              </Badge>
            ))}
          </HStack>
        </Box>
      </VStack>
    </SimpleGrid>
  );
};

export default ServiceNowExperience;
