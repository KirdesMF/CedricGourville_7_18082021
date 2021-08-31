import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const wrapper = style({
  maxWidth: vars.maxWidth.mobile,
  margin: '0 auto',
  padding: `0 ${vars.panel}`,
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: vars.maxWidth.desktop,
    },
  },
});

export const panel = style({
  padding: `${vars.panel} 0`,
});

export const gridFlow = style({
  display: 'grid',
  gap: vars.flow,
});
