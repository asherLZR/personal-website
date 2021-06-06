import { useEffect, useRef, useState } from 'react';

// credits: https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

/**
 * If threshold is an array, ensure that the same reference is passed every time
 */
export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [browserWindow, setWindow] = useState(null);
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  // access browser api only when mounted
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (window) {
      // eslint-disable-next-line no-undef
      setWindow(window);
    }
  }, []);

  useEffect(() => {
    let currentObserver;

    if (observer.current) {
      observer.current.disconnect();
    }

    if (browserWindow && browserWindow.IntersectionObserver) {
      observer.current = new browserWindow.IntersectionObserver(
        ([currentEntry]) => {
          if (currentEntry.isIntersecting) {
            updateEntry(currentEntry);
          }
        },
        {
          root,
          rootMargin,
          threshold,
        }
      );

      currentObserver = observer.current;

      if (node) currentObserver.observe(node);
    }
    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [node, root, rootMargin, threshold, browserWindow]);

  return [setNode, entry];
};
