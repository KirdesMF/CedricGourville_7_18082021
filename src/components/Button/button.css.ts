import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const button = recipe({
  base: [
    utilities({
      all: 'revert',
      display: 'flex',
      color: 'appText',
      background: 'graySubtle',
      padding: 'sp8',
      borderRadius: 'thin',
    }),
    {
      border: `1.5px solid ${vars.color.grayBg}`,
    },
  ],
  variants: {
    discret: {
      true: [utilities({ background: { '@hover': 'grayBgHover' } })],
    },
  },
  defaultVariants: {
    discret: true,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
