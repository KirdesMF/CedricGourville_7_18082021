import {
  indigo,
  indigoDark,
  red,
  redDark,
  slate,
  slateDark,
} from '@radix-ui/colors';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    // gray base
    grayBase: null,
    graySubtle: null,
    grayBg: null,
    grayBgHover: null,
    grayBgActive: null,
    grayLine: null,
    grayBorder: null,
    grayBorderHover: null,
    graySolid: null,
    graySolidHover: null,

    // accent
    accentBase: null,
    accentSubtle: null,
    accentBg: null,
    accentBgHover: null,
    accentBgActive: null,
    accentLine: null,
    accentBorder: null,
    accentBorderHover: null,
    accentSolid: null,
    accentSolidHover: null,

    // text color
    appText: null,
    appTextContrast: null,

    // error
    warning: null,
  },
  spaces: {
    small: null,
    medium: null,
    large: null,
  },
  font: {
    title: null,
    text: null,
  },
  fontSizes: {
    small: null,
    large: null,
  },
});

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
});

// fonts
createGlobalTheme(
  ':root',
  { ...vars.font, ...vars.fontSizes },
  {
    small: '1.5rem',
    large: '3rem',
    title: 'RobotoSlab',
    text: 'Anaheim',
  }
);

// spaces
createGlobalTheme(':root', vars.spaces, {
  small: '0.75rem',
  medium: '2.5rem',
  large: '3.5rem',
});
