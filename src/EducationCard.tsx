import React from 'react';
import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import educationData from './educationData';

const EducationCard: React.FC = () => {
  return (
    <>
      {educationData.map((education, index) => (
        <Box borderWidth="1px" borderRadius="lg" padding="6" marginBottom="6" key={index}>
          <Text fontSize="2xl" fontWeight="bold">{education.institute}</Text>
          <Text fontSize="xl" marginBottom="2">{education.course}</Text>
          <Text fontSize="md" fontStyle="italic">{education.duration}</Text>
          <List spacing={2} marginTop="4">
            {education.content.map(([title, description], idx) => (
              <ListItem key={idx}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                <Text as="span" fontWeight="medium">{title}: </Text>
                {description}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </>
  );
};

export default EducationCard;
