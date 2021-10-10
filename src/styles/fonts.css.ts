import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

globalFontFace('Anaheim', {
  src: 'url(/fonts/Anaheim-Regular.ttf)',
  fontDisplay: 'swap',
});

globalFontFace('RobotoSlab', {
  src: 'url(/fonts/RobotoSlab-Bold.ttf)',
  fontDisplay: 'swap',
});

globalFontFace('Lemon', {
  src: 'url(/fonts/LemonMilkBold-gx2B3.otf)',
  fontDisplay: 'swap',
});

export const fontsVars = createGlobalTheme(':root', {
  fonts: {
    family: {
      heading: 'Lemon',
      paragraph: 'Anaheim',
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
  },

  'line-heights': {
    reset: '1.5',
  },
});
