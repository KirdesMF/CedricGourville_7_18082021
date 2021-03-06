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

// anchors
globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
});

globalStyle('a', {
  textDecoration: 'none',
});

// images
globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  background: 'none',
  padding: 0,
});

globalStyle('ul, li', { listStyle: 'none', padding: 0, margin: 0 });

// Set body defaults
globalStyle('body', {
  textRendering: 'optimizeSpeed',
  lineHeight: vars['line-heights'].reset,
  overflowX: 'hidden',
  background: vars.colors.base1,
  fontFamily: vars.fonts.family.global,
});

globalStyle('#root', {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'min-content 1fr min-content',
});

globalStyle(':root.dark', { colorScheme: 'dark' });
globalStyle(':root', { colorScheme: 'light' });
