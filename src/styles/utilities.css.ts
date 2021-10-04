import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

export const wrapper = style({
  margin: '0 auto',
  width: `min(100%, ${vars.widths.xxl})`,
});

export const panel = style({
  padding: vars.spaces.sp18,
});

const properties = defineProperties({
  properties: {
    display: ['flex', 'grid'],
    position: ['relative', 'absolute', 'sticky', 'fixed'],
    gap: vars.spaces,
  },
});

export const utilities = createSprinkles(properties);
