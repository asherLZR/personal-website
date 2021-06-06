export const BREAKPOINT = {
  xxs: 0,
  xs: 420,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const BREAKPOINT_MIN_WIDTH = Object.values(BREAKPOINT).map(
  (bp) => `@media only screen and (min-width: ${bp}px)`
);

export const BREAKPOINT_MAX_WIDTH = Object.values(BREAKPOINT).map(
  (bp) => `@media only screen and (max-width: ${bp}px)`
);

export const LAYOUT_BP = BREAKPOINT_MIN_WIDTH[3];
