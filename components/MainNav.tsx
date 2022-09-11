import { FC, ReactNode } from 'react';
import {
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  useColorModeValue,
  useColorMode,
  Switch,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNav: FC = () => {
  // Hooks

  const { toggleColorMode, colorMode } = useColorMode();

  // Vars
  const isDarkMode = colorMode === 'dark';

  // Main JSX
  return (
    <Flex
      alignItems='center'
      as='nav'
      justify={{ base: 'space-between', md: 'space-around' }}
      py='4'
      px={{ base: '4', md: '0' }}
      shadow={isDarkMode ? 'dark-lg' : 'lg'}
    >
      {/* Navigation Section */}
      <HStack gap={{ base: '.25rem', md: '3rem' }}>
        {[
          { name: `Users' Gallery`, href: `/` },
          { name: `Projects`, href: `/projects` },
        ].map(({ name, href }, index) => {
          return (
            <ActiveLink key={`${name}${index}`} href={href}>
              {name}
            </ActiveLink>
          );
        })}
      </HStack>
      {/*  */}

      {/* Dark Mode Switch */}
      <HStack>
        <Heading size='sm'>Light</Heading>
        <Switch
          onChange={() => {
            toggleColorMode();
          }}
          colorScheme='teal'
          isChecked={isDarkMode}
        />
        <Heading size='sm'>Dark</Heading>
      </HStack>
    </Flex>
  );
};

// ActiveLink Component
const ActiveLink: FC<{ href: string; children?: ReactNode }> = ({
  href,
  children,
}) => {
  // Hooks
  const { asPath } = useRouter();
  const linkColor = useColorModeValue('teal.600', 'teal.200');

  // Vars
  const isCurrentPath = asPath === href;

  // Main JSX
  return (
    <Link href={href} passHref>
      <ChakraLink
        color={linkColor}
        fontWeight={isCurrentPath ? 'semibold' : 'normal'}
        borderBottom={isCurrentPath ? '1px solid' : ''}
        pb='1'
      >
        <Heading fontSize='1.15rem' as='h3'>
          {children}
        </Heading>
      </ChakraLink>
    </Link>
  );
};

// Main Export
export default MainNav;
