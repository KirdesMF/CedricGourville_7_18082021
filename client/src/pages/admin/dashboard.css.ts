import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { utilities } from '../../styles/utilities.css';
import { makeBreakpoint } from '../../utils/breakpoints.utils';

export const main = utilities({
  paddingBlock: '2xl',
  paddingInline: 'lg',
});

export const inner = utilities({
  display: 'grid',
  gap: '2xl',
  padding: '2xl',
  width: 'lg',
  marginInline: 'auto',
});

export const section = utilities({
  display: 'grid',
  gap: 'sm',
});

export const table = style({
  width: '100%',
  border: `unset`,

  '@media': {
    [makeBreakpoint('lg')]: {
      border: `0.5px solid ${vars.colors.base4}`,
    },
  },
});

export const thead = style({
  display: 'none',

  '@media': {
    [makeBreakpoint('lg')]: {
      display: 'table-header-group',
      textAlign: 'left',
    },
  },
});

globalStyle(`${thead} th`, {
  '@media': {
    [makeBreakpoint('lg')]: {
      padding: '0.5rem 1rem',
      fontVariationSettings: vars.fonts.variations.thin,
      borderLeft: `0.5px solid ${vars.colors.base4}`,
    },
  },
});

export const tbody = style({
  display: 'block',
  background: vars.colors.base3,
  marginBlockEnd: '1rem',
  boxShadow: `1px 2px 3px ${vars.colors.shadow}`,
  selectors: {
    [`&:nth-child(even)`]: {
      backgroundColor: vars.colors.base5,
    },
  },

  '@media': {
    [makeBreakpoint('lg')]: {
      display: 'table-row-group',
      marginBlockEnd: '0',
      boxShadow: 'none',
    },
  },
});

globalStyle(`${tbody} tr`, {
  display: 'grid',
  '@media': {
    [makeBreakpoint('lg')]: {
      display: 'table-row',
    },
  },
});

export const border = style({
  selectors: {
    ['&:not(:last-child)']: {
      borderBottom: `1px solid ${vars.colors.base9}`,
    },
  },

  '@media': {
    [makeBreakpoint('lg')]: {
      selectors: {
        ['&:not(:last-child)']: {
          borderBottom: `unset`,
        },
      },
    },
  },
});

export const td = style({
  padding: '0.5rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  selectors: {
    ['&:before']: {
      content: 'attr(data-label)',
    },
  },

  '@media': {
    [makeBreakpoint('lg')]: {
      justifyContent: 'unset',
      borderBottom: `unset`,
      selectors: {
        ['&:before']: {
          content: '',
          position: 'absolute',
        },
      },
    },
  },
});

globalStyle(`${td} > :is(p, a)`, {
  width: 'calc(30%)',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  '@media': {
    [makeBreakpoint('lg')]: {
      width: 'calc(100%)',
    },
  },
});

export const tdCentered = style([
  td,
  {
    justifyContent: 'flex-end',
    gridRow: 1,

    '@media': {
      [makeBreakpoint('lg')]: {
        justifyContent: 'center',
        gridRow: 'unset',
      },
    },
  },
]);
