import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export const AnimatedMoon = ({ isVisible, size, ...rest }) => {
  const { translate, scale } = useSpring({
    translate: isVisible ? 'translate(0 0)' : 'translate(0 -50)',
    scale: isVisible ? 'scale(1)' : 'scale(2)',
    config: config.wobbly,
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="var(--color-textTitle)"
      opacity={isVisible ? 1 : 0}
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {/* nested in a group as Safari doesnt do svg transforms yet */}
      <animated.g transform={translate}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43 32.2879C40.5125 33.4892 37.7223 34.1625 34.7748 34.1625C24.316 34.1625 15.8375 25.684 15.8375 15.2252C15.8375 12.2777 16.5108 9.48749 17.7122 7C11.3731 10.0614 7 16.5513 7 24.0627C7 34.5215 15.4785 43 25.9374 43C33.4487 43 39.9386 38.6269 43 32.2879Z"
        />
        <animated.path
          transform={scale}
          d="M39.0025 22.2531L37.3913 24.9132L39.4233 27.2675L36.3955 26.5572L34.7844 29.2172L34.5243 26.1182L31.4966 25.4079L34.3636 24.2029L34.1035 21.1038L36.1355 23.4581L39.0025 22.2531Z"
        />
        <animated.path
          transform={scale}
          d="M29.114 10.7773L28.4955 14.8584L32.1857 16.7077L28.1133 17.3806L27.4948 21.4616L25.5964 17.7965L21.524 18.4694L24.4231 15.5313L22.5247 11.8661L26.2148 13.7154L29.114 10.7773Z"
        />
      </animated.g>
    </svg>
  );
};
