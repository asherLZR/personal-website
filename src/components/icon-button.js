import React from 'react';
import styled from '@emotion/styled';

export const IconButton = ({ children, size, ...rest }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...rest}>{children}</Button>
  );
};

const Button = styled.button`
  position: relative;

  width: 2.7rem;
  height: 2.7rem;
`;
