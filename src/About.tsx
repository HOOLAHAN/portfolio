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
            <Link href="https://github.com/HOOLAHAN" isExternal>
              <Button colorScheme="teal" leftIcon={<FaGithub />} size="sm">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/iain-hoolahan-a51a41b8/" isExternal>
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
              - Employment History
            </Button>
            <Button onClick={() => scrollToRef(educationRef)} variant="ghost" _hover={{ boxShadow: 'md' }}>
              - Education
            </Button>
          </Box>

        </VStack>
      </Box>

      {/* Bio section */}
      <Box flex="1" minW={{ lg: "50%" }}>
        <Text mb={6}>Hi, I'm Iain! A software engineer with a foudnation in civil engineering with a robust track record of problem-solving, continuous learning, and collaborative innovation. Having transitioned from civil engineering to software development, my rigorous training at Makers Academy's 16-week coding bootcamp has greatly enhanced my technical skills, especially in Full Stack Development using technologies like React, Node.js, and AWS.</Text>
        <Text mb={6}>My career began in civil engineering, where I managed key aspects of major projects like the Hinkley Point C nuclear power station and Crossrail at Liverpool Street Station. Now in tech, I apply the same dedication to quality and innovation, developing applications like 'StratoStruct', a full-stack MERN app for construction product sourcing, and 'Tipsy Tourist', which integrates Google APIs for dynamic travel itineraries.</Text>
        <Text mb={6}>I am particularly enthusiastic about joining a forward-thinking team, where I can contribute to creating cutting-edge software solutions and continue to grow both personally and professionally.</Text>
      </Box>
    </Flex>
  );
};

export default About;
