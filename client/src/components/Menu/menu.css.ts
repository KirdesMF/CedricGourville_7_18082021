import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const menu = style([
  utilities({
    display: 'grid',
    position: 'fixed',
  }),
  {
    zIndex: 2,
    height: '100%',
    width: '100%',
    gridTemplateColumns: '1fr',

    '@media': {
      [makeBreakpoint('md')]: {
        gridTemplateColumns: '0.5fr 1fr',
        backdropFilter: 'blur(5px)',
      },
    },
  },
]);

export const aside = style([
  utilities({
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    background: 'bg-base',
  }),
  {
    '::before': {
      position: 'absolute',
      content: '',
      right: '-100px',
      background: 'inherit',
      height: '100%',
      width: '150px',
      clipPath: 'polygon(0 0, 100% 0%, 60% 100%, 0 100%)',
    },
  },
]);

export const button = style([
  utilities({
    position: 'absolute',
  }),
  {
    top: 20,
    left: 20,
  },
]);

export const nav = style([utilities({ display: 'grid' })]);
