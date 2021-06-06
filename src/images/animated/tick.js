import React from 'react';
import { animated } from 'react-spring';

export const AnimatedTick = ({ style }) => {
  return (
    <animated.svg
      width="27"
      height="27"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.9556 25.0711L62.8845 18L33.2022 47.6823L16.5469 33.257L10 40.816L26.113 54.7716L26.0001 54.8844L33.0712 61.9555L33.6914 61.3353L34.1887 61.766L40.1925 54.8342L69.9556 25.0711Z"
        fill="var(--color-primary"
      />
    </animated.svg>
  );
};
