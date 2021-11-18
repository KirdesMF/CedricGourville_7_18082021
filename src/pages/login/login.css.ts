import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

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
