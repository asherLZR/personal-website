import { useRef } from 'react';

export const useRenderCount = () => {
  const renders = useRef(0);
  renders.current += 1;
  // eslint-disable-next-line no-console
  console.log('re-rendered times: ', renders.current);
};
