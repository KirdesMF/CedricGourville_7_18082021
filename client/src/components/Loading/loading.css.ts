import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const main = utilities({
  position: 'relative',
  display: 'flex',
  paddingBlock: 'lg',
  paddingInline: 'lg',
});

export const inner = style([
  utilities({
    display: 'grid',
    alignItems: 'center',
    width: 'lg',
    marginInline: 'auto',
  }),
  {
    gridTemplateAreas: 'middle',
  },
]);

export const circle = style({
  gridArea: 'middle',
});
