import { FC, useContext } from 'react';
import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import EachUserCard from './EachUserCard';
import { UsersDataContext } from '../pages/_app';

const Gallery: FC = () => {
  // Hooks
  const { isLoading, isError, usersData } = useContext(UsersDataContext);

  // Main JSX
  return (
    <>
      {!isError && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          w='full'
          spacingX={{ md: '20', lg: '12', xl: '10' }}
          spacingY='16'
          alignItems='center'
          justifyContent='space-evenly'
          px='10'
        >
          {/* Loading State Component */}
          {isLoading && usersData.length <= 0 && (
            <>
              {Array(9)
                .fill(0)
                .map((eachNum, index) => {
                  return (
                    <Skeleton
                      w='full'
                      maxW='350px'
                      mx='auto'
                      minH='200px'
                      rounded='md'
                      key={index}
                    />
                  );
                })}
            </>
          )}

          {/* After Loading */}

          {!isLoading && usersData && (
            <>
              {usersData.map((eachUserData) => {
                const { name } = eachUserData;

                return <EachUserCard key={name} {...eachUserData} />;
              })}
            </>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default Gallery;
