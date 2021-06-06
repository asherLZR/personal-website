import { useMediaQuery } from './use-media-query';

export const useReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};
