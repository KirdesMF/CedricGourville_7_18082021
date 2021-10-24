import { createGlobalTheme } from '@vanilla-extract/css';

export const sizesVars = createGlobalTheme(':root', {
  sizes: {
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
    '2xl': '96rem',
    full: '100%',
  },
});
