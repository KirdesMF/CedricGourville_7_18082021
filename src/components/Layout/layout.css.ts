import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';

export const layout = recipe({
  base: {
    background: 'inherit',
  },
  variants: {
    full: {
      true: [
        utilities({ minHeight: '100%' }),
        {
          display: 'grid',
          gridTemplateRows: 'min-content 1fr',
        },
      ],
    },
    home: {
      true: [
        utilities({
          height: '100%',
        }),
        {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 375px), 1fr))`,
        },
      ],
    },
  },
});

export type LayoutVariants = RecipeVariants<typeof layout>;
