import { styled } from '../styles/stitches.config';

export const Container = styled('div', {
  margin: '0 auto',
  variants: {
    mw: {
      large: {
        maxWidth: '$large',
      },
      medium: {
        maxWidth: '$medium',
      },
    },
  },
  defaultVariants: {
    mw: 'large',
  },
});
