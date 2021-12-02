import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const header = style([
  utilities({
    position: 'sticky',
    paddingBlock: 'lg',
    paddingInline: 'lg',
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

export const groupomania = style({
  display: 'none',
  '@media': {
    [makeBreakpoint('md')]: {
      display: 'initial',
    },
  },
});

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
