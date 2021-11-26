import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const base = style([
  utilities({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    borderRadius: 'xs',
  }),
  {
    border: 'none',
    appearance: 'none',
    width: 'max-content',
  },
]);

export const button = recipe({
  base,
  variants: {
    shadow: {
      true: {
        filter: `drop-shadow(1px 2px 2px ${vars.colors.shadow})`,
      },
    },
    ghost: {
      true: [
        utilities({
          color: { default: 'on-base-high-contrast', '@hover': 'primary9' },
        }),
      ],
    },
    liked: {
      true: [
        utilities({
          color: { default: 'success', '@hover': 'success-hover' },
        }),
      ],
    },
    warning: {
      true: [
        utilities({
          color: { default: 'warning', '@hover': 'warning-hover' },
        }),
      ],
    },
    discret: {
      true: [
        utilities({
          background: { default: 'base1', '@hover': 'base3' },
          color: 'on-base-high-contrast',
          paddingInline: 'sm',
          paddingBlock: 'sm',
        }),
        { boxShadow: `0 0 2px ${vars.colors.base6}` },
      ],
    },
    base: {
      true: [
        utilities({
          background: { default: 'base3', '@hover': 'base4' },
          color: 'on-base-high-contrast',
          paddingInline: 'md',
          paddingBlock: 'sm',
          fontSize: 'sm',
          fontVariationSettings: 'thin',
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
          fontSize: 'sm',
          fontVariationSettings: 'thin',
        }),
      ],
    },
    secondary: {
      true: [
        utilities({
          background: { default: 'secondary5', '@hover': 'secondary7' },
          color: 'on-secondary-high-contrast',
          paddingInline: 'md',
          paddingBlock: 'sm',
          fontSize: 'sm',
          fontVariationSettings: 'thin',
        }),
      ],
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
