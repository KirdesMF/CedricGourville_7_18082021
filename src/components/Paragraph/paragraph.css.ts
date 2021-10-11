import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const base = style({
  fontVariationSettings: vars.fonts.variations[200],
  color: vars.colors['on-base-high-contrast'],
  paddingBlockEnd: vars.spaces.md,
  width: 'min(100%, 45ch)',
});

export const paragraph = recipe({
  base: [base],
  variants: {
    size: {
      xs: { fontSize: vars.fonts.sizes[3] },
      sm: { fontSize: vars.fonts.sizes[4] },
      md: { fontSize: vars.fonts.sizes[5] },
    },
  },
  defaultVariants: { size: 'md' },
});

export type ParagraphVariants = RecipeVariants<typeof paragraph>;
