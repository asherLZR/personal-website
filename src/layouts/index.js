/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Globals } from 'react-spring';
import { Header } from './header/header';
import { Footer } from './footer';
import { LAYOUT_BP } from '../styles/breakpoints';
import { ThemeProvider } from '../styles/theme';
import { SoundProvider } from '../sounds/sounds';
import { useReducedMotion } from '../hooks/use-reduced-motion';
import { SEO } from '../components/seo';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    1fr
    auto;

  padding: 0 5%;
  min-height: 100vh;

  ${LAYOUT_BP} {
    grid-template-areas:
      '. header .'
      'asideLeft content asideRight'
      'footer footer footer';
    grid-template-columns: 1fr 65ch 1fr;
    grid-template-rows: auto 1fr auto;

    padding: 0;
    // shift by scrollbar width
    padding-left: calc(100vw - 100%);
  }
`;

const Layout = ({ children, rest }) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return (
    <Container>
      <ThemeProvider>
        <SoundProvider>
          <SEO title="About" />
          <Header />
          <AsideLeft />
          <Main {...rest}>{children}</Main>
          <AsideRight />
          <Footer />
        </SoundProvider>
      </ThemeProvider>
    </Container>
  );
};

export default Layout;

const Main = styled.main`
  grid-area: content;

  padding-bottom: 4rem;
`;

/**
 * Placeholders for future sidebar content
 */
const AsideLeft = ({ children }) => (
  <StyledAsideLeft>{children}</StyledAsideLeft>
);
const StyledAsideLeft = styled.aside`
  grid-area: asideLeft;
`;
const AsideRight = ({ children }) => (
  <StyledAsideRight>{children}</StyledAsideRight>
);
const StyledAsideRight = styled.aside`
  grid-area: asideRight;
`;
