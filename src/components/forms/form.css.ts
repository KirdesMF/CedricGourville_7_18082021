import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const flexField = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spaces.xl,
});

globalStyle(`${flexField} > *`, {
  flex: 1,
});
