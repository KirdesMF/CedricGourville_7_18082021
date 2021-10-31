import { globalStyle, style } from '@vanilla-extract/css';
import { container, panel } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const header = style([
  utilities({ position: 'sticky' }),
  panel.lg,
  {
    borderBottom: `1px solid ${vars.colors['border-base']}`,
    top: 0,
    backdropFilter: 'blur(5px)',
    isolation: 'isolate',
    zIndex: 1,
  },
]);

export const inner = style([
  container({ width: 'xl', padding: 'md' }),
  {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
]);

globalStyle(`${inner} > :first-child`, {
  justifySelf: 'start',
});

globalStyle(`${inner} > :last-child`, {
  justifySelf: 'end',
});

export const aside = style([utilities({ display: 'flex', gap: 'sm' })]);
