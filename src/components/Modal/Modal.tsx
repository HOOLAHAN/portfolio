import React from 'react';
import { Project } from '../../data/projectsData';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Tag,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

type ModalProps = {
  project: Project;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const contentBg = useColorModeValue('white', 'gray.800');
  const panelBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const logoPanelBg = useColorModeValue('white', 'gray.400');
  const logoPanelBorder = useColorModeValue('gray.100', 'whiteAlpha.300');
  const mutedText = useColorModeValue('gray.600', 'gray.300');
  const hasPreview = project.url !== 'N/A';
  const hasScreenshots = Boolean(project.screenshots?.length);
  const hasProjectLinks = hasPreview || project.client_repo !== 'N/A' || project.server_repo !== 'N/A';

  const navigateToLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ChakraModal isOpen={true} onClose={onClose} size="5xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent bg={contentBg} mx={4} overflow="hidden">
        <ModalCloseButton />
        <ModalBody p={0}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 5, md: 6 }}
            p={{ base: 5, md: 7 }}
            borderBottomWidth="1px"
            borderColor={borderColor}
          >
            <Flex
              align="center"
              justify="center"
              bg={logoPanelBg}
              borderColor={logoPanelBorder}
              borderRadius="lg"
              borderWidth="1px"
              flexShrink={0}
              h={{ base: '140px', md: '170px' }}
              p={4}
              w={{ base: '100%', md: '220px' }}
            >
              <Image
                src={project.logo}
                alt={project.altTextLogo}
                maxH="100%"
                maxW="100%"
                objectFit="contain"
              />
            </Flex>
            <Box flex="1" pr={{ base: 8, md: 10 }}>
              <Badge colorScheme="teal" mb={3} textTransform="none">
                Project Detail
              </Badge>
              <Heading as="h2" size="xl" mb={3}>
                {project.title}
              </Heading>
              <Text color={mutedText} fontSize={{ base: 'md', md: 'lg' }}>
                {project.description}
              </Text>
              {hasProjectLinks ? (
                <HStack spacing={3} flexWrap="wrap" mt={5}>
                  {hasPreview && (
                    <Button
                      colorScheme="teal"
                      leftIcon={<ExternalLinkIcon />}
                      size="sm"
                      onClick={() => navigateToLink(project.url)}
                    >
                      Web Page
                    </Button>
                  )}
                  {project.client_repo !== 'N/A' && (
                    <Button
                      colorScheme="gray"
                      leftIcon={<FaGithub />}
                      size="sm"
                      onClick={() => navigateToLink(project.client_repo)}
                    >
                      Client Repo
                    </Button>
                  )}
                  {project.server_repo !== 'N/A' && (
                    <Button
                      colorScheme="gray"
                      leftIcon={<FaGithub />}
                      size="sm"
                      onClick={() => navigateToLink(project.server_repo)}
                    >
                      Server Repo
                    </Button>
                  )}
                </HStack>
              ) : (
                <Badge colorScheme="gray" mt={5} px={3} py={1} textTransform="none">
                  Private repository
                </Badge>
              )}
            </Box>
          </Flex>

          <Box p={{ base: 5, md: 7 }}>
            <Box mb={6}>
              <Heading as="h3" size="sm" mb={3}>
                Technologies
              </Heading>
              <Wrap>
                {project.technologies.map((tech, index) => (
                  <WrapItem key={index}>
                    <Tag size="md" variant="subtle" colorScheme="teal">
                      {tech}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {hasPreview && (
              <Box mb={6}>
                <Heading as="h3" size="sm" mb={3}>
                  Website Preview
                </Heading>
                <Box
                  bg={panelBg}
                  borderColor={borderColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  overflow="hidden"
                >
                  <iframe
                    src={project.url}
                    title={project.title}
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block' }}
                  />
                </Box>
              </Box>
            )}

            {!hasPreview && hasScreenshots && (
              <Box mb={6}>
                <Heading as="h3" size="sm" mb={3}>
                  App Screens
                </Heading>
                <Box
                  bg={panelBg}
                  borderColor={borderColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  overflowX="auto"
                  p={4}
                >
                  <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    minW={{ base: 'auto', md: '720px' }}
                    spacing={4}
                  >
                    {project.screenshots?.map((screenshot) => (
                      <Box
                        key={screenshot.src}
                        bg="black"
                        borderColor={borderColor}
                        borderRadius="2xl"
                        borderWidth="1px"
                        overflow="hidden"
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width="100%"
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
            )}

            <Divider mb={6} />

            <Box>
              <Heading as="h3" size="sm" mb={3}>
                Features
              </Heading>
              <Accordion allowToggle borderColor={borderColor}>
                {project.features.map((feature, index) => (
                  <AccordionItem key={index}>
                    <AccordionButton px={0}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {feature[0]}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel color={mutedText} px={0} pb={4}>
                      {feature[1]}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter borderTopWidth="1px" borderColor={borderColor}>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
