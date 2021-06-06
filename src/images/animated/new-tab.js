import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export const AnimatedNewTab = ({ isHovered, ...rest }) => {
  const { transform } = useSpring({
    // transform-origin does not seem to work on Safari either
    transform: isHovered ? 'rotate(45 40 40)' : 'rotate(0 40 40)',
    config: config.gentle,
  });

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {/* nested in a group as Safari doesnt do svg transforms yet */}
      <animated.g transform={transform}>
        <rect width="80" height="80" fill="none" />
        <path
          d="M46 17H21H14V24V58V65H21H55H62V58V38H55V58H21V24H46V17Z"
          fill="var(--color-primary)"
        />
        <path
          d="M61.9813 23.5146C62.3131 25.9879 63.0873 28.5721 64.3039 31.2669L68.5621 27.0031C68.1197 21.9825 68.599 17.4419 70 13.3811L67.622 11C63.4928 12.329 58.9397 12.7904 53.9625 12.3844L49.7596 16.5928C52.451 17.811 55.0133 18.6047 57.4465 18.9739L43 33.4394L47.5377 37.9771L61.9813 23.5146Z"
          fill="var(--color-text)"
        />
      </animated.g>
    </svg>
  );
};
