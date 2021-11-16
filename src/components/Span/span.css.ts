import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
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
      xs: utilities({ fontSize: 'xs' }),
      sm: utilities({ fontSize: 'sm' }),
      lg: utilities({ fontSize: 'lg' }),
      inherit: { fontSize: 'inherit' },
    },
    weight: {
      thin: { fontVariationSettings: vars.fonts.variations[200] },
      'semi-bold': { fontVariationSettings: vars.fonts.variations[700] },
      bold: { fontVariationSettings: vars.fonts.variations[850] },
    },
    gradient: {
      true: {
        background: `linear-gradient(to right, ${vars.colors.primary9}, ${vars.colors.secondary9})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});

export type SpanVariants = RecipeVariants<typeof span>;
