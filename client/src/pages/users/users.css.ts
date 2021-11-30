import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';

export const main = utilities({
  paddingBlock: '2xl',
  paddingInline: 'lg',
});

export const inner = utilities({
  display: 'grid',
  gap: 'lg',
  padding: '2xl',
  width: 'lg',
  marginInline: 'auto',
});

export const heading = style([
  utilities({
    display: 'flex',

    gap: 'md',
    alignItems: 'baseline',
  }),
]);

export const wrapperSections = utilities({
  display: 'flex',
  gap: 'lg',
});

export const section = utilities({
  display: 'grid',
  gap: 'md',
});

globalStyle(`${wrapperSections} > *`, { flex: 1 });

export const buttons = utilities({
  display: 'flex',
  gap: 'md',
});
