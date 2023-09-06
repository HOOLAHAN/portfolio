// ProfilePicture component
import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import headshot from './logos/Headshot.png';

const ProfilePicture: React.FC = () => {
    return (
      <Box>
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

