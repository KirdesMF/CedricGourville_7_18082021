import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const menu = style({
  display: 'grid',
  position: 'fixed',
  height: '100%',
  width: '100%',
  gridTemplateColumns: '1fr',

  '@media': {
    [makeBreakpoint('md')]: {
      gridTemplateColumns: '0.5fr 1fr',
      backdropFilter: 'blur(5px)',
    },
  },
});

export const aside = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  background: vars.colors['bg-base'],

  '::before': {
    position: 'absolute',
    content: '',
    right: '-100px',
    background: 'inherit',
    height: '100%',
    width: '150px',
    clipPath: 'polygon(0 0, 100% 0%, 60% 100%, 0 100%)',
  },
});

globalStyle(`${aside} > button`, {
  position: 'absolute',
  top: vars.spaces.md,
  left: vars.spaces.md,
});

export const nav = style([utilities({ display: 'grid' })]);
