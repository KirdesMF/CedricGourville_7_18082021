import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const icon = recipe({
  variants: {
    size: {
      xs: {
        width: '0.725rem',
        height: '0.725rem',
      },

      small: {
        width: '1rem',
        height: '1rem',
      },
      medium: {
        width: '1.5rem',
        height: '1.5rem',
      },
      large: {
        width: '3rem',
        height: '3rem',
      },
    },
  },
});

export type IconVariants = RecipeVariants<typeof icon>;
