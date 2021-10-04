import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

const reducedMotion = `(prefers-reduced-motion: reduce)`;
// Box Sizing rules
globalStyle('html, body', {
  boxSizing: 'border-box',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  '@media': {
    [reducedMotion]: {
      scrollBehavior: 'auto',
      animationDuration: '0.01ms !important',
      transitionDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
    },
  },
});

// Remove default margin
globalStyle('body, h1, h2, h3, p, figure, blockquote, dl, dd', {
  margin: 0,
});

// Set root defaults
globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',
  '@media': {
    [reducedMotion]: {
      scrollBehavior: 'auto',
    },
  },
});

// Set body defaults
globalStyle('body', {
  textRendering: 'optimizeSpeed',
  lineHeight: 1.5,
  background: vars.color.graySubtle,
});

globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
});

globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('html, body, #root', {
  height: '100%',
});
