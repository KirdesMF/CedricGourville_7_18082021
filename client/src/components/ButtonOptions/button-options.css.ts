import { style } from '@vanilla-extract/css';
import { utilities } from 'src/styles/utilities.css';
import { vars } from '~/styles/vars.css';

export const button = style([
  {
    border: 'none',
    appearance: 'none',
    width: 'max-content',
  },
  utilities({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    borderRadius: 'xs',
    background: { default: 'base1', '@hover': 'base3' },
    color: 'on-base-high-contrast',
    paddingInline: 'sm',
    paddingBlock: 'sm',
  }),
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
