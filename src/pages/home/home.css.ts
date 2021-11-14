import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const main = style({
  display: 'flex',
  alignItems: 'center',
  paddingBlock: vars.spaces.lg,
  paddingInline: vars.spaces.lg,
});

export const inner = style({
  display: 'grid',
  gridAutoColumns: '1fr',
  gridAutoFlow: 'column',
  alignItems: 'center',
  width: 'min(100%, 64rem)',
  marginInline: 'auto',
});

export const section = style({
  display: 'grid',
  gap: vars.spaces.lg,
});

export const nav = style({
  display: 'flex',
  gap: vars.spaces.md,
  flexWrap: 'wrap',
});

globalStyle(`${nav} > *`, {
  flex: '15ch',
});

export const illustration = style({
  display: 'none',
  '@media': {
    [makeBreakpoint('md')]: {
      display: 'grid',
      height: '40vmin',
    },
  },
});
