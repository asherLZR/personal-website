import React from 'react';
import styled from '@emotion/styled';

export const Footer = () => (
  <StyledFooter>© 2020-present&nbsp; Asher Lim Zhi Rong</StyledFooter>
);

const StyledFooter = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80%;
  color: var(--color-text);

  height: 4rem;
`;
