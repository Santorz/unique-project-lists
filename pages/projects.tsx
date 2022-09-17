import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Heading } from '@chakra-ui/react';
import ProjectsComponent from '../components/Projects';

const Projects: NextPage = () => {
  // Main JSX
  return (
    <>
      <Head>
        <title>User&apos;s Projects </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container w='full' maxW='full' px='0'>
        <Heading size='lg' as='h1' textAlign='center' pt='4' pb='12'>
          Users&apos; Projects
        </Heading>
        <ProjectsComponent />
      </Container>
    </>
  );
};

export default Projects;
