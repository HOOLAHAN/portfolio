import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Link,
  HStack,
  Text,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInfoCircle, FaTools } from 'react-icons/fa';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import BioModal from '../BioModal/BioModal';

const About: React.FC = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  const openBio = () => {
    setIsBioOpen(true);
  };

  const closeBio = () => {
    setIsBioOpen(false);
  };

  return (
    <Box
      as="section"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.500')}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'none')}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'stretch' }}
        justifyContent="space-between"
        gap={{ base: 8, lg: 12 }}
      >
        <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={5} maxW="680px">
          <Badge
            colorScheme="teal"
            px={3}
            py={1}
            borderRadius="md"
            textTransform="none"
            fontSize="sm"
          >
            ServiceNow Consultant
          </Badge>
          <Heading
            as="h1"
            size={{ base: '2xl', md: '3xl' }}
            lineHeight="1.05"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Iain Hoolahan
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.700', 'gray.200')}
            maxW="620px"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Bridging construction experience and enterprise workflow automation
            to shape practical, user-focused digital solutions.
          </Text>
          <HStack spacing={3} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
            {['Workflow automation', 'Construction', 'Enterprise delivery'].map((tag) => (
              <Badge
                key={tag}
                variant="subtle"
                colorScheme="gray"
                px={3}
                py={1}
                borderRadius="md"
                textTransform="none"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
          <HStack spacing={3} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
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

        <Flex
          direction="column"
          align="center"
          justify="center"
          minW={{ base: 'auto', lg: '280px' }}
          gap={4}
        >
          <Box
            width={{ base: '180px', md: '220px' }}
            height={{ base: '180px', md: '220px' }}
          >
            <ProfilePicture />
          </Box>
          <HStack
            spacing={2}
            color={useColorModeValue('gray.600', 'gray.300')}
            fontSize="sm"
            fontWeight="medium"
          >
            <FaTools />
            <Text>People, process, and technology</Text>
          </HStack>
        </Flex>
      </Flex>
      <BioModal isOpen={isBioOpen} onClose={closeBio} />
    </Box>
  );
};

export default About;
