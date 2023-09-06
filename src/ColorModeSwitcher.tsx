import React from 'react';
import { Button, useColorMode, useColorModeValue, ButtonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface ColorModeSwitcherProps extends ButtonProps {
}

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark Mode', 'Light Mode');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Button
      colorScheme="yellow"
      leftIcon={<SwitchIcon />}
      size="sm"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      {...props}
    >
      {text}
    </Button>
  );
};
