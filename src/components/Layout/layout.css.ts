import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

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
          background: `radial-gradient(circle at 15% 50%, ${vars.colors['brand-primary']}, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 85% 30%, ${vars.colors['bg-base-subtle']}, rgba(255, 255, 255, 0) 15%)`,
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
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 30vmin), 1fr))`,
        },
      ],
    },
  },
});

export type LayoutVariants = RecipeVariants<typeof layout>;
