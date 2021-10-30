import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const avatar = style({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: vars.radius.full,
  userSelect: 'none',
  verticalAlign: 'middle',
  position: 'relative',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  '::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: vars.radius.full,
    backgroundColor: vars.colors.success,
  },
});

export const imgAvatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
