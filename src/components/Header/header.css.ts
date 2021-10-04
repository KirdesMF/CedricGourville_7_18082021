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
  utilities({ display: 'flex', gap: 'sp16' }),
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
    boxShadow: vars.color.boxShadowThin,
  },
]);

globalStyle(`${aside} > button`, {
  position: 'absolute',
  top: vars.spaces.sp18,
  left: vars.spaces.sp18,
});

export const nav = style([utilities({ display: 'grid' })]);
