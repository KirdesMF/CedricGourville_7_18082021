import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const wrapper = utilities({
  position: 'relative',
});

export const popover = style([
  utilities({
    position: 'absolute',
  }),
  {
    top: '100%',
    right: 0,
    marginBlockStart: '0.5rem',
  },
]);
