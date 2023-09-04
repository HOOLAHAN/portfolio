import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Link, Image } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import experienceData from './experienceData'; 

const ExperienceCard: React.FC = () => {
  return (
    <>
      {experienceData.map((experience, index) => (
        <Box borderWidth={1} borderRadius="md" p="4" mb="4" boxShadow="md" key={index}>
          <Box display="flex" alignItems="center" mb="2">
            {experience.logo && (
              <Image 
                src={experience.logo}
                alt={`${experience.company} logo`}
                maxH="30px"
                mr="4"
              />
            )}
            <Heading size="md">
              {experience.jobTitle}
            </Heading>
          </Box>
          <Text fontWeight="bold" mb="2">
            {experience.website ? (
              <Link href={experience.website} isExternal>
                {experience.company}
              </Link>
            ) : (
              experience.company
            )}
          </Text>
          <Text fontSize="sm" color="gray.500" mb="3">
            {experience.duration}
          </Text>
          <List spacing={2}>
            {experience.responsibilities.map((responsibility, idx) => (
              <ListItem key={idx}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {responsibility}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </>
  );
};

export default ExperienceCard;
