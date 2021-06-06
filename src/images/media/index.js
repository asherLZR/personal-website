import React from 'react';
import { css } from '@emotion/core';

const fill = css`
  path {
    fill: var(--color-text);
    transition: fill 200ms linear;
  }

  &:hover path {
    fill: var(--color-primary);
  }
`;

export const LinkedIn = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      css={fill}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM14.2411 17.6473C16.1376 17.6473 17.3187 16.3918 17.3187 14.8227C17.2834 13.2204 16.1376 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3804 17.6473 14.2064 17.6473H14.2411ZM16.9605 36.2196V19.8778H11.5216V36.2196H16.9605ZM36.5752 26.8497L36.5751 36.2196H31.1364V27.4767C31.1364 25.2807 30.3494 23.7822 28.3805 23.7822C26.8778 23.7822 25.9828 24.7924 25.5897 25.7681C25.4459 26.1178 25.4106 26.605 25.4106 27.0934V36.22H19.9711C19.9711 36.22 20.0427 21.4117 19.9711 19.8783H25.4106V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941C33.8922 19.4941 36.5752 21.8303 36.5752 26.8497Z"
      />
    </svg>
  );
};

export const Github = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      css={fill}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path d="M24.0002 0C10.747 0 0 11.0169 0 24.6076C0 35.4799 6.87679 44.7039 16.4128 47.9577C17.6123 48.1855 18.0526 47.4239 18.0526 46.7739C18.0526 46.1872 18.0304 44.2487 18.02 42.1925C11.3431 43.6811 9.93424 39.2891 9.93424 39.2891C8.84249 36.4448 7.26945 35.6885 7.26945 35.6885C5.09191 34.1613 7.43359 34.1926 7.43359 34.1926C9.84363 34.3662 11.1126 36.7285 11.1126 36.7285C13.2532 40.4904 16.7272 39.4028 18.0967 38.7741C18.3121 37.1836 18.9341 36.0981 19.6205 35.4836C14.2897 34.8613 8.6859 32.7513 8.6859 23.3224C8.6859 20.6358 9.62345 18.4406 11.1587 16.7174C10.9095 16.0976 10.088 13.5947 11.3912 10.2052C11.3912 10.2052 13.4066 9.54386 17.993 12.7276C19.9074 12.1824 21.9606 11.9089 24.0002 11.8996C26.0398 11.9089 28.0946 12.1824 30.0126 12.7276C34.5934 9.54386 36.606 10.2052 36.606 10.2052C37.9124 13.5947 37.0905 16.0976 36.8413 16.7174C38.3801 18.4406 39.3113 20.6358 39.3113 23.3224C39.3113 32.7737 33.6968 34.8548 28.3525 35.464C29.2133 36.2276 29.9804 37.7252 29.9804 40.021C29.9804 43.3135 29.9526 45.9634 29.9526 46.7739C29.9526 47.4288 30.3846 48.1961 31.6011 47.9544C41.132 44.697 48 35.4762 48 24.6076C48 11.0169 37.2546 0 24.0002 0Z" />
    </svg>
  );
};

export const StackOverflow = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      css={fill}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM32.1773 35.4731V27.9864H34.7011V37.9689H12V27.9864H14.5238V35.4731H32.1773ZM29.6513 29.8641L17.3014 27.2978L17.8205 24.8557L30.1704 27.4219L29.6513 29.8641ZM30.3752 26.7188L18.9353 21.4513L20.0009 19.1892L31.4408 24.4568L30.3752 26.7188ZM31.7984 23.8871L22.1012 15.9023L23.7164 13.9848L33.4136 21.9695L31.7984 23.8871ZM26.336 11.4892L28.3611 10L35.8925 20.0114L33.8674 21.5006L26.336 11.4892ZM29.6703 32.9773H17.0506V30.4818H29.6703V32.9773Z"
        fill="white"
      />
    </svg>
  );
};
