import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const input = style([
  utilities({
    background: 'primary3',
    color: 'on-base-high-contrast',
    fontSize: 'sm',
    paddingInline: 'md',
    paddingBlock: 'sm',
    position: 'relative',
  }),
  {
    border: 'none',
    appearance: 'none',

    borderBottom: `1px solid ${vars.colors['on-base-high-contrast']}`,
    WebkitTextFillColor: vars.colors['on-base-high-contrast'],

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

// globalStyle(`${input} ~ span`, {
//   position: 'absolute',
//   bottom: '-50%',
// });
