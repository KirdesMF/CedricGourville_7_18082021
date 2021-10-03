import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const anchor = recipe({
  base: {
    all: 'revert',
    color: vars.color.appText,
    display: 'inline-flex',
    textDecoration: 'none',
    borderRadius: '0.25rem',

    ':hover': {
      color: vars.color.accentSolidHover,
      background: vars.color.grayBgHover,
    },
  },
  variants: {
    icon: {
      true: {
        padding: '0.5rem',
      },
    },
    text: {
      true: {
        padding: '0.45rem',
        fontFamily: vars.font.text,
      },
    },
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
