import { createThemeContract } from '@vanilla-extract/css';

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
    boxShadowThin: null,
  },
  spaces: {
    sp2: null,
    sp4: null,
    sp6: null,
    sp8: null,
    sp10: null,
    sp12: null,
    sp14: null,
    sp16: null,
    sp18: null,
    sp32: null,
    sp48: null,
    sp50: null,
  },
  font: {
    title: null,
    text: null,
  },
  fontSizes: {
    small: null,
    large: null,
  },
  lineHeights: {
    small: null,
  },
  radius: {
    thin: null,
    rounded: null,
    pills: null,
  },
  zIndexes: {
    z0: null,
    z10: null,
    z20: null,
    z30: null,
    z40: null,
    z50: null,
  },
  widths: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    full: null,
  },
});
