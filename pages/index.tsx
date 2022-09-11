import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Heading } from '@chakra-ui/react';
import Gallery from '../components/Gallery';

const Home: NextPage = () => {
  // Main JSX
  return (
    <>
      <Head>
        <title>User&apos;s Gallery </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container w='full' maxW='full' px='0'>
        <Heading size='lg' as='h1' textAlign='center' pt='4' pb='12'>
          Users&apos; Gallery
        </Heading>
        <Gallery />
      </Container>
    </>
  );
};

export default Home;
