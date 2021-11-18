import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const guides = style([
  utilities({
    position: 'absolute',
    display: 'grid',
    width: 'lg',
    marginInline: 'auto',
  }),
  {
    zIndex: -1,
    inset: 0,
    height: '100%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    borderRight: `1px dashed ${vars.colors.base4}`,
  },
]);

export const line = style({
  width: '1px',
  height: '100%',
  borderLeft: `1px dashed ${vars.colors.base4}`,
});
