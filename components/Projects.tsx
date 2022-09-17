import { FC, useContext } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { UsersDataContext } from '../pages/_app';

const Gallery: FC = () => {
  // Hooks
  const { isLoading, isError, usersData } = useContext(UsersDataContext);
  const headingColor = useColorModeValue('teal.600', 'teal.200');

  // Main JSX
  return (
    <>
      {!isError && (
        <>
          {/* Loading State Component */}
          {isLoading && usersData.length <= 0 && (
            <Heading maxW='full' textAlign='center' mt='16'>
              Loading...
            </Heading>
          )}

          {/* After Loading */}

          {!isLoading && usersData && (
            <>
              <TableContainer
                maxW='900px'
                mx={{ base: '4', md: 'auto' }}
                border='1px solid'
                borderRadius='xl'
                pt='4'
                whiteSpace='pre-wrap'
              >
                <Table variant='simple' colorScheme='teal'>
                  {/* Table Head */}
                  <Thead>
                    <Tr>
                      <Th
                        color={headingColor}
                        textAlign={'center'}
                        fontSize='1.15rem'
                      >
                        Student
                      </Th>
                      <Th
                        color={headingColor}
                        textAlign={'center'}
                        fontSize='1.15rem'
                      >
                        PROJECT TOPIC
                      </Th>
                    </Tr>
                  </Thead>

                  {/* Table Body */}
                  <Tbody>
                    {usersData.map((eachData) => {
                      const { mat_no, project_topic, name } = eachData;

                      return (
                        <Tr key={name}>
                          <Td>
                            {name} <br />({mat_no.toUpperCase()})
                          </Td>
                          <Td>{project_topic}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Gallery;
