import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const post = style([
  utilities({
    display: 'grid',
    background: 'border-base',
    padding: 'lg',
    gap: 'lg',
  }),
  {
    gridTemplateColumns: '10rem 1fr',
    boxShadow: `1px 3px 6px black`,
    borderRadius: vars.radius.md,
  },
]);

export const figure = style({
  width: 'min(100%, 15rem)',
  borderRadius: vars.radius.md,
  aspectRatio: '4/3',
  overflow: 'hidden',
});

export const img = style({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
  filter: `grayscale(50%)`,
  transition: `filter 500ms ease-in-out, transform 500ms ease`,

  selectors: {
    [`${post}:hover &`]: {
      filter: `grayscale(10%)`,
      transform: `scale(1.05)`,
    },
  },
});

export const content = style([
  utilities({ display: 'grid', gap: 'md' }),
  {
    placeItems: 'center start',
    gridTemplateRows: 'min-content min-content',
  },
]);
