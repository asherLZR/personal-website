import { useIntersect } from './use-intersect';

/**
 * Checks if an element has been visible to the user at least once
 * @param {object} options https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export const useVisibility = (
  options = {
    rootMargin: '0px',
    threshold: 0.3,
  }
) => {
  const [ref, entry] = useIntersect(options);
  return [ref, !!entry?.target];
};
