/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SoundToggle } from '../../../components/sound-toggle';
import { LinksList } from './links-list';
import { ThemeToggle } from '../../../components/theme-toggle';

export const HorizontalNav = (props) => (
  <>
    <ButtonsContainer {...props}>
      <ThemeToggle />
      <SoundToggle />
    </ButtonsContainer>
    <Nav {...props}>
      <StyledLinksList />
    </Nav>
  </>
);

const buttonsContainer = css`
  grid-column: 3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  ${buttonsContainer}

  &>:last-of-type {
    margin-left: 1rem;
  }
`;

const StyledLinksList = styled(LinksList)`
  display: flex;
  justify-content: space-around;
  width: min(27rem, 100%);
`;

const Nav = styled.nav`
  grid-column: 1 / -1;
  grid-row: 2;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;
