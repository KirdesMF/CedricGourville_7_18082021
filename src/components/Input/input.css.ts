import { globalStyle, style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

globalStyle('input:-webkit-autofill, input:-internal-autofill-selected', {
  backgroundColor: `${vars.colors['ui-base']} !important`,
  boxShadow: `0 0 0px 1000px ${vars.colors['ui-base']} inset`,
  color: `${vars.colors['on-base-high-contrast']} !important`,
});

export const input = style([
  {
    border: 'none',
    paddingInline: vars.spaces.md,
    paddingBlock: vars.spaces.sm,
    appearance: 'none',
    WebkitTextFillColor: vars.colors['on-base-high-contrast'],

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
