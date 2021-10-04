import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const button = recipe({
  base: {
    all: 'revert',
    background: vars.color.graySubtle,
    color: vars.color.appText,
    display: 'flex',
    padding: vars.spaces.sp8,
    border: `1.5px solid ${vars.color.grayBg}`,
    borderRadius: '0.5rem',
  },
  variants: {
    discret: {
      true: {
        ':hover': {
          background: vars.color.grayBgHover,
        },
      },
    },
    menu: {
      true: {
        '@media': {
          [makeBreakpoint('md')]: {
            display: 'none',
          },
        },
      },
    },
  },
  defaultVariants: {
    discret: true,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
