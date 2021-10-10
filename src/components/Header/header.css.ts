import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const header = style([
  {
    borderBottom: `1px solid ${vars.colors['border-base']}`,
  },
]);

export const inner = style([
  utilities({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
]);

const flexHelper = style({
  flexBasis: 0,
  flexGrow: 1,
});

export const items = recipe({
  base: [utilities({ display: 'flex' })],
  variants: {
    item: {
      first: [utilities({ justifyContent: 'flex-start' }), flexHelper],
      last: [utilities({ justifyContent: 'flex-end' }), flexHelper],
    },
    gap: {
      true: utilities({ gap: 'sm' }),
    },
  },
});

export const menu = style([
  utilities({
    display: 'grid',
    position: 'fixed',
    height: '100%',
    width: '100%',
  }),
  {
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
    display: 'grid',
    position: 'relative',
    placeItems: 'center',
    background: 'bg-base',
  }),
  {
    '::before': {
      position: 'absolute',
      content: '',
      right: '-50px',
      background: 'inherit',
      height: '100%',
      width: '100px',
      clipPath: 'polygon(0 0, 100% 0%, 60% 100%, 0 100%)',
    },
  },
]);

globalStyle(`${aside} > button`, {
  position: 'absolute',
  top: vars.spaces.md,
  left: vars.spaces.md,
});

export const nav = style([utilities({ display: 'grid' })]);
