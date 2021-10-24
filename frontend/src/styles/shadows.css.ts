import { createGlobalTheme } from '@vanilla-extract/css';
import { colorsVars } from './colors.css';

export const shadowsVars = createGlobalTheme(':root', {
  'box-shadow': {
    sm: `0px 0px 5px ${colorsVars.colors['on-base-low-contrast']}`,
  },
});
