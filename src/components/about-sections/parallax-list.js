import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import { Pattern } from '../../images';
import { useReducedMotion } from '../../hooks/use-reduced-motion';

// eslint-disable-next-line no-undef
const calc = (x, y) => [x - window.innerWidth / 2, y / 2];
const backgroundTranslate = (x, y) =>
  `translate3d(${x / -5}px,${y / 3}px,${y / 3}px)`;

export const ParallaxList = () => (
  <StaticQuery
    // eslint-disable-next-line no-use-before-define
    query={query}
    render={(data) => <Icons data={data} />}
  />
);

const AnimatedImg = animated(styled(Img)`
  width: 2.3rem;
  height: 2.3rem;
  pointer-events: none;
`);

const renderIcon = (edge) => {
  const { name } = edge.node;
  return (
    <AnimatedImg
      key={name}
      fluid={edge.node.childImageSharp.fluid}
      draggable={false}
    />
  );
};

const Icons = ({ data }) => {
  const { edges } = data.allFile;

  const prefersReducedMotion = useReducedMotion();

  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    if (!prefersReducedMotion) {
      set({ xy: calc(x, y) });
    }
  };

  return (
    <IconsContainer>
      <BackgroundImage
        onMouseMove={handleMouseMove}
        onMouseLeave={() => set({ xy: [0, 0] })}
        src={Pattern}
        alt="pattern"
        style={{ transform: xy.to(backgroundTranslate) }}
        draggable={false}
      />
      {edges.map(renderIcon)}
    </IconsContainer>
  );
};

const BackgroundImage = animated(styled.img`
  position: absolute;
  opacity: 0.15;
`);

const IconsContainer = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  overflow: hidden;

  border-radius: 3px;
`;

const query = graphql`
  query TechnologiesQuery {
    allFile(
      filter: {
        relativeDirectory: { eq: "technologies" }
        extension: { eq: "png" }
      }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 64, maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
