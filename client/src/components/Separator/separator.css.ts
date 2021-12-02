import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const separator = style([
  utilities({ background: 'secondary6' }),
  {
    marginBlock: '0.5rem',
    selectors: {
      '&[data-orientation=horizontal]': { height: 1, width: '100%' },
      '&[data-orientation=vertical]': { height: '100%', width: 1 },
    },
  },
]);
