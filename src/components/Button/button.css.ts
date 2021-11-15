import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: vars.radius.xs,
  appearance: 'none',
});

export const button = recipe({
  base,
  variants: {
    uppercase: { true: { textTransform: 'uppercase' } },
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
          paddingInline: 'md',
          paddingBlock: 'sm',
        }),
        { boxShadow: `0 0 0 0.5px ${vars.colors['on-primary-high-contrast']}` },
      ],
    },
    primary: {
      true: [
        utilities({
          background: { default: 'primary5', '@hover': 'primary7' },
          color: 'on-primary-high-contrast',
        }),
      ],
    },
    secondary: {
      true: [
        utilities({
          background: { default: 'secondary5', '@hover': 'secondary7' },
        }),
      ],
    },
  },
  defaultVariants: {
    ghost: true,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
