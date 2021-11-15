import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  padding: vars.spaces.sm,
  borderRadius: vars.radius.sm,
  appearance: 'none',
  ':hover': {
    boxShadow: `inset 0 0 0 1.5px ${vars.colors['border-primary-hover']}`,
  },
});

export const button = recipe({
  base,
  variants: {
    base: {
      true: [
        utilities({
          background: { default: 'base1', '@hover': 'base4' },
        }),
      ],
    },
    primary: {
      true: [
        utilities({
          background: { default: 'primary9', '@hover': 'primary10' },
        }),
      ],
    },
    secondary: {
      true: [
        utilities({
          background: { default: 'secondary9', '@hover': 'secondary10' },
        }),
      ],
    },
  },
  defaultVariants: {
    base: true,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
