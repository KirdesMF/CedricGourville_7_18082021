import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { utilities } from '../../styles/utilities.css';

export const main = utilities({
  paddingBlock: '2xl',
  paddingInline: 'lg',
});

export const inner = style([
  utilities({
    display: 'flex',
    gap: 'lg',
    padding: '2xl',
    width: 'lg',
    marginInline: 'auto',
    flexDirection: 'column',
  }),
]);

export const heading = style([
  utilities({
    display: 'flex',
    gap: 'md',
    alignItems: 'baseline',
  }),
]);

export const section = utilities({
  display: 'flex',
  gap: 'md',
  flexDirection: 'column',
});

export const buttons = utilities({
  display: 'flex',
  gap: 'md',
});

export const articles = style([
  utilities({
    display: 'grid',
    gap: 'md',
    color: 'base12',
  }),
  {
    gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
    gridAutoRows: '20rem',
  },
]);

export const article = style([
  utilities({
    display: 'grid',
    placeItems: 'center',
    background: 'primary3',
    borderRadius: 'md',
    padding: 'lg',
  }),
  { boxShadow: `0 0 5px ${vars.colors.shadow}` },
]);

export const avatar = utilities({
  display: 'grid',
  placeItems: 'center',
  gap: 'md',
});

export const list = style([
  utilities({
    display: 'grid',
    gap: 'xs',
  }),
]);

export const item = style([
  {
    selectors: {
      [`&:not(:last-child)`]: {},
    },
  },
]);

export const hr = style({
  height: '0.5px',
  width: '100%',
  display: 'flex',
  border: 'none',
  borderBottom: `0.1px dashed ${vars.colors.secondary9}`,
});
