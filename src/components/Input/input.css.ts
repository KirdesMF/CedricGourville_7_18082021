import { style } from '@vanilla-extract/css';
import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';

export const input = style([
  {
    border: 'none',
    boxShadow: `inset 0 0 2px ${vars.colors['ui-base']}, inset 0 0 2px ${vars.colors['ui-base']}`,
    paddingInline: vars.spaces.md,
    paddingBlock: vars.spaces.sm,
    appearance: 'none',
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
