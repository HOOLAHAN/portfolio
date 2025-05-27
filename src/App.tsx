import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import PortfolioContent from './PortfolioContent';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <PortfolioContent />
    </ChakraProvider>
  );
};

export default App;
