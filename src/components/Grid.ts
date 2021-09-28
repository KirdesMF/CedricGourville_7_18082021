import { styled } from '../styles/stitches.config';

export const Grid = styled('div', {
  display: 'grid',
  fontFamily: '$text',
  color: '$highContrast',
  variants: {
    gap: {
      small: {
        gap: '$small',
      },
      medium: {
        gap: '$medium',
      },
      large: {
        gap: '$large',
      },
    },
  },
});
