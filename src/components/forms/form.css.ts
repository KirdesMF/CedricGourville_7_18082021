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
