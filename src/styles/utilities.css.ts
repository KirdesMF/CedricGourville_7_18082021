import { vars } from './vars.css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { makeBreakpoint } from '../utils/breakpoints.utils';

const properties = defineProperties({
  conditions: {
    sm: {},
    md: { '@media': makeBreakpoint('md') },
    lg: { '@media': makeBreakpoint('lg') },
  },
  defaultCondition: 'sm',
  properties: {
    all: ['revert', 'unset'],
    display: ['flex', 'grid', 'inline-flex', 'none', 'initial'],
    position: ['relative', 'absolute', 'sticky', 'fixed'],
    justifyContent: ['space-between', 'flex-start', 'flex-end'],
    alignItems: ['center'],
    placeItems: ['center'],
    gap: vars.spaces,
    padding: vars.spaces,
    paddingInline: vars.spaces,
    paddingBlock: vars.spaces,
    borderRadius: vars.radius,
    fontFamily: vars.font,
    zIndex: vars.zIndexes,
  },
});

const colorsProperties = defineProperties({
  conditions: {
    default: {},
    '@hover': { selector: '&:hover' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color,
    background: vars.color,
  },
});

export const utilities = createSprinkles(properties, colorsProperties);
