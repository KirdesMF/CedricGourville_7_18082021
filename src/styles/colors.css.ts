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
    'on-base-low-contrast': baseColorVars.colors.slate11,
    'on-base-high-contrast': baseColorVars.colors.slate12,

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
    'on-primary-low-contrast': baseColorVars.colors.indigo11,
    'on-primary-high-contrast': baseColorVars.colors.indigo12,

    'ui-secondary': baseColorVars.colors.red3,
    'ui-secondary-hover': baseColorVars.colors.red4,
    'ui-secondary-focus': baseColorVars.colors.red4,
    'ui-secondary-active': baseColorVars.colors.red5,
    'border-secondary': baseColorVars.colors.red6,
    'border-secondary-hover': baseColorVars.colors.red7,
    'border-secondary-focus': baseColorVars.colors.red8,
    'outline-secondary': baseColorVars.colors.red8,
    'on-secondary-low-contrast': baseColorVars.colors.red11,
    'on-secondary-high-contrast': baseColorVars.colors.red12,

    error: baseColorVars.colors.red9,
    success: baseColorVars.colors.green9,
    warning: baseColorVars.colors.red9,
    info: baseColorVars.colors.indigo9,
  },
});
