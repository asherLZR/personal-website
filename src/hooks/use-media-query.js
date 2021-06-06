import { useEffect, useState } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
export const useMediaQuery = (query) => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia === 'undefined'
  ) {
    return false;
  }

  const [match, setMatch] = useState(!!window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const changeHandler = () => setMatch(!!mediaQueryList.matches);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', changeHandler);
    } else {
      // for Safari
      mediaQueryList.addListener(changeHandler);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', changeHandler);
      } else {
        // for Safari
        mediaQueryList.removeListener(changeHandler);
      }
    };
  }, [query]);

  return match;
};
