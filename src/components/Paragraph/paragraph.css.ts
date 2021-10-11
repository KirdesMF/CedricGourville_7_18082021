import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const root = style({
  fontVariationSettings: vars.fonts.variations[200],
  color: vars.colors['on-base-high-contrast'],
  fontSize: vars.fonts.sizes[5],
  paddingBlockEnd: vars.spaces.md,
  width: 'min(100%, 45ch)',
});
