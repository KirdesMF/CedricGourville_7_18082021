import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const heading = recipe({
  base: {
    color: vars.colors['on-base-high-contrast'],
    lineHeight: 1.1,
  },
  variants: {
    hidden: {
      true: srOnly,
    },
    transform: {
      uppercase: { textTransform: 'uppercase' },
    },
    fontSize: {
      xs: utilities({ fontSize: 'xs' }),
      sm: utilities({ fontSize: 'sm' }),
      md: utilities({ fontSize: 'md' }),
      lg: utilities({ fontSize: 'lg' }),
      xl: utilities({ fontSize: 'xl' }),
      inherit: { fontSize: 'inherit' },
    },
    weight: {
      thin: utilities({ fontVariationSettings: 'thin' }),
      'semi-bold': utilities({ fontVariationSettings: 'semi-bold' }),
      bold: utilities({ fontVariationSettings: 'bold' }),
    },
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
