import { globalCss } from './stitches.config';

export const resetCSS = globalCss({
  'html, body': {
    boxSizing: 'border-box',
  },
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },
  body: {
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
    overflowX: 'hidden',
    backgroundColor: '$blue1',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  'body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dd, dl': {
    margin: 0,
  },
  'image, picture': {
    maxWidth: '100%',
    display: 'block',
  },
  '@font-face': [
    {
      fontFamily: 'Anaheim',
      src: 'url("/fonts/Anaheim-Regular.ttf")',
    },
    {
      fontFamily: 'RobotoSlab Bold',
      src: 'url("/fonts/RobotoSlab-Bold.ttf")',
    },
  ],
});
