import { style } from '@vanilla-extract/css';
import { utilities } from './utilities.css';
import { vars } from './vars.css';

export const activeClassName = style([
  utilities({ position: 'relative', color: 'warning' }),
  {
    '::before': {
      content: '',
      position: 'absolute',
      left: '-5px',
      top: '50%',
      height: '10px',
      width: '10px',
      background: vars.colors['brand-secondary'],
      transform: 'translateY(-50%)',
      borderRadius: vars.radius.full,
    },
  },
]);
