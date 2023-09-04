import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import experienceData from './experienceData'; 

const ExperienceCard: React.FC = () => {
  return (
    <>
      {experienceData.map((experience, index) => (
        <Box borderWidth={1} borderRadius="md" p="4" mb="4" boxShadow="md" key={index}>
          <Heading size="md" mb="2">
            {experience.jobTitle}
          </Heading>
          <Text fontWeight="bold" mb="2">
            {experience.company}
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
