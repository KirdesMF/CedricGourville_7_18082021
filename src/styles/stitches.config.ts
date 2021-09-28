import { createStitches } from '@stitches/react';
import { fonts, fontSizes, spaces, widths } from './theme';
import { blue, blueDark, red, redDark, gray, grayDark } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';

export const { styled, css, createTheme, globalCss, config } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...red,
      ...gray,
      lowContrast: '$gray11',
      highContrast: '$gray12',
    },
    sizes: { ...widths },
    space: { ...spaces },
    fonts: { ...fonts },
    fontSizes: { ...fontSizes },
  },
  media: {
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    hover: '(any-hover: hover)',
  },
});

export const darkTheme = createTheme({
  colors: {
    ...redDark,
    ...blueDark,
    ...grayDark,
  },
});

export type CSS = Stitches.CSS<typeof config>;
