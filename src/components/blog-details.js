import React from 'react';
import styled from '@emotion/styled';

export const BlogDetails = ({ date, timeToRead, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <DetailsContainer {...rest}>
    {`${date} · ${timeToRead} min read`}
  </DetailsContainer>
);

const DetailsContainer = styled.div`
  font-size: var(--font-size-small);
`;
