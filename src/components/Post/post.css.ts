import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const post = style([
  utilities({
    display: 'flex',
    gap: 'lg',
    paddingBlock: 'md',
    paddingInline: 'md',
    background: 'base1',
  }),
  {
    selectors: {
      '&:not(:first-child)': {
        borderTop: `0.5px solid ${vars.colors.base3}`,
      },
    },
  },
]);

export const right = utilities({
  flex: 1,
  display: 'grid',
  gap: 'md',
});

export const innerRight = utilities({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const info = utilities({
  display: 'flex',
  gap: 'sm',
  alignItems: 'center',
});

export const avatar = style({
  width: 'min-content',
  height: 'min-content',
  alignSelf: 'start',
});

export const buttons = utilities({
  display: 'flex',
  gap: 'sm',
  alignItems: 'center',
});

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
