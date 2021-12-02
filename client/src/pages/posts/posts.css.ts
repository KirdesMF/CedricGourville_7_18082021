import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const main = utilities({
  paddingBlock: '2xl',
  paddingInline: 'lg',
});

export const inner = utilities({
  width: 'md',
  marginInline: 'auto',
  display: 'grid',
  gap: 'md',
});

export const feed = style([
  utilities({
    display: 'grid',
    gap: 'lg',
  }),
  {
    filter: `drop-shadow(0 0 2px ${vars.colors.shadow})`,
    marginBlockStart: vars.spaces.lg,
  },
]);

export const heading = style([
  utilities({
    display: 'flex',
    gap: 'md',
    alignItems: 'baseline',
  }),
]);

export const hr = style({
  height: '0.5px',
  width: '100%',
  display: 'flex',
  border: 'none',
  borderBottom: `0.1px dashed ${vars.colors.secondary9}`,
});
