import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const root = style({
  fontFamily: vars.fonts.family.paragraph,
  color: vars.colors['on-base-high-contrast'],
  fontSize: '1.2rem',
  paddingInline: vars.spaces.md,
  paddingBlock: vars.spaces.md,
});
