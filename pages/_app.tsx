import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import MainNav from '../components/MainNav';
import { useGetData } from '../hooks/useGetData';
import customTheme from '../theme';

// CSS
import '../theme/styles.css';

export const UsersDataContext = createContext<ReturnType<typeof useGetData>>({
  errorMsg: '',
  fetchUsersData: async () => {},
  isError: false,
  isLoading: true,
  usersData: [],
});

// Main APP conroller component
function MyApp({ Component, pageProps }: AppProps) {
  // Hooks
  const { errorMsg, fetchUsersData, isError, isLoading, usersData } =
    useGetData();

  // Main JSX
  return (
    <ChakraProvider theme={customTheme}>
      <MainNav />
      <UsersDataContext.Provider value={useGetData()}>
        <Component {...pageProps} />
      </UsersDataContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
