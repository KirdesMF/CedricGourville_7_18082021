import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const overlay = style([
  utilities({
    position: 'fixed',
  }),
  { inset: 0, backdropFilter: 'blur(10px)' },
]);

export const wrapper = style([
  utilities({
    display: 'grid',
    placeItems: 'center',
    position: 'fixed',
  }),
  { inset: 0 },
]);

export const content = style([
  utilities({
    position: 'relative',
    padding: 'lg',
    display: 'grid',
    gap: 'md',
    background: 'base3',
    borderRadius: 'xs',
    placeItems: 'center',
  }),
]);

export const close = style([
  utilities({
    position: 'absolute',
  }),
  {
    right: '2%',
    top: '5%',
  },
]);

export const confirm = utilities({
  display: 'flex',
  gap: 'sm',
});
