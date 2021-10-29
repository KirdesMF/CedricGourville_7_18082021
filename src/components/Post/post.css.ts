import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const post = style([
  utilities({ display: 'grid', background: 'border-base' }),
  { gridTemplateColumns: '10rem 1fr', gridTemplateRows: '10rem' },
]);

export const img = style([
  {
    objectFit: 'contain',
    height: '100%',
  },
]);
