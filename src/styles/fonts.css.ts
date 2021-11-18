import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

/**
 * @link https://fluid-typography.netlify.app/
 */

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
      xs: 'clamp(0.625rem, 1vw + 0.2rem, 0.875rem)',
      sm: 'clamp(0.75rem, 1vw + 0.3rem, 1rem)',
      md: 'clamp(1rem, 1vw + 0.6rem, 1.25rem)',
      lg: 'clamp(1.375rem, 1.6vw + 0.8rem, 1.75rem)',
      xl: 'clamp(2.5rem, 2.1vw + 1.7rem, 3rem)',
    },
    variations: {
      thin: `'wght' 200`,
      'semi-bold': `'wght' 700`,
      bold: `'wght' 850`,
    },
  },

  'line-heights': {
    reset: '1.5',
  },
});
