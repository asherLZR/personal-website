/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import ROUTES from '../../../routes.json';

const renderLinkItems = (props) => ({ name, path, partial = false }) => (
  <LinkItem key={path} {...props}>
    <Link to={path} activeClassName="active-nav-link" partiallyActive={partial}>
      {name}
    </Link>
  </LinkItem>
);

export const LinksList = ({ itemProps, ...rest }) => (
  <StyledLinksList {...rest}>
    {Object.values(ROUTES).map(renderLinkItems(itemProps))}
  </StyledLinksList>
);

const Link = styled(GatsbyLink)`
  position: relative;

  &.active-nav-link::before {
    opacity: 1;
    transform: translateY(0px);
  }

  &:hover::before {
    opacity: 0.6;
    transform: translateY(0px);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -3px;

    width: 100%;
    height: 2px;

    background-color: var(--color-primary);
    opacity: 0;
    transform: translateY(2px);

    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
`;

const LinkItem = styled.li`
  list-style-type: none;
  text-transform: lowercase;

  font-weight: 600;

  a {
    color: var(--color-textTitle);
  }
`;

const StyledLinksList = styled.ul`
  padding: 0;
`;
