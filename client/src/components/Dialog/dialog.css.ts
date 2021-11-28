import { style } from '@vanilla-extract/css';
import { utilities } from '~/styles/utilities.css';

export const overlay = style([
  utilities({
    position: 'fixed',
  }),
  { inset: 0, backdropFilter: 'blur(10px)' },
]);

export const content = style([
  utilities({
    display: 'grid',
    placeItems: 'center',
    position: 'fixed',
  }),
  { inset: 0 },
]);
