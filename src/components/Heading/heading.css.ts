import { globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const heading = recipe({
  base: {
    fontFamily: vars.fonts.family.heading,
    fontSize: '3rem',
    color: vars.colors['on-base-high-contrast'],
    paddingInline: vars.spaces.md,
    paddingBlock: vars.spaces.md,
  },
});

globalStyle(`${heading()} > span`, {
  color: vars.colors['brand-secondary'],
});
