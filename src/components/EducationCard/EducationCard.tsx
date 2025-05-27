import { Box, Heading, Text, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import educationData from '../../data/educationData';

const EducationCard: React.FC = () => {
  return (
    <>
      {educationData.map((education, index) => (
        <Box borderWidth={1} borderRadius="md" p="4" mb="4" boxShadow="md" key={index}>
          <Box display="flex" alignItems="center" mb="2">
            {education.logo && (
              <Image 
                src={education.logo}
                alt={`${education.institute} logo`}
                maxH="30px"
                mr="4"
              />
            )}
            <Heading size="md">
              {education.course}
            </Heading>
          </Box>
          <Text fontWeight="bold" mb="2">
            {education.institute}
          </Text>
          <Text fontSize="sm" color="gray.500" mb="3">
            {education.duration}
          </Text>
          <List spacing={2}>
            {education.content.map(([title, description], idx) => (
              <ListItem key={idx}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
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
