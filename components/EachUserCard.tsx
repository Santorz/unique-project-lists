import { FC, useEffect, useMemo, useState } from 'react';
import {
  chakra,
  Flex,
  Heading,
  layout,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { usersDataType } from '../hooks/useGetData';
import useResponsiveSSR from '../utils/useResponsiveSSR';

const CustomImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      layout,
    ].includes(prop),
});

const EachUserCard: FC<usersDataType> = (props) => {
  // Props
  const { image_name, Sex, name, mat_no, phone_number } = props;

  //   Hooks
  const { isMobile } = useResponsiveSSR();
  const linkColor = useColorModeValue('teal.600', 'teal.200');

  //   Vars
  const img_path = useMemo(() => {
    const half_path = `/media/users`;
    return image_name.length > 2
      ? `${half_path}/${image_name}`
      : Sex.toLowerCase().trim() === 'm'
      ? `${half_path}/default-male.jpg`
      : `${half_path}/default-female.png`;
  }, [Sex, image_name]);

  // States
  const [{ height, width }, setDimensions] = useState<{
    height: number | null;
    width: number | null;
  }>({ height: null, width: null });

  //   Determine width and Height
  useEffect(() => {
    const img = new window.Image();
    img.src = img_path;

    img.onload = () => {
      setDimensions({
        height: img.height,
        width: img.width,
      });
    };
  }, [img_path]);

  // Vars
  const showInfoBool = height && width;
  const isHorizontal = width !== null && height !== null && width >= height;
  const isVertical = width !== null && height !== null && width < height;

  // Main JSX
  return (
    <>
      {showInfoBool && (
        <Flex
          w={isHorizontal ? 'full' : 'auto'}
          border='2px solid'
          rounded='xl'
          borderColor={linkColor}
          mx='auto'
          direction={isHorizontal ? 'column' : isVertical ? 'row' : 'column'}
        >
          <CustomImage
            borderTopLeftRadius={isHorizontal || isVertical ? 'xl' : ''}
            borderTopRightRadius={isHorizontal ? 'xl' : ''}
            borderBottomLeftRadius={isVertical ? 'xl' : ''}
            loading='lazy'
            src={img_path}
            alt={`${name} profile image`}
            width={isHorizontal ? (isMobile ? 240 : 270) : isMobile ? 160 : 180}
            height={
              isHorizontal ? (isMobile ? 160 : 180) : isMobile ? 240 : 270
            }
            objectFit='cover'
            layout='fixed'
            objectPosition={isHorizontal ? 'center 12.5%' : 'center'}
          />

          <VStack
            spacing='2'
            w={isVertical ? '50%' : 'full'}
            px={isVertical ? '2' : '1'}
            py={isVertical ? '2' : '3'}
            justifyContent='center'
          >
            {/* Name Field */}
            <Heading
              alignSelf='start'
              textTransform='capitalize'
              pb='3'
              fontSize='1.2rem'
            >
              {name.trim()}
            </Heading>

            {/* Matric Number */}
            <Heading
              alignSelf='start'
              fontWeight='normal'
              textAlign='left'
              fontSize='1rem'
            >
              {isVertical
                ? `Matric. Number :
                ${mat_no.toUpperCase()}
               `
                : ''}
              {isHorizontal ? `Matric. Number : ${mat_no.toUpperCase()}` : ''}
            </Heading>

            {/* Phone Number */}
            <Heading
              alignSelf='start'
              fontWeight='normal'
              textAlign='left'
              fontSize='1rem'
            >
              {isVertical
                ? `Phone Number :
                ${phone_number}
              `
                : ''}
              {isHorizontal ? `Phone Number : ${phone_number}` : ''}
            </Heading>

            {/* Gender */}
            <Heading
              alignSelf='start'
              fontWeight='normal'
              textAlign='left'
              fontSize='1rem'
            >
              {isVertical
                ? `Gender :
                ${Sex.toLowerCase() === 'm' ? 'Male' : 'Female'}
              `
                : ''}
              {isHorizontal
                ? `Gender : ${Sex.toLowerCase() === 'm' ? 'Male' : 'Female'}`
                : ''}
            </Heading>

            {/*  */}
          </VStack>
        </Flex>
      )}
    </>
  );
};

export default EachUserCard;
