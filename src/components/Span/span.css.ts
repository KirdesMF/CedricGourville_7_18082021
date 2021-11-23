import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const span = recipe({
  base: [
    utilities({ display: 'inline-flex', alignItems: 'center' }),
    {
      margin: 0,
    },
  ],
  variants: {
    uppercase: { true: { textTransform: 'uppercase' } },
    color: {
      base: utilities({ color: 'on-base-low-contrast' }),
      primary: utilities({ color: 'on-primary-low-contrast' }),
      secondary: utilities({ color: 'on-secondary-low-contrast' }),
      inherit: { color: 'inherit' },
    },
    size: {
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
    gradient: {
      true: {
        background: `linear-gradient(to right, ${vars.colors.primary9}, ${vars.colors.secondary9})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});

export type SpanVariants = RecipeVariants<typeof span>;
