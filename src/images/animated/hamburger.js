import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export const AnimatedHamburger = ({ size, isOpen }) => {
  const { topTransform, bottomTransform, middleOpacity } = useSpring({
    topTransform: isOpen ? 'rotate(40, 10, 10)' : 'rotate(0, 15, 0)',
    bottomTransform: isOpen ? 'rotate(-40, 10, 60)' : 'rotate(0, 15, 60)',
    middleOpacity: isOpen ? 0 : 1,
    config: config.stiff,
  });

  return (
    <svg
      viewBox="0 0 110 70"
      width={size}
      height={size}
      fill="var(--color-textTitle)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect
        y="0"
        width="110"
        height="15"
        rx="5"
        transform={topTransform}
      />
      <animated.rect
        y="30"
        width="110"
        height="15"
        rx="5"
        opacity={middleOpacity}
      />
      <animated.rect
        y="60"
        width="110"
        height="15"
        rx="5"
        transform={bottomTransform}
      />
    </svg>
  );
};
