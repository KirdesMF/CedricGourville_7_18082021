import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const avatar = recipe({
  base: [
    {
      userSelect: 'none',
      filter: `drop-shadow(0 2px 3px ${vars.colors.shadow})`,
    },
  ],
  variants: {
    size: {
      small: {
        width: '1.625rem',
        height: '1.625rem',
      },
      medium: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
    radius: {
      full: utilities({ borderRadius: 'full' }),
      square: utilities({ borderRadius: 'md' }),
    },
  },
  defaultVariants: {
    size: 'medium',
    radius: 'full',
  },
});

export const imgAvatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export type AvatarVariant = RecipeVariants<typeof avatar>;
