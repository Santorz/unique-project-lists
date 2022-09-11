import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import MainNav from '../components/MainNav';
import customTheme from '../theme';

// CSS
import '../theme/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MainNav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
