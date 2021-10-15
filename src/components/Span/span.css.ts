import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';
import { baseAnchor } from '../Anchor/anchor.css';

export const span = recipe({
  base: {
    margin: 0,
    lineHeight: 1,

    selectors: {
      [`${baseAnchor} &`]: {
        display: 'none',
        '@media': {
          [makeBreakpoint('md')]: {
            display: 'initial',
          },
        },
      },
    },
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
