import { vars } from './vars.css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { makeBreakpoint } from '../utils/breakpoints.utils';

const properties = defineProperties({
  properties: {
    position: ['relative', 'absolute', 'sticky', 'fixed'],
    height: ['100%'],
    minHeight: ['100%', '100vh'],
    width: ['100%'],
    maxWidth: vars.sizes,
    alignItems: ['center'],
    placeItems: ['center'],
    placeContent: ['center'],
    gridAutoRows: ['min-content'],
    gridArea: ['area'],
    overflow: ['hidden'],
    flex: [1],
    gap: vars.spaces,
    borderRadius: vars.radius,
    fontSize: vars.fonts.sizes,
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
    display: ['flex', 'grid', 'inline-flex', 'none', 'initial'],
    justifyContent: ['space-between', 'flex-start', 'flex-end'],
    padding: vars.spaces,
    paddingInline: vars.spaces,
    paddingBlock: vars.spaces,
  },
});

const colorsProperties = defineProperties({
  conditions: {
    default: {},
    '@hover': { selector: '&:hover' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.colors,
    background: vars.colors,
  },
});

export const utilities = createSprinkles(
  properties,
  responsiveProperties,
  colorsProperties
);
