import { style } from '@vanilla-extract/css';

const form = style({
  display: 'grid',
  gap: '1rem',
  gridAutoRows: '2rem',
});

export const formRegisterStyle = {
  form,
};
