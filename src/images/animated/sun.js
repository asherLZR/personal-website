import React from 'react';
import { useTrail, useSpring, animated, config } from 'react-spring';

const SPOKE_POSITIONS = [
  { cx: 24.9999, cy: 3.00012 },
  { cx: 24.9999, cy: 47.0001 },
  { cx: 46.9999, cy: 25.0001 },
  { cx: 2.99988, cy: 24.0001 },
  { cx: 9.43453, cy: 9.45222 },
  { cx: 40.5655, cy: 40.5467 },
  { cx: 40.5472, cy: 9.434 },
  { cx: 8.74525, cy: 39.8583 },
];

export const AnimatedSun = ({ isVisible, size, ...rest }) => {
  const trail = useTrail(SPOKE_POSITIONS.length, {
    opacity: isVisible ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: isVisible ? 'translate(0 0)' : 'translate(0 50)',
    config: config.wobbly,
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 54 54"
      fill="var(--color-textTitle)"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <animated.circle cx="24.9999" cy="25.0001" r="15" transform={transform} />
      {trail.map((props, i) => {
        const { cx, cy } = SPOKE_POSITIONS[i];
        return (
          <animated.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={3}
            opacity={props.opacity}
          />
        );
      })}
    </svg>
  );
};
