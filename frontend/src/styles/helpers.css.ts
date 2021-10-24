import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { utilities } from './utilities.css';
import { vars } from './vars.css';

export const activeClassName = style([
  utilities({ color: 'warning', position: 'relative' }),
  {
    textDecoration: 'line-through',
    textDecorationColor: vars.colors['brand-primary'],
    '::before': {
      content: '',
      position: 'absolute',
      left: '-15px',
      top: '50%',
      height: '10px',
      width: '10px',
      background: vars.colors.success,
      transform: 'translateY(-50%)',
      borderRadius: vars.radius.full,
    },
  },
]);

export const container = recipe({
  base: {
    marginInline: 'auto',
  },
  variants: {
    width: {
      sm: { width: `min(100%, ${vars.sizes.sm})` },
      md: { width: `min(100%, ${vars.sizes.md})` },
      lg: { width: `min(100%, ${vars.sizes.lg})` },
      xl: { width: `min(100%, ${vars.sizes.xl})` },
    },
    padding: {
      sm: { paddingInline: vars.spaces.sm },
      md: { paddingInline: vars.spaces.md },
      lg: { paddingInline: vars.spaces.lg },
      xl: { paddingInline: vars.spaces.xl },
      '2xl': { paddingInline: vars.spaces['2xl'] },
    },
  },
});

export const panel = styleVariants({
  sm: { paddingBlock: vars.spaces.sm },
  md: { paddingBlock: vars.spaces.md },
  lg: { paddingBlock: vars.spaces.lg },
  xl: { paddingBlock: vars.spaces.xl },
  '2xl': { paddingBlock: vars.spaces['2xl'] },
});

export const srOnly = style({
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
});
