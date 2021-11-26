import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const modal = style([
  utilities({
    position: 'fixed',
    display: 'grid',
    placeItems: 'center',
  }),
  {
    zIndex: 100,
    height: '100%',
    width: '100%',
    inset: 0,
    backdropFilter: 'blur(5px)',
  },
]);
