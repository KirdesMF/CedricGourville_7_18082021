import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { activeClassName } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  textUnderlineOffset: vars.spaces.xs,

  selectors: {
    [`&:hover:not(${activeClassName})`]: {
      textDecorationLine: 'underline',
    },
  },
});

export const anchor = recipe({
  base: [base, utilities({ borderRadius: 'sm' })],
  variants: {
    color: {
      base: utilities({
        color: {
          default: 'on-base-low-contrast',
          '@hover': 'on-base-high-contrast',
        },
      }),
      primary: utilities({
        color: {
          default: 'on-primary-low-contrast',
          '@hover': 'on-primary-high-contrast',
        },
      }),
      secondary: utilities({
        color: {
          default: 'on-secondary-low-contrast',
          '@hover': 'on-secondary-high-contrast',
        },
      }),
    },
    size: {
      sm: utilities({ fontSize: 4 }),
      lg: utilities({ fontSize: 5 }),
      '2xl': utilities({ fontSize: 10 }),
      inherit: { fontSize: 'inherit' },
    },
    gap: {
      true: utilities({ gap: 'sm' }),
    },
    weight: {
      thin: { fontVariationSettings: vars.fonts.variations[200] },
      bold: { fontVariationSettings: vars.fonts.variations[850] },
    },
    transform: {
      uppercase: { textTransform: 'uppercase' },
    },
  },
  defaultVariants: {
    color: 'base',
    size: 'inherit',
    weight: 'thin',
  },
});

globalStyle(`${base} > span`, {
  display: 'none',
  '@media': {
    [makeBreakpoint('md')]: {
      display: 'initial',
    },
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
