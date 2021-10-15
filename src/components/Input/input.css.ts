import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const input = style([
  {
    border: `1px solid ${vars.colors['on-base-high-contrast']}`,
    background: 'none',
    paddingInline: vars.spaces.md,
    paddingBlock: vars.spaces.sm,
    appearance: 'none',
    WebkitTextFillColor: vars.colors['on-base-high-contrast'],
    width: 'min(100%, 52ch)',

    selectors: {
      [`&:-webkit-autofill, &:-internal-autofill-selected`]: {
        backgroundColor: `${vars.colors['ui-base']} !important`,
        boxShadow: `0 0 0px 1000px ${vars.colors['ui-base']} inset`,
        color: `${vars.colors['on-base-high-contrast']} !important`,
      },
    },

    '::placeholder': {
      fontStyle: 'italic',
      fontVariationSettings: vars.fonts.variations[200],
    },
  },
  utilities({
    background: 'ui-base',
    color: 'on-base-high-contrast',
    fontSize: 3,
  }),
]);

export const small = style([
  { justifySelf: 'center' },
  utilities({ color: 'on-base-high-contrast' }),
]);
