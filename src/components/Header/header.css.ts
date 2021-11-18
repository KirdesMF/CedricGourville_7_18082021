import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const header = style([
  utilities({
    position: 'sticky',
    paddingBlock: 'lg',
    paddingInline: 'md',
  }),
  {
    zIndex: 1,
    top: 0,
    borderBottom: `1px dashed ${vars.colors['border-base']}`,
    backdropFilter: 'blur(5px)',
  },
]);

export const inner = style([
  utilities({
    display: 'grid',
    placeItems: 'center',
    width: 'xl',
    marginInline: 'auto',
  }),
  {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
]);

globalStyle(`${inner} > :first-child`, {
  justifySelf: 'start',
});

globalStyle(`${inner} > :last-child`, {
  justifySelf: 'end',
});

export const aside = utilities({
  display: 'flex',
  gap: 'md',
});
