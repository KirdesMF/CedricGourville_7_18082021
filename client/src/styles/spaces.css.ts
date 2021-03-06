import { createGlobalTheme } from '@vanilla-extract/css';

export const spacesVars = createGlobalTheme(':root', {
  spaces: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
});
