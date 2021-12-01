import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const base = style([
  {
    fontVariationSettings: vars.fonts.variations.thin,
    color: vars.colors['on-base-high-contrast'],
    width: 'min(100%, 45ch)',
  },
]);

export const paragraph = recipe({
  base: base,
  variants: {
    size: {
      sm: { fontSize: vars.fonts.sizes.sm },
      md: { fontSize: vars.fonts.sizes.md },
    },
  },
  defaultVariants: { size: 'md' },
});

export type ParagraphVariants = RecipeVariants<typeof paragraph>;
