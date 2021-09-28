import { styled } from '../styles/stitches.config';

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    size: {
      full: {
        minHeight: '100vh',
      },
    },
    direction: {
      col: {
        flexDirection: 'column',
      },
    },
  },
});
