import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Navigation } from './navigation/navigation';
import { BREAKPOINT_MAX_WIDTH } from '../../styles/breakpoints';
import ROUTES from '../../routes.json';
import { Tag } from '../../components/tag';

export const Header = () => (
  <StyledHeader>
    <TitleContainer>
      <Link
        to={ROUTES.about.path}
        style={{
          // so link focus outline overlaps caption
          zIndex: 1,
        }}
      >
        <Title>Asher</Title>
      </Link>
      <HeaderTag>Full-stack Developer</HeaderTag>
    </TitleContainer>
    <Navigation />
  </StyledHeader>
);

const HeaderTag = styled(Tag)`
  background-color: #ffc2f0;
  color: var(--black);
`;

const Title = styled.h1`
  font-size: 350%;

  text-transform: lowercase;
  margin: 0;
  margin-bottom: 0.2rem;
  line-height: 95%;
`;

const TitleContainer = styled.div`
  grid-column: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${BREAKPOINT_MAX_WIDTH[3]} {
    margin-bottom: 1.5rem;
  }
`;

const StyledHeader = styled.header`
  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  padding-top: 2rem;
`;
