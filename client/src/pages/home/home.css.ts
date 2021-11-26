import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const main = utilities({
  position: 'relative',
  display: 'flex',
  paddingBlock: 'lg',
  paddingInline: 'lg',
});

export const inner = style([
  utilities({
    display: 'grid',
    alignItems: 'center',
    width: 'lg',
    marginInline: 'auto',
  }),
  {
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
  },
]);

export const section = utilities({
  display: 'grid',
  gap: 'lg',
});

export const nav = style([
  utilities({
    display: 'flex',
    gap: 'md',
  }),
  {
    flexWrap: 'wrap',
  },
]);

globalStyle(`${nav} > *`, {
  flex: '0 1 15ch',
});
