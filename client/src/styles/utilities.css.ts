import { vars } from './vars.css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { makeBreakpoint } from '../utils/breakpoints.utils';

const properties = defineProperties({
  properties: {
    position: ['relative', 'absolute', 'sticky', 'fixed'],
    width: {
      md: `min(100%, ${vars.sizes.md})`,
      lg: `min(100%, ${vars.sizes.lg})`,
      xl: `min(100%, ${vars.sizes.xl})`,
      '2xl': `min(100%, ${vars.sizes['2xl']})`,
      full: `min(100%, ${vars.sizes.full})`,
    },
    alignItems: ['center', 'stretch', 'start', 'end', 'baseline'],
    justifyContent: ['space-between', 'flex-start', 'flex-end', 'center'],
    placeItems: ['center'],
    flex: [1],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    gap: vars.spaces,
    borderRadius: vars.radius,
    fontSize: vars.fonts.sizes,
    fontVariationSettings: vars.fonts.variations,
    padding: vars.spaces,
    paddingInline: vars.spaces,
    paddingBlock: vars.spaces,
    marginInline: ['auto'],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { '@media': makeBreakpoint('md') },
    lg: { '@media': makeBreakpoint('lg') },
  },
  defaultCondition: 'sm',
  properties: {
    display: ['none', 'initial', 'flex', 'inline-flex', 'grid', 'inline-grid'],
  },
});

const colorsProperties = defineProperties({
  conditions: {
    default: {},
    '@hover': { selector: '&:hover' },
  },
  defaultCondition: 'default',
  properties: {
    color: { none: 'none', ...vars.colors },
    background: { none: 'none', ...vars.colors },
  },
});

export const utilities = createSprinkles(
  properties,
  responsiveProperties,
  colorsProperties
);
