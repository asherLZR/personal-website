import React from 'react';
import styled from '@emotion/styled';

export const SectionWithDivider = React.forwardRef(
  ({ children, title, ...rest }, ref) => {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Section ref={ref} {...rest}>
        <SectionDivider title={title} />
        {children}
      </Section>
    );
  }
);

const SectionDivider = ({ title }) => (
  <Divider>
    <IconContainer>
      <Hash>#</Hash>
    </IconContainer>
    <SectionTitle>{title}</SectionTitle>
    <HorizontalLine />
  </Divider>
);

const Hash = styled.h2`
  color: var(--color-primary);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  text-transform: lowercase;
  font-size: 120%;
  white-space: nowrap;

  padding: 0.5rem 2rem 0.5rem 0.5rem;
`;

const IconContainer = styled.div`
  width: 2rem;
  color: var(--color-primary);
`;

const HorizontalLine = styled.div`
  height: 2px;
  width: 100%;

  background-color: lightgrey;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h2 {
    margin: 0;
  }
`;
