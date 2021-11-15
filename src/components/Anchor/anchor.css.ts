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

const btn = style({
  filter: `drop-shadow(1px 2px 2px ${vars.colors.shadow})`,
  padding: `${vars.spaces.sm} ${vars.spaces.md}`,
  borderRadius: vars.radius.sm,
  transition: 'background 100ms ease',
});

export const anchor = recipe({
  base: baseAnchor,
  variants: {
    gap: { true: [utilities({ gap: 'sm' })] },
    'space-between': { true: [utilities({ justifyContent: 'space-between' })] },
    color: {
      base: utilities({ color: 'on-base-high-contrast' }),
      primary: utilities({ color: 'on-primary-high-contrast' }),
      secondary: utilities({ color: 'on-secondary-high-contrast' }),
      success: utilities({ color: 'on-success-high-contrast' }),
    },
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
    btn: {
      base: [
        btn,
        utilities({ background: { default: 'base2', '@hover': 'base3' } }),
      ],
      primary: [
        btn,
        utilities({
          background: { default: 'primary6', '@hover': 'primary8' },
        }),
      ],
      secondary: [
        btn,
        utilities({
          background: { default: 'secondary6', '@hover': 'secondary8' },
        }),
      ],
    },
  },
  defaultVariants: {
    color: 'base',
    fontSize: 'md',
    weight: 'thin',
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
