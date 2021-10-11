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
      ':hover': {
        boxShadow: `inset 0 0 0 1.5px ${vars.colors['border-primary-hover']}`,
      },
    },
    utilities({
      color: 'on-base-high-contrast',
      borderRadius: 'sm',
      background: { default: 'bg-base', '@hover': 'ui-base-hover' },
    }),
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
