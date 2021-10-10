import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';

// TODO improve variants
export const anchor = recipe({
  base: [
    {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      textTransform: 'capitalize',
      whiteSpace: 'nowrap',
    },
    utilities({
      borderRadius: 'sm',
      color: {
        default: 'on-base-high-contrast',
        '@hover': 'on-primary-low-contrast',
      },
      paddingInline: 'sm',
      paddingBlock: 'xs',
      gap: 'sm',
    }),
  ],
  variants: {
    content: {
      icon: utilities({ padding: 'sm' }),
    },
    fonts: {
      medium: [
        utilities({
          fontFamily: 'paragraph',
          fontSize: 5,
        }),
      ],
      big: [
        utilities({
          fontFamily: 'heading',
          fontSize: 10,
        }),
      ],
    },
  },
});

export const textAnchor = style([
  utilities({ display: { sm: 'none', md: 'initial' } }),
]);

export type AnchorVariants = RecipeVariants<typeof anchor>;
