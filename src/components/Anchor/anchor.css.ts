import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const baseAnchor = style({
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  textUnderlineOffset: vars.spaces.xs,
  appearance: 'none',
});

export const anchor = recipe({
  base: [baseAnchor, utilities({ borderRadius: 'sm' })],
  variants: {
    color: {
      base: utilities({
        color: 'on-base-high-contrast',
      }),
      primary: utilities({
        color: 'on-primary-high-contrast',
        background: {
          default: 'primary7',
          '@hover': 'primary8',
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
      sm: utilities({ fontSize: 'sm' }),
      md: utilities({ fontSize: 'md' }),
      lg: utilities({ fontSize: 'lg' }),
      '2xl': utilities({ fontSize: 'xl' }),
      inherit: { fontSize: 'inherit' },
    },
    gap: {
      true: utilities({ gap: 'sm' }),
    },
    weight: {
      thin: { fontVariationSettings: vars.fonts.variations[200] },
      'semi-bold': { fontVariationSettings: vars.fonts.variations[700] },
      bold: { fontVariationSettings: vars.fonts.variations[850] },
    },
    transform: {
      uppercase: { textTransform: 'uppercase' },
    },
    btn: {
      true: {
        padding: '0.5rem 1rem',
        filter: `drop-shadow(1px 2px 2px ${vars.colors.shadow})`,
        justifyContent: 'space-between',
      },
    },
  },
  defaultVariants: {
    color: 'base',
    size: 'md',
    weight: 'thin',
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
