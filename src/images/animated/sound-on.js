import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export const AnimatedSoundOn = ({ size, isSoundOn }) => {
  const { x, opacity } = useSpring({
    x: isSoundOn ? 1 : 0,
    opacity: isSoundOn ? 0 : 1,
    config: config.wobbly,
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 42"
      fill="var(--color-textTitle)"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* nested in a group as Safari doesnt do svg transforms yet */}
      <animated.g
        transform={x
          .to({
            range: [0, 0.5, 1],
            output: [0, 25, 0],
          })
          .to((deg) => `rotate(${deg} 27 21)`)}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3048 30.7272H3.18183C1.52497 30.7272 0.181824 29.384 0.181824 27.7272V14.8181C0.181824 13.1612 1.52497 11.8181 3.18182 11.8181H13.8288L28.0779 0.171082V41.1678L15.3048 30.7272Z"
        />
        <g fill="none" stroke="var(--color-text)">
          <path
            d="M34 10C41.7977 19.8186 41.7173 25.2458 34 34.7273"
            strokeWidth="5"
          />
          <path
            d="M43 5.99994C52.7471 18.7064 52.6466 25.7297 43 37.9999"
            strokeWidth="5"
          />
        </g>
        <animated.rect
          x="0"
          y="45"
          width={60}
          height="5"
          style={{ opacity }}
          transform="rotate(-45, 0, 40)"
        />
      </animated.g>
    </svg>
  );
};
