/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';
import { IconButton } from '../../../components/icon-button';
import { SoundToggle } from '../../../components/sound-toggle';
import { ThemeToggle } from '../../../components/theme-toggle';
import { AnimatedHamburger } from '../../../images/animated';
import { Portal } from '../../../components/portal';
import { LinksList } from './links-list';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { BREAKPOINT } from '../../../styles/breakpoints';

const PORTAL_Z_INDEX = 1000;

// TODO: maybe there is a better way to lock body scroll
const allowScroll = (scroll) => {
  if (scroll) {
    document.body.classList.remove('noscroll');
  } else {
    document.body.classList.add('noscroll');
  }
};

export const VerticalNav = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isGreaterThanMd = useMediaQuery(`(min-width: ${BREAKPOINT.md}px)`);

  // when the window is resized to > md, close the menu
  useEffect(() => {
    if (isGreaterThanMd) {
      setIsMenuOpen(false);
    }
  }, [isGreaterThanMd]);

  useEffect(() => {
    const toAllowScroll = !isMenuOpen;
    allowScroll(toAllowScroll);

    return () => {
      allowScroll(true);
    };
  }, [isMenuOpen]);

  const onClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clickAwayHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NavContainer {...props}>
      <IconButton
        onClick={onClickHandler}
        css={css`
          z-index: ${PORTAL_Z_INDEX};
        `}
      >
        <AnimatedHamburger size={20} isOpen={isMenuOpen} />
      </IconButton>
      <NavModal isOpen={isMenuOpen} clickAway={clickAwayHandler} />
    </NavContainer>
  );
};

const linksList = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const linkItem = css`
  text-align: center;
  margin: 2rem 0;

  font-size: 200%;
  font-weight: 600;
`;

const Modal = animated(
  styled.div`
    z-index: ${PORTAL_Z_INDEX};
    position: fixed;

    background-color: var(--color-background);
    transition: var(--transition-background);
    opacity: 0.95;

    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // prevent user from scrolling (which can cause resize on mobile when address bar is shown/hidden)
    touch-action: none;

    & > * {
      width: 100%;
    }
  `
);

const NavModal = ({ isOpen, clickAway }) => {
  const props = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });

  return (
    <Portal>
      <Modal
        key="singleton-nav-modal"
        onClick={clickAway}
        style={props}
        aria-hidden
      >
        <nav>
          <LinksList css={linksList} itemProps={{ css: linkItem }} />
        </nav>
        <ToggleContainer>
          <ThemeToggle />
          <SoundToggle />
        </ToggleContainer>
      </Modal>
    </Portal>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & > * {
    margin: 0 1rem;
  }
`;

const NavContainer = styled.div`
  grid-column: 3;

  display: flex;
  justify-content: flex-end;
`;
