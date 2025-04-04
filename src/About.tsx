import React, { useState } from 'react';
import { Flex, Box, Heading, Center, Button, VStack, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import BioModal from './BioModal';

const About: React.FC = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  const openBio = () => {
    setIsBioOpen(true);
  };

  const closeBio = () => {
    setIsBioOpen(false);
  };

  return (
    <Center>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        mx="auto"
        overflowX={{ base: 'auto', lg: 'visible' }}
        flexWrap="wrap"
      >
        <Box flex="1" maxW="550px">
          <Center>
            <VStack spacing={4} alignItems="center">
              <HStack spacing={4} alignItems="center">
                <Box maxW="200px" maxH="200px">
                  <ProfilePicture />
                </Box>
                <VStack spacing={4} alignItems="center">
                  <Heading as="h1" size={{ base: 'xl', md: '2xl' }}>
                    Iain Hoolahan
                  </Heading>
                </VStack>
              </HStack>
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
                <Button colorScheme="orange" size="sm" leftIcon={<FaInfoCircle />} onClick={openBio}>
                  Bio
                </Button>
                <ColorModeSwitcher />
              </HStack>
            </VStack>
          </Center>
        </Box>
      </Flex>
      <BioModal isOpen={isBioOpen} onClose={closeBio} />
    </Center>
  );
};

export default About;
