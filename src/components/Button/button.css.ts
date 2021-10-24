import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  padding: vars.spaces.sm,
  appearance: 'none',
  ':hover': {
    boxShadow: `inset 0 0 0 1.5px ${vars.colors['border-primary-hover']}`,
  },
});

export const button = recipe({
  base: [
    base,
    utilities({
      color: 'on-base-high-contrast',
      borderRadius: 'sm',
      background: { default: 'bg-base', '@hover': 'ui-base-hover' },
    }),
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
