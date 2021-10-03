import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html, body, *, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  background: vars.color.graySubtle,
  width: vars.spaces.large,
});

globalStyle('h1, h2, h3', {
  margin: 0,
});

globalFontFace('Anaheim', {
  src: 'url(/fonts/Anaheim-Regular.ttf)',
});

globalFontFace('RobotoSlab', {
  src: 'url(/fonts/RobotoSlab-Bold.ttf)',
});
