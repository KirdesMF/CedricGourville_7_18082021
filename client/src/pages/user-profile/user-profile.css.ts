import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const main = utilities({
  paddingBlock: '2xl',
  paddingInline: 'lg',
});

export const inner = utilities({
  display: 'grid',
  gap: 'md',
  padding: '2xl',
  width: 'lg',
  marginInline: 'auto',
});

export const heading = style([
  utilities({
    display: 'flex',
    gap: 'md',
    alignItems: 'baseline',
  }),
]);
export const buttons = utilities({
  display: 'flex',
  gap: 'md',
});
