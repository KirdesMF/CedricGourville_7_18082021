import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const heading = recipe({
  base: {
    fontSize: vars.fonts.sizes.xl,
    fontVariationSettings: vars.fonts.variations[850],
    color: vars.colors['on-base-high-contrast'],
    lineHeight: 1.1,
    width: 'min(100%, 15ch)',
    textTransform: 'uppercase',
    marginBlockEnd: vars.spaces.sm,
  },
});
