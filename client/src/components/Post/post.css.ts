import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

const border = `1px dashed ${vars.colors.base4}`;
export const centered = style({ placeSelf: 'center' });

export const article = style([
  utilities({
    display: 'grid',
    paddingInline: 'md',
    background: 'base1',
    borderRadius: 'xs',
  }),
  {
    gridTemplateColumns: '48px 1fr 48px',
    columnGap: vars.spaces.sm,
  },
]);

export const header = style([
  utilities({
    display: 'grid',
    gap: 'md',
    paddingBlock: 'md',
    alignItems: 'center',
  }),
  {
    borderBottom: border,
    gridTemplateColumns: '48px 1fr min-content',
    gridColumn: '1/-1',
  },
]);

export const info = style([
  utilities({
    display: 'flex',
    gap: 'sm',
    alignItems: 'center',
  }),
]);

export const content = style([
  utilities({
    paddingBlock: 'md',
    display: 'grid',
    gap: 'sm',
  }),
  {
    gridColumn: 2,
    gridRow: 2,
  },
]);

export const avatar = style({
  width: 'min-content',
  height: 'min-content',
  placeSelf: 'center',
});

export const interact = style([
  utilities({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: 'md',
  }),
  { gridColumn: 2, gridRow: 3 },
]);

export const buttons = style([
  utilities({
    display: 'flex',
    gap: 'md',
    alignItems: 'center',
  }),
]);

export const figure = style([
  {
    overflow: 'hidden',
  },
]);

export const img = style({
  objectFit: 'contain',
  maxHeight: '25rem',
  borderRadius: 'inherit',
  filter: `grayscale(50%)`,
  transition: `filter 500ms ease-in-out, transform 500ms ease`,

  ':hover': {
    filter: `grayscale(0%)`,
    transform: 'scale(1.05)',
  },
});

export const avatars = style([
  utilities({ display: 'inline-flex' }),
  {
    flexDirection: 'row-reverse',
  },
]);

export const avatarComments = style({
  selectors: {
    '&:not(:last-child)': {
      marginLeft: '-10px',
    },
  },
});

export const wrapperComments = style({
  gridRow: 4,
  gridColumn: '1/-1',
});

export const comment = style([
  utilities({
    display: 'grid',
    alignItems: 'center',
    gap: 'md',
    paddingBlock: 'md',
  }),
  {
    borderTop: border,
    gridRow: 4,
    gridColumn: '1/-1',
    gridTemplateColumns: '48px 1fr',
  },
]);

export const form = style([
  utilities({
    paddingBlock: 'md',
    display: 'grid',
    gap: 'md',
    alignItems: 'center',
  }),
  {
    gridTemplateColumns: '48px 1fr',
    gridColumn: '1/-1',
    gridRow: 5,
    borderTop: border,
  },
]);

export const list = style([
  utilities({
    display: 'grid',
    fontSize: 'xs',
    fontVariationSettings: 'thin',
    background: 'base4',
    borderRadius: 'xs',
  }),
]);

export const item = style([
  utilities({
    display: 'flex',
    alignItems: 'center',
    gap: 'xs',
    paddingInline: 'md',
    paddingBlock: 'sm',
  }),
  {
    selectors: {
      '&:not(:first-child)': {
        borderTop: `1px solid ${vars.colors.primary6}`,
      },
    },
  },
]);
