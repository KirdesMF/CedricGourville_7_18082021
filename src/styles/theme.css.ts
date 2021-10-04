import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from './vars.css';
import {
  indigo,
  indigoDark,
  red,
  redDark,
  slate,
  slateDark,
} from '@radix-ui/colors';

// light theme
createGlobalTheme(':root', vars.color, {
  grayBase: slate.slate1,
  graySubtle: slate.slate2,
  grayBg: slate.slate3,
  grayBgHover: slate.slate4,
  grayBgActive: slate.slate5,
  grayLine: slate.slate6,
  grayBorder: slate.slate7,
  grayBorderHover: slate.slate8,
  graySolid: slate.slate9,
  graySolidHover: slate.slate10,

  accentBase: indigo.indigo1,
  accentSubtle: indigo.indigo2,
  accentBg: indigo.indigo3,
  accentBgHover: indigo.indigo4,
  accentBgActive: indigo.indigo5,
  accentLine: indigo.indigo6,
  accentBorder: indigo.indigo7,
  accentBorderHover: indigo.indigo8,
  accentSolid: indigo.indigo9,
  accentSolidHover: indigo.indigo10,

  appText: indigo.indigo11,
  appTextContrast: indigo.indigo12,

  warning: red.red10,
  boxShadowThin: `0 0 6px ${slate.slate11}`,
});

// dark theme
createGlobalTheme(':root.dark', vars.color, {
  grayBase: slateDark.slate1,
  graySubtle: slateDark.slate2,
  grayBg: slateDark.slate3,
  grayBgHover: slateDark.slate4,
  grayBgActive: slateDark.slate5,
  grayLine: slateDark.slate6,
  grayBorder: slateDark.slate7,
  grayBorderHover: slateDark.slate8,
  graySolid: slateDark.slate9,
  graySolidHover: slateDark.slate10,

  accentBase: indigoDark.indigo1,
  accentSubtle: indigoDark.indigo2,
  accentBg: indigoDark.indigo3,
  accentBgHover: indigoDark.indigo4,
  accentBgActive: indigoDark.indigo5,
  accentLine: indigoDark.indigo6,
  accentBorder: indigoDark.indigo7,
  accentBorderHover: indigoDark.indigo8,
  accentSolid: indigoDark.indigo9,
  accentSolidHover: indigoDark.indigo10,

  appText: indigoDark.indigo11,
  appTextContrast: indigoDark.indigo12,

  warning: redDark.red10,
  boxShadowThin: `0 0 0px ${slate.slate11}`,
});

// fonts
createGlobalTheme(
  ':root',
  { ...vars.font, ...vars.fontSizes },
  {
    small: 'clamp(1rem, 1vw + 1rem, 1.5rem)',
    large: 'clam(3rem, 1vw + 1rem, 4.5rem)',

    title: 'Lemon',
    text: 'Anaheim',
  }
);

// fixed
createGlobalTheme(
  ':root',
  { ...vars.spaces, ...vars.zIndexes, ...vars.widths, ...vars.radius },
  {
    sp2: '0.125rem',
    sp4: '0.25rem',
    sp6: '0.375rem',
    sp8: '0.5rem',
    sp10: '0.625rem',
    sp12: '0.75rem',
    sp14: '0.875rem',
    sp16: '1rem',
    sp18: '1.125rem',
    sp32: '2rem',
    sp48: '3rem',
    sp50: '3.125rem',

    z0: '0',
    z10: '10',
    z20: '20',
    z30: '30',
    z40: '40',
    z50: '50',

    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
    xxl: '96rem',
    full: '100%',

    thin: '0.3125rem',
    rounded: '50%',
    pills: '999px',
  }
);
