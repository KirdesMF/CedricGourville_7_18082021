import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const illustration = style({
  display: 'none',
  '@media': {
    [makeBreakpoint('md')]: {
      display: 'grid',
      height: '40vmin',
    },
  },
});

export const circle = style({
  filter: `drop-shadow(1px 1px 2px ${vars.colors.shadow})`,
});
