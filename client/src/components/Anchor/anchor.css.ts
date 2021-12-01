import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const baseAnchor = style([
  utilities({ display: 'inline-flex', alignItems: 'center' }),
  {
    whiteSpace: 'nowrap',
    textUnderlineOffset: vars.spaces.xs,
    appearance: 'none',
  },
]);

const btn = style([
  utilities({
    fontSize: 'sm',
    fontVariationSettings: 'thin',
    paddingInline: 'md',
    paddingBlock: 'sm',
    borderRadius: 'sm',
  }),
  {
    filter: `drop-shadow(1px 2px 2px ${vars.colors.shadow})`,
    transition: 'background 100ms ease',
  },
]);

export const anchor = recipe({
  base: baseAnchor,
  variants: {
    uppercase: { true: { textTransform: 'uppercase' } },
    space: {
      gap: utilities({ gap: 'sm' }),
      between: utilities({ justifyContent: 'space-between' }),
    },
    color: {
      base: utilities({ color: 'on-base-high-contrast' }),
      primary: utilities({ color: 'primary10' }),
      secondary: utilities({ color: 'on-secondary-high-contrast' }),
      success: utilities({ color: 'on-success-high-contrast' }),
    },

    btn: {
      base: [
        btn,
        utilities({ background: { default: 'base2', '@hover': 'base3' } }),
      ],
      primary: [
        btn,
        utilities({
          background: { default: 'primary6', '@hover': 'primary8' },
        }),
      ],
      secondary: [
        btn,
        utilities({
          background: { default: 'secondary6', '@hover': 'secondary8' },
        }),
      ],
    },
  },
});

export type AnchorVariants = RecipeVariants<typeof anchor>;
