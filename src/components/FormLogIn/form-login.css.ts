import { style } from '@vanilla-extract/css';

const form = style({
  display: 'grid',
  gap: '2rem',
  gridAutoRows: '2rem',
});

export const formLogInStyle = {
  form,
};
