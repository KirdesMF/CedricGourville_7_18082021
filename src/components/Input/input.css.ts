import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const input = style([
  utilities({
    background: 'ui-base',
    color: 'on-base-high-contrast',
    fontSize: 'sm',
    paddingInline: 'md',
    paddingBlock: 'sm',
    borderRadius: 'sm',
  }),
  {
    background: 'none',
    border: 'none',
    appearance: 'none',
    WebkitTextFillColor: vars.colors['on-base-high-contrast'],
    width: `min(100%, ${vars.sizes.lg} / 2)`,
    boxShadow: `0 0 0 0.5px ${vars.colors['on-base-high-contrast']}`,

    ':focus': {
      outline: 'none',
    },

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
]);

export const small = style([
  utilities({ color: 'on-base-high-contrast' }),
  { justifySelf: 'center' },
]);
