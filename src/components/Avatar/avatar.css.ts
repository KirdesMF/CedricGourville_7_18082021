import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const avatar = style({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: vars.radius.full,
  userSelect: 'none',
  verticalAlign: 'middle',
  position: 'relative',
  border: `2px solid ${vars.colors.primary9}`,
  padding: '0.25rem',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const imgAvatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const svg = style({
  width: '2.5rem',
  height: '2.5rem',
});
