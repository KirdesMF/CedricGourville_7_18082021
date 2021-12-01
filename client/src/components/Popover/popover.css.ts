import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';
import { utilities } from '../../styles/utilities.css';

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
  }),
  {
    selectors: {
      '&:not(:first-child)': {
        borderTop: `1px solid ${vars.colors.primary6}`,
      },
    },
  },
]);

export const button = utilities({
  paddingBlock: 'md',
  paddingInline: 'lg',
});
