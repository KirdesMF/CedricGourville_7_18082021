import { style, styleVariants } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const footer = style([
  utilities({
    background: 'base1',
    paddingBlock: 'lg',
    paddingInline: 'md',
  }),
  {
    width: '100%',
    borderTop: `1px dashed ${vars.colors.base5}`,
  },
]);

export const inner = utilities({
  marginInline: 'auto',
  width: 'xl',
  display: 'flex',
  gap: 'md',
});

export const small = utilities({
  color: 'on-base-low-contrast',
  fontSize: 'xs',
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
