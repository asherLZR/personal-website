import { useRef, useEffect } from 'react';

export const usePrevious = (value) => {
  const ref = useRef();

  // this is executed only after the component has rendered
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
