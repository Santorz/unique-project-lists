import { FC, useEffect, useMemo, useState } from 'react';
import { chakra, Flex, layout } from '@chakra-ui/react';
import NextImage from 'next/image';
import { usersDataType } from '../hooks/useGetData';
import useResponsiveSSR from '../utils/useResponsiveSSR';

const CustomImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
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
  const { image_name, Sex, name } = props;

  //   Hooks
  const { isMobile } = useResponsiveSSR();

  //   Vars
  const img_path = useMemo(() => {
    const location = window.location;

    const half_path = `/media/users`;
    return image_name.length > 2
      ? `${half_path}/${image_name}`
      : Sex.toLowerCase().trim() === 'm'
      ? `${half_path}/default-male.png`
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

  const showInfoBool = height && width;
  const isHorizontal = width !== null && height !== null && width >= height;
  const isVertical = width !== null && height !== null && width < height;

  // Main JSX
  return (
    <>
      {showInfoBool && (
        <Flex
          mx='auto'
          direction={isHorizontal ? 'column' : isVertical ? 'row' : 'column'}
        >
          <CustomImage
            src={img_path}
            alt={`${name} profile image`}
            width={isHorizontal ? 270 : 180}
            height={isHorizontal ? 180 : 270}
            objectFit='cover'
            layout='fixed'
            objectPosition={isHorizontal ? 'center top' : 'center'}
          ></CustomImage>
        </Flex>
      )}
    </>
  );
};

export default EachUserCard;
