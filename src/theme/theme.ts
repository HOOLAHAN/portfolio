// theme.ts
import { extendTheme, type StyleFunctionProps, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
        color: mode('gray.800', 'gray.100')(props),
      },
    }),
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    brand: {
      50: '#e7f6f4',
      100: '#c3e6e0',
      200: '#9bd5ca',
      300: '#71c2b2',
      400: '#50b49f',
      500: '#2f9f89',
      600: '#237c6c',
      700: '#195d51',
      800: '#0f3e36',
      900: '#08251f',
    },
  },
  components: {
    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode('gray.900', 'white')(props),
      }),
    },
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'semibold',
      },
    },
  },
});

export default theme;
