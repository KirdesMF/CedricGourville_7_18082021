import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const button = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      padding: vars.spaces.sm,
    },
    utilities({
      color: 'on-base-high-contrast',
      borderRadius: 'sm',
      background: { default: 'bg-base', '@hover': 'bg-base-subtle' },
    }),
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
