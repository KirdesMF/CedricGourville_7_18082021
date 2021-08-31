import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'white',
    secondary: 'hsl(0, 10%, 10%)',
  },
  panel: '2.5rem',
  flow: '2.5rem',
  maxWidth: {
    mobile: '100%',
    desktop: '80rem',
  },
});
