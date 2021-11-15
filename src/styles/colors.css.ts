import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import {
  indigo,
  indigoDark,
  red,
  redDark,
  slateDark,
  slate,
  green,
  greenDark,
  orange,
  orangeDark,
} from '@radix-ui/colors';

// Utils
function makeContratFromPalette<
  K extends Record<string, string>,
  T extends keyof K
>(palette: K) {
  return Object.keys(palette).reduce((acc, key) => {
    return {
      ...acc,
      [key]: null,
    };
  }, {} as Record<T, null>);
}

// Base colors
const baseColorVars = createThemeContract({
  colors: {
    ...makeContratFromPalette(red),
    ...makeContratFromPalette(slate),
    ...makeContratFromPalette(indigo),
    ...makeContratFromPalette(green),
    ...makeContratFromPalette(orange),
  },
});

createGlobalTheme(':root', baseColorVars, {
  colors: {
    ...red,
    ...slate,
    ...indigo,
    ...green,
    ...orange,
  },
});

createGlobalTheme(':root.dark', baseColorVars, {
  colors: {
    ...redDark,
    ...slateDark,
    ...indigoDark,
    ...greenDark,
    ...orangeDark,
  },
});

export const colorsVars = createGlobalTheme(':root', {
  colors: {
    'bg-base': baseColorVars.colors.slate1,
    'bg-base-subtle': baseColorVars.colors.slate2,
    'ui-base': baseColorVars.colors.slate3,
    'ui-base-hover': baseColorVars.colors.slate4,
    'ui-base-focus': baseColorVars.colors.slate4,
    'ui-base-active': baseColorVars.colors.slate5,
    'border-base': baseColorVars.colors.slate6,

    'brand-primary': baseColorVars.colors.indigo9,
    'brand-secondary': baseColorVars.colors.red9,

    'ui-primary': baseColorVars.colors.indigo3,
    'ui-primary-hover': baseColorVars.colors.indigo4,
    'ui-primary-focus': baseColorVars.colors.indigo4,
    'ui-primary-active': baseColorVars.colors.indigo5,
    'border-primary': baseColorVars.colors.indigo6,
    'border-primary-hover': baseColorVars.colors.indigo7,
    'border-primary-focus': baseColorVars.colors.indigo7,
    'outline-primary': baseColorVars.colors.indigo8,

    'ui-secondary': baseColorVars.colors.red3,
    'ui-secondary-hover': baseColorVars.colors.red4,
    'ui-secondary-focus': baseColorVars.colors.red4,
    'ui-secondary-active': baseColorVars.colors.red5,
    'border-secondary': baseColorVars.colors.red6,
    'border-secondary-hover': baseColorVars.colors.red7,
    'border-secondary-focus': baseColorVars.colors.red8,
    'outline-secondary': baseColorVars.colors.red8,

    base1: baseColorVars.colors.slate1,
    base2: baseColorVars.colors.slate2,
    base3: baseColorVars.colors.slate3,
    base4: baseColorVars.colors.slate4,
    base5: baseColorVars.colors.slate5,
    base6: baseColorVars.colors.slate6,
    base7: baseColorVars.colors.slate7,
    base8: baseColorVars.colors.slate8,
    base9: baseColorVars.colors.slate9,
    base10: baseColorVars.colors.slate10,
    base11: baseColorVars.colors.slate11,
    base12: baseColorVars.colors.slate12,
    'on-base-low-contrast': baseColorVars.colors.slate11,
    'on-base-high-contrast': baseColorVars.colors.slate12,

    primary1: baseColorVars.colors.indigo1,
    primary2: baseColorVars.colors.indigo2,
    primary3: baseColorVars.colors.indigo3,
    primary4: baseColorVars.colors.indigo4,
    primary5: baseColorVars.colors.indigo5,
    primary6: baseColorVars.colors.indigo6,
    primary7: baseColorVars.colors.indigo7,
    primary8: baseColorVars.colors.indigo8,
    primary9: baseColorVars.colors.indigo9,
    primary10: baseColorVars.colors.indigo10,
    primary11: baseColorVars.colors.indigo11,
    primary12: baseColorVars.colors.indigo12,
    'on-primary-low-contrast': baseColorVars.colors.indigo11,
    'on-primary-high-contrast': baseColorVars.colors.indigo12,

    secondary1: baseColorVars.colors.red1,
    secondary2: baseColorVars.colors.red2,
    secondary3: baseColorVars.colors.red3,
    secondary4: baseColorVars.colors.red4,
    secondary5: baseColorVars.colors.red5,
    secondary6: baseColorVars.colors.red6,
    secondary7: baseColorVars.colors.red7,
    secondary8: baseColorVars.colors.red8,
    secondary9: baseColorVars.colors.red9,
    secondary10: baseColorVars.colors.red10,
    secondary11: baseColorVars.colors.red11,
    secondary12: baseColorVars.colors.red12,
    'on-secondary-low-contrast': baseColorVars.colors.red11,
    'on-secondary-high-contrast': baseColorVars.colors.red12,

    error: baseColorVars.colors.red9,
    success: baseColorVars.colors.green9,
    'on-success-high-contrast': baseColorVars.colors.green12,
    warning: baseColorVars.colors.red9,
    info: baseColorVars.colors.indigo9,
    shadow: 'hsl(200, 20%, 10%, 0.6)',
  },
});
