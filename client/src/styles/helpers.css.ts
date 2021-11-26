import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const activeClassName = style({
  textDecoration: 'line-through',
  textDecorationColor: vars.colors.primary9,
  color: vars.colors.warning,
});

export const srOnly = style({
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
});
