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
  lineHeight: vars['line-heights'].reset,
  background: vars.colors['bg-base'],
  fontFamily: vars.fonts.family.global,
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
});

// TODO improve autocomplete chrome
globalStyle('input:-internal-autofill-selected', {
  backgroundColor: 'transparent',
  boxShadow: `0 0 0px 1000px ${vars.colors['ui-base']} inset`,
  color: `${vars.colors['on-base-low-contrast']} !important`,
});

globalStyle('html, body, #root', {
  height: '100%',
});
