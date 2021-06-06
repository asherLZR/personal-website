import React from 'react';
import styled from '@emotion/styled';
import { Github, LinkedIn, StackOverflow } from '../../images/media';
import { BREAKPOINT_MIN_WIDTH } from '../../styles/breakpoints';
import { ClipboardButton } from '../link-button';

const EMAIL = 'asher.lzrz@gmail.com';

const MEDIA_LINKS = [
  {
    Img: Github,
    link: 'https://github.com/asherLZR',
  },
  {
    Img: LinkedIn,
    link: 'https://www.linkedin.com/in/asherlzr',
  },
  {
    Img: StackOverflow,
    link: 'https://stackoverflow.com/users/9061484/asher-lim',
  },
];

const renderLink = ({ Img, link }) => {
  return (
    <IconLink key={link} href={link} rel="noopenner noreferrer" target="_blank">
      <Img />
    </IconLink>
  );
};

export const ContactSection = () => {
  return (
    <ContactContainer>
      <div>
        <p>Have a project, question, or just want to chat?</p>
        <ClipboardButton label={EMAIL} text={EMAIL} />
      </div>
      <IconContainer>{MEDIA_LINKS.map(renderLink)}</IconContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    flex-direction: row;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin: 2rem 0;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    margin-left: auto;
  }
`;

const IconLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: grid;
  place-items: center;

  border-radius: 50%;

  transform: scale(1);
  transition: transform 100ms linear;

  &:active {
    transform: scale(0.93);
  }

  &:not(:first-of-type) {
    margin-left: 2rem;
  }
`;
