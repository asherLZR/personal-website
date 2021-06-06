import React from 'react';
import styled from '@emotion/styled';

export const Main = ({ children, ...rest }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MainContainer {...rest}>{children}</MainContainer>;
};

const MainContainer = styled.main`
  grid-area: content;

  padding-bottom: 4rem;
`;
