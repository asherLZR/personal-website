import React from 'react';
import { animated } from 'react-spring';

export const AnimatedClipboard = ({ style }) => {
  return (
    <animated.svg
      width="30"
      height="30"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <rect
        x="22.5"
        y="18.5"
        width="46"
        height="52"
        rx="7.5"
        stroke="var(--color-text)"
        strokeWidth="6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13H51C52.1258 13 53.1647 13.3721 54.0005 14H60.1679C58.6248 10.4682 55.1006 8 51 8H20C14.4772 8 10 12.4772 10 18V55C10 59.4776 12.9429 63.2679 17 64.5422V59.0004C15.7856 58.0882 15 56.6358 15 55V18C15 15.2386 17.2386 13 20 13Z"
        fill="var(--color-text)"
      />
    </animated.svg>
  );
};
