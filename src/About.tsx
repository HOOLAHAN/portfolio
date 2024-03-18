import React from 'react';
import { Flex, Box, Heading, Text, Button, VStack, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';
import { ColorModeSwitcher } from './ColorModeSwitcher';

interface AboutProps {
  scrollToRef: (ref: React.MutableRefObject<any>) => void;
  projectsRef: React.MutableRefObject<any>;
  experienceRef: React.MutableRefObject<any>;
  educationRef: React.MutableRefObject<any>;
}

const About: React.FC<AboutProps> = ({ scrollToRef, projectsRef, experienceRef, educationRef }) => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      alignItems="flex-start"
      justifyContent="flex-start"
      mx="auto"
      overflowX={{ base: "auto", lg: "visible" }}
      flexWrap="wrap"
    >
      <Box flex="1" maxW="550px"> 
        <VStack spacing={4} alignItems="flex-start">
          <HStack spacing={4} alignItems="center">
            <Box maxW="200px" maxH="200px">
              <ProfilePicture />
            </Box>
            <VStack spacing={4} alignItems="flex-start">
              <Heading as="h1" size="2xl">
                Iain Hoolahan
              </Heading>
              <Heading as="h2" size="xl">
                Software Engineer
              </Heading>
            </VStack>
          </HStack>

          {/* Links section */}
          <HStack spacing={4} flexWrap="wrap">
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
            <ColorModeSwitcher />
          </HStack>

          {/* Scroll to Section Buttons */}
          <Box>
            <Button onClick={() => scrollToRef(projectsRef)} variant="ghost" _hover={{ boxShadow: 'md' }}>
              - Projects
            </Button>
            <Button onClick={() => scrollToRef(experienceRef)} variant="ghost" _hover={{ boxShadow: 'md' }}>
              - Work Experience
            </Button>
            <Button onClick={() => scrollToRef(educationRef)} variant="ghost" _hover={{ boxShadow: 'md' }}>
              - Education
            </Button>
          </Box>

        </VStack>
      </Box>

      {/* Bio section */}
      <Box flex="1" minW={{ lg: "50%" }}>
        <Text mb={6}>I am a software engineer with a background in civil engineering and a passion for problem solving, continuous learning and collaborative innovation.</Text>
        <Text mb={6}>I started my career as a civil engineer for one of the UK's leading main contractors and experienced working on two major infrastructure projects (Crossrail and Hinkley Point C). Following on from this I co-founded a business providing project management services to private clients in the domestic construction sector, successfully delivering two new build projects in two years. I am motivated by finding innovative solutions to problems and collaborating with inspiring people which has drawn me towards the tech industry and coding.</Text>
        <Text mb={6}>After completing the Makers Academy 4-month immersive coding bootcamp, where I learnt the value of agile, test-driven development with object-oriented design, I am now looking to expand my software engineering experience.</Text>
      </Box>
    </Flex>
  );
};

export default About;
