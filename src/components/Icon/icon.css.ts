import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const icon = recipe({
  base: {
    fill: 'currentcolor',
  },
  variants: {
    size: {
      small: {
        width: '1rem',
        height: '1rem',
      },
      medium: {
        width: '1.5rem',
        height: '1.5rem',
      },
    },
  },
});

export type IconVariants = RecipeVariants<typeof icon>;
