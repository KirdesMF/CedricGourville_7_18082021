import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const heading = recipe({
  base: {
    fontSize: vars.fonts.sizes[10],
    fontVariationSettings: vars.fonts.variations[850],
    color: vars.colors['on-base-high-contrast'],
    paddingBlockEnd: vars.spaces.lg,
    lineHeight: 1.1,
    width: 'min(100%, 15ch)',
    textTransform: 'uppercase',
  },
});
