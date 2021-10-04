import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';

export const layout = recipe({
  base: utilities({ background: 'graySubtle' }),
  variants: {
    full: {
      true: [
        utilities({ display: 'grid' }),
        {
          minHeight: '100%',
          gridTemplateRows: 'min-content 1fr',
        },
      ],
    },
  },
});

export type LayoutVariants = RecipeVariants<typeof layout>;
