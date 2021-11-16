import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spaces.lg,
  border: 'none',
  borderRadius: vars.radius.xs,
  appearance: 'none',
  width: 'max-content',
});

export const button = recipe({
  base,
  variants: {
    uppercase: { true: { textTransform: 'uppercase' } },
    fontSize: {
      xs: utilities({ fontSize: 'xs' }),
      sm: utilities({ fontSize: 'sm' }),
      md: utilities({ fontSize: 'md' }),
      lg: utilities({ fontSize: 'lg' }),
      xl: utilities({ fontSize: 'xl' }),
      inherit: { fontSize: 'inherit' },
    },
    weight: {
      thin: { fontVariationSettings: vars.fonts.variations[200] },
      'semi-bold': { fontVariationSettings: vars.fonts.variations[700] },
      bold: { fontVariationSettings: vars.fonts.variations[850] },
    },
    shadow: {
      true: {
        filter: `drop-shadow(1px 2px 2px ${vars.colors.shadow})`,
      },
    },
    ghost: {
      true: [
        utilities({
          background: { default: 'base1', '@hover': 'base3' },
          color: 'on-base-high-contrast',
          paddingInline: 'sm',
          paddingBlock: 'sm',
        }),
      ],
    },
    base: {
      true: [
        utilities({
          background: { default: 'base3', '@hover': 'base4' },
          color: 'on-base-high-contrast',
        }),
      ],
    },
    primary: {
      true: [
        utilities({
          background: { default: 'primary5', '@hover': 'primary7' },
          color: 'on-primary-high-contrast',
          paddingInline: 'md',
          paddingBlock: 'sm',
        }),
      ],
    },
    secondary: {
      true: [
        utilities({
          background: { default: 'secondary5', '@hover': 'secondary7' },
          color: 'on-secondary-high-contrast',
        }),
      ],
    },
  },
  defaultVariants: {
    ghost: true,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
