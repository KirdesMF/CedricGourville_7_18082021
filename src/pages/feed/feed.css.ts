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
