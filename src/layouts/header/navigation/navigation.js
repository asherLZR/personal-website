import React from 'react';
import { css } from '@emotion/core';
import { HorizontalNav } from './horizontal-nav';
import { VerticalNav } from './vertical-nav';
import {
  BREAKPOINT_MAX_WIDTH,
  BREAKPOINT_MIN_WIDTH,
} from '../../../styles/breakpoints';

const horizontal = css`
  ${BREAKPOINT_MAX_WIDTH[3]} {
    display: none;
  }
`;

const vertical = css`
  ${BREAKPOINT_MIN_WIDTH[3]} {
    display: none;
  }
`;

export const Navigation = () => (
  <>
    <HorizontalNav css={horizontal} />
    <VerticalNav css={vertical} />
  </>
);
