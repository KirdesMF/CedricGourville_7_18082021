import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, *, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  minHeight: '100vh',
  textRendering: 'optimizeSpeed',
  lineHeight: 1.5,
  background: 'black',
});

globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd', {
  margin: 0,
});
