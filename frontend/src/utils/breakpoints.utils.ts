export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
} as const;

export function makeBreakpoint(size: keyof typeof breakpoints) {
  return `screen and (min-width: ${breakpoints[size]})`;
}
