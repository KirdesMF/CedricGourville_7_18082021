import { recipe } from '@vanilla-extract/recipes';
import { vars } from './vars.css';

export const grid = recipe({
  base: {
    display: 'grid',
  },
  variants: {
    template: {
      full: {
        minHeight: '100%',
        gridTemplateRows: 'min-content 1fr',
      },
    },
  },
});

export const flex = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    template: {
      base: {
        alignItems: 'center',
        height: '100%',
        gap: vars.spaces['2xl'],
      },
    },
  },
});
