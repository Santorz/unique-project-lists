import { extendTheme, theme as base } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Noto Sans, ${base.fonts?.body}`,
  },

  styles: {
    // @ts-ignore
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#222222' : 'gray.50',
      },
    }),
  },
});

export default customTheme;
