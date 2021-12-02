import { keyframes, style, styleVariants } from '@vanilla-extract/css';
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
    placeItems: 'center',
    width: 'lg',
    marginInline: 'auto',
  }),
  {
    gridTemplateAreas: `"middle"`,
  },
]);

export const icon = style([
  utilities({
    color: 'secondary2',
  }),
  { gridArea: 'middle' },
]);

const rotate = keyframes({
  to: {
    transform: 'rotate(1turn) translate(10vmax) rotate(-1turn)',
  },
});

const base = style({
  gridArea: 'middle',
  height: '5vmax',
  width: '5vmax',
  borderRadius: '50%',
  animation: `${rotate} 1s infinite linear`,
  transform: `rotate(0) translate(10vmax) rotate(0)`,
  filter: 'drop-shadow(0 0 2px black)',
});

export const circle = styleVariants({
  first: [base, utilities({ background: 'primary10' })],
  second: [
    base,
    utilities({ background: 'secondary10' }),
    { animationDelay: '-500ms' },
  ],
});
