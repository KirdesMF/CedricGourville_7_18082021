import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const header = style({
  zIndex: 1,
  position: 'sticky',
  top: 0,
  paddingBlock: vars.spaces.lg,
  paddingInline: vars.spaces.md,
  borderBottom: `1px dashed ${vars.colors['border-base']}`,
  backdropFilter: 'blur(5px)',
});

export const inner = style({
  display: 'grid',
  placeItems: 'center',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: `min(100%, ${vars.sizes.xl})`,
  marginInline: 'auto',
});

globalStyle(`${inner} > :first-child`, {
  justifySelf: 'start',
});

globalStyle(`${inner} > :last-child`, {
  justifySelf: 'end',
});

export const aside = style({
  display: 'flex',
  gap: vars.spaces.md,
});
