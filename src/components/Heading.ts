import { styled } from '../styles/stitches.config';

export const Heading = styled('h1', {
  fontFamily: '$title',
  color: '$highContrast',
  margin: 0,

  variants: {
    size: {
      small: {
        fontSize: '$4',
      },
      medium: {
        fontSize: '$5',
      },
      large: {
        fontSize: '$6',
      },
    },
  },
});
