// ProfilePicture component
import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import headshot from '../../logos/Headshot.png';

const ProfilePicture: React.FC = () => {
    return (
      <Box
      w={{ base: '100px', md: '200px' }}
      h={{ base: '100px', md: '200px' }}
      borderRadius="full"
      overflow="hidden"
      boxShadow="md"
      >
        <Image
            src={headshot}
            alt="Profile Picture"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="full"
        />
        </Box>
    );
};

export default ProfilePicture;

