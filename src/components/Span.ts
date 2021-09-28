import { styled } from '../styles/stitches.config';

export const Span = styled('span', {
  variants: {
    color: {
      primary: {
        color: '$blue7',
      },
      secondary: {
        color: '$red7',
      },
    },
  },
});
