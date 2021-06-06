/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSpring, config } from 'react-spring';
import {
  AnimatedNewTab,
  AnimatedArrow,
  AnimatedClipboard,
  AnimatedTick,
} from '../images/animated/index';
import { useHover } from '../hooks/use-hover';
import { useInterruptableSound } from '../hooks/use-interruptable-sound';
import Water from '../sounds/water.wav';
import FingerSnap from '../sounds/finger-snap.wav';
import Bell from '../sounds/bell.mp3';

export const LinkButton = ({ to, label, ...rest }) => {
  const [ref, isHovered] = useHover();
  useInterruptableSound(Water, isHovered);

  return (
    <OutlinedContainer as={Link} to={to} ref={ref} {...rest}>
      <AnimatedArrow isHovered={isHovered} />
      <Label>{label}</Label>
    </OutlinedContainer>
  );
};

export const ExternalLinkButton = ({ href, label, ...rest }) => {
  const [ref, isHovered] = useHover();
  useInterruptableSound(FingerSnap, isHovered);

  return (
    <OutlinedContainer
      as="a"
      href={href}
      rel="noopenner noreferrer"
      target="_blank"
      ref={ref}
      {...rest}
    >
      <AnimatedNewTab isHovered={isHovered} />
      <Label>{label}</Label>
    </OutlinedContainer>
  );
};

export const ClipboardButton = ({ label }) => {
  const [clicked, setClicked] = useState(false);

  useInterruptableSound(Bell, clicked);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let isMounted = true;

    if (clicked) {
      setTimeout(() => {
        if (isMounted) {
          setClicked(false);
        }
      }, 3000);

      return () => {
        isMounted = false;
      };
    }
  }, [clicked, setClicked]);

  const handleOnCopy = () => {
    if (!clicked) {
      setClicked(true);
    }
  };

  const { tickTransform, clipboardTransform } = useSpring({
    tickTransform: clicked ? 'scale(1)' : 'scale(0)',
    clipboardTransform: clicked ? 'scale(0)' : 'scale(1)',
    config: config.stiff,
  });

  return (
    <CopyToClipboard text={label} onCopy={handleOnCopy}>
      <Container as="button">
        <IconContainer>
          <AnimatedTick style={{ transform: tickTransform }} />
          <AnimatedClipboard
            style={{
              transform: clipboardTransform,
              position: 'absolute',
              left: 0,
            }}
          />
        </IconContainer>
        <Label style={{ fontSize: '1rem' }}>{label}</Label>
      </Container>
    </CopyToClipboard>
  );
};

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;

  position: relative;
`;

const Label = styled.span`
  margin-left: 0.5rem;
`;

const Container = styled.div`
  text-transform: lowercase;
  font-size: var(--font-size-small);
  font-weight: bold;

  color: var(--color-text);

  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;

  transform: scale(1);
  transition: transform 100ms linear;

  &:active {
    transform: scale(0.95);
  }
`;

const OutlinedContainer = styled(Container)`
  padding: 8px;
  border-radius: 3px;
  border: 1px solid var(--grey);
`;
