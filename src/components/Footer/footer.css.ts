import { style, styleVariants } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const footer = style([
  utilities({ background: 'base1', paddingBlock: 'lg', paddingInline: 'md' }),
  {
    width: '100%',
    borderTop: `1px dashed ${vars.colors.base5}`,
  },
]);

export const inner = style({
  marginInline: 'auto',
  width: `min(100%, ${vars.sizes.xl})`,
  display: 'flex',
  gap: vars.spaces.md,
});

export const small = style({
  color: vars.colors['on-base-low-contrast'],
  fontSize: vars.fonts.sizes.xs,
  display: 'inline-flex',
  alignItems: 'center',
});

export const svg = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: -1,
  height: '8rem',
  width: '100%',
});

export const stop = styleVariants({
  one: { stopColor: vars.colors.base1 },
  two: { stopColor: vars.colors.primary6 },
  three: { stopColor: vars.colors.secondary6 },
});
