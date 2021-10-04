import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const header = style({
  background: vars.color.graySubtle,
  borderBottom: `1px solid ${vars.color.grayLine}`,
});

export const inner = style([
  utilities({ display: 'flex' }),
  {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
]);

export const buttons = style([
  utilities({ display: 'flex', gap: 'sp8' }),
  {
    alignItems: 'center',
  },
]);

export const menu = style([
  utilities({ display: 'grid', position: 'fixed' }),
  {
    width: '100%',
    height: '100%',

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
  utilities({ display: 'grid', position: 'relative' }),
  {
    placeItems: 'center',
    background: vars.color.grayBg,
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
  top: vars.spaces.sp18,
  left: vars.spaces.sp18,
});

export const nav = style([utilities({ display: 'grid' })]);
