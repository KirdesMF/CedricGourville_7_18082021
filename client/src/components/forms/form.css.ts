import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const flexField = style([
  utilities({
    display: 'flex',
    gap: 'xl',
  }),
  { flexWrap: 'wrap' },
]);

globalStyle(`${flexField} > *`, {
  flex: 1,
});

export const comment = style([
  utilities({
    display: 'grid',
    gap: 'md',
  }),
  { gridTemplateColumns: '1fr min-content' },
]);

export const preview = style({
  width: 'min(100%, 100vw - 2rem)',
  maxHeight: '15rem',
  objectFit: 'cover',
});

export const previewProfile = style({
  width: '15rem',
  maxHeight: '15rem',
  objectFit: 'cover',
  borderRadius: '50%',
});
