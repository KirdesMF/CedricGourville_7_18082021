import { styled } from '../styles/stitches.config';

export const Button = styled('button', {
  all: 'unset',
  userSelect: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$highContrast',

  '& > svg': {
    fill: 'CurrentColor',
  },
});
