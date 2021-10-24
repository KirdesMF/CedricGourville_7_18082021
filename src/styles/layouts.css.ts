import { globalStyle } from '@vanilla-extract/css';
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
      sameArea: {
        gridTemplate: `
          "area" 1fr / 1fr
        `,
        minHeight: '25vh',
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

globalStyle(`${flex()} > *`, {
  flex: 1,
});
