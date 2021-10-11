import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';

export const span = recipe({
  base: {
    margin: 0,
    lineHeight: 1,
  },
  variants: {
    color: {
      base: utilities({ color: 'on-base-low-contrast' }),
      primary: utilities({ color: 'on-primary-low-contrast' }),
      secondary: utilities({ color: 'on-secondary-low-contrast' }),
      inherit: { color: 'inherit' },
    },
    size: {
      sm: utilities({ fontSize: 4 }),
      lg: utilities({ fontSize: 5 }),
      inherit: { fontSize: 'inherit' },
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});

export type SpanVariants = RecipeVariants<typeof span>;
