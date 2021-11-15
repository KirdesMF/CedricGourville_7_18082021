import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const guides = style({
  position: 'absolute',
  zIndex: -1,
  inset: 0,
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  width: 'min(100%, 64rem)',
  marginInline: 'auto',
  borderRight: `1px dashed ${vars.colors.base4}`,
});

export const line = style({
  width: '1px',
  height: '100%',
  borderLeft: `1px dashed ${vars.colors.base4}`,
});
