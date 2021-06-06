import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export const AnimatedArrow = ({ isHovered, ...rest }) => {
  const { radius, transform } = useSpring({
    transform: isHovered ? 'translate(0 0)' : 'translate(-40 0)',
    radius: isHovered ? 2 : 15,
    config: config.gentle,
  });

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <animated.circle
        cx="19.5"
        cy="19.5"
        r={radius}
        fill="var(--color-primary)"
      />
      <animated.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.0646 22.6757C22.5503 24.6592 21.2705 27.034 20.2252 29.7998L26.2512 29.7959C29.4884 25.9329 33.0381 23.0611 36.9001 21.1803L36.9023 17.8152C33.0428 15.8351 29.497 12.9419 26.2647 9.13535L20.317 9.13925C21.3587 11.9037 22.6093 14.2768 24.0688 16.2584L3.62492 16.2718L3.62492 22.6891L24.0646 22.6757Z"
        fill="var(--color-primary)"
        transform={transform}
      />
    </svg>
  );
};
