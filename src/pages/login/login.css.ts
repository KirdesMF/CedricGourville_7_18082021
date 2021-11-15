import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const main = style({
  position: 'relative',
  display: 'flex',
  paddingBlock: vars.spaces.lg,
  paddingInline: vars.spaces.lg,
});

export const inner = style({
  display: 'grid',
  gridAutoColumns: '1fr',
  gridAutoFlow: 'column',
  alignItems: 'center',
  width: 'min(100%, 64rem)',
  marginInline: 'auto',
});

export const section = style({
  display: 'grid',
  gap: vars.spaces.lg,
});
