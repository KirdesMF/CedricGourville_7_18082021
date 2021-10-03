import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const header = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  background: vars.color.graySubtle,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: vars.spaces.medium,
  borderBottom: `1px solid ${vars.color.grayLine}`,
});

export const title = style({
  fontSize: vars.fontSizes.small,
  color: vars.color.appTextContrast,
  fontFamily: vars.font.title,
});
