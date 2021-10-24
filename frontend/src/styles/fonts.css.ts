import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';
// TODO
// add fluid font size

globalFontFace('Lexend Deca', {
  src: 'url(/fonts/LexendDeca-VariableFont_wght.ttf)',
  fontDisplay: 'swap',
});

export const fontsVars = createGlobalTheme(':root', {
  fonts: {
    family: {
      global: 'Lexend Deca',
    },
    sizes: {
      1: '0.625rem',
      2: '0.75rem',
      3: '0.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '1.75rem',
      9: '2rem',
      10: '2.625rem',
    },
    variations: {
      100: `'wght' 100`,
      200: `'wght' 200`,
      700: `'wght' 700`,
      850: `'wght' 850`,
      900: `'wght' 900`,
    },
  },

  'line-heights': {
    reset: '1.5',
  },
});
