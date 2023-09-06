import React from 'react';
import { Flex, Box, Heading, Text, Button, VStack, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';

interface AboutProps {
    scrollToRef: (ref: React.MutableRefObject<any>) => void;
    projectsRef: React.MutableRefObject<any>;
    experienceRef: React.MutableRefObject<any>;
    educationRef: React.MutableRefObject<any>;
}

const About: React.FC<AboutProps> = ({ scrollToRef, projectsRef, experienceRef, educationRef }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      // p={6}
      alignItems="flex-start"
      justifyContent="space-between"
      mx="auto"
      overflowX={{ base: "auto", md: "visible" }}  // Add this line
    >
        <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
          <HStack spacing={4} alignItems="center">
            <Box maxW="170px" maxH="170px">
              <ProfilePicture />
            </Box>
            <Box>
            <VStack spacing={4} alignItems="flex-start">
              <Heading as="h1" size="2xl">
                Iain Hoolahan
              </Heading>
              <Heading as="h2" size="xl">
                Full Stack Software Developer
              </Heading>
                        <HStack spacing={4}>
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
                </HStack>
            </Box>
        <Box flex="1" maxW={{ base: "100%", md: "50%" }} mt={{ base: '4', md: '0' }}>
                <Text mb={6}>
                    I am a full stack software developer with a background in civil engineering and a passion for problem solving, learning, building, and collaboration. I have recently enjoyed channelling this energy towards creating software solutions while completing the Makers Academy 4-month immersive coding bootcamp.
                </Text>
                <Text mb={6}>
                    I started my career as a civil engineer for one of the UK's largest main contractors and experienced working on two of the biggest and most technically challenging projects in the country. Following on from this, I co-founded a business providing project management services to private clients in the domestic construction sector. I am motivated by finding innovative solutions to problems and working with inspiring people which has drawn me towards the tech industry and coding.
                </Text>
            </Box>  
        </Flex>
    );
};

export default About;
