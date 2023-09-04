import React from 'react';
import { Flex, Box, Heading, Text, Button, HStack, Link, useBreakpointValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

interface AboutProps {
  scrollToRef: (ref: React.MutableRefObject<any>) => void;
  projectsRef: React.MutableRefObject<any>;
  experienceRef: React.MutableRefObject<any>;
  educationRef: React.MutableRefObject<any>;
}

const About: React.FC<AboutProps> = ({ scrollToRef, projectsRef, experienceRef, educationRef }) => {
  const layoutDirection = useBreakpointValue({ base: 'column', md: 'row' }) as 'column' | 'row' | undefined;

  return (
    <Flex direction={layoutDirection} p={8}>
      <Box flex="1">
        <Heading as="h1" size="2xl" mb={4}>
          Iain Hoolahan
        </Heading>
        <Heading as="h2" size="xl" mb={4}>
          Full Stack Software Developer
        </Heading>
        <HStack spacing={4} mb={6}>
          <Link href="https://github.com/your_github_username" isExternal>
            <Button colorScheme="teal" leftIcon={<FaGithub />} size="sm">
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/your_linkedin_username/" isExternal>
            <Button colorScheme="blue" leftIcon={<FaLinkedin />} size="sm">
              LinkedIn
            </Button>
          </Link>
          <Link href="/Iain_Hoolahan_CV.pdf" isExternal target="_blank" rel="noopener noreferrer">
            <Button colorScheme="purple" leftIcon={<FaFilePdf />} size="sm">
              CV
            </Button>
          </Link>
        </HStack>
        <Box>
          <Button
            onClick={() => scrollToRef(projectsRef)}
            variant="ghost"
            _hover={{ boxShadow: 'md' }}
          >
            - Projects
          </Button>
          <Button
            onClick={() => scrollToRef(experienceRef)}
            variant="ghost"
            _hover={{ boxShadow: 'md' }}
          >
            - Work Experience
          </Button>
          <Button
            onClick={() => scrollToRef(educationRef)}
            variant="ghost"
            _hover={{ boxShadow: 'md' }}
          >
            - Education
          </Button>
        </Box>
      </Box>
      <Box flex="2" mt={{ base: '4', md: '0' }}>
        <Text mb={6}>
          I am a full stack software developer with a background in civil engineering and a passion for problem solving, learning, building and collaboration. I have recently enjoyed channelling this energy towards creating software solutions while completing the Makers Academy 4-month immersive coding bootcamp.
        </Text>
        <Text mb={6}>
          I started my career as a civil engineer for one of the UK's largest main contractors and experienced working on two of the biggest and most technically challenging projects in the country. Following on from this I co-founded a business providing project management services to private clients in the domestic construction sector. I am motivated by finding innovative solutions to problems and working with inspiring people which has drawn me towards the tech industry and coding.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
