import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const avatar = style([
  utilities({
    borderRadius: 'full',
  }),
  {
    width: '2.5rem',
    height: '2.5rem',
    userSelect: 'none',
    verticalAlign: 'middle',
    border: `2px solid ${vars.colors.primary9}`,
    padding: '0.25rem',
  },
]);

export const imgAvatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const svg = style({
  width: '2.5rem',
  height: '2.5rem',
});
