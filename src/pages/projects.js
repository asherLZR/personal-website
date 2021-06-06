import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useTrail, animated, config } from 'react-spring';
import { HorizontalRule } from '../components/horizontal-rule';
import { useVisibility } from '../hooks/use-visibility';
import { AnimatedNewTab } from '../images/animated';
import { useInterruptableSound } from '../hooks/use-interruptable-sound';
import { useHover } from '../hooks/use-hover';
import FingerSnap from '../sounds/finger-snap.wav';
import { SEO } from '../components/seo';

const renderProjectArticle = ({ node }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ProjectArticle key={node.title} {...node} />
);

export default function Projects({ data }) {
  return (
    <>
      <SEO title="Projects" description="Small things I've worked on"/>
      <HorizontalRule />
      {data.allProjectsJson.edges.map(renderProjectArticle)}
    </>
  );
}

const ProjectArticle = ({ title, subtitle, description, imgSrc, link }) => {
  const [ref, isVisible] = useVisibility();

  const trail = useTrail(3, {
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
  });

  return (
    <Article ref={ref}>
      <Header style={trail[0]}>
        <ProjectImg fluid={imgSrc.childImageSharp.fluid} />
        <h2>{title}</h2>
        {link && <ProjectLink href={link} />}
      </Header>
      <Descriptor style={trail[1]}>{subtitle}</Descriptor>
      <animated.p style={trail[2]}>{description}</animated.p>
    </Article>
  );
};

const ExternalLink = ({ href, ...rest }) => {
  const [ref, isHovered] = useHover();
  useInterruptableSound(FingerSnap, isHovered);

  return (
    <a
      href={href}
      rel="noopenner noreferrer"
      target="_blank"
      ref={ref}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <AnimatedNewTab isHovered={isHovered} />
    </a>
  );
};

const ProjectLink = styled(ExternalLink)`
  margin-left: auto;
`;

const ProjectImg = styled(Img)`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 1rem;
`;

const Descriptor = animated(styled.div`
  font-size: var(--font-size-small);

  margin-top: 0.5rem;
`);

const Article = animated(styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`);

const Header = animated(styled.header`
  display: flex;
  align-items: center;

  margin: 0.5rem 0;

  h2 {
    margin: 0;
    max-width: 70%;
  }
`);

export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          description
          link
          subtitle
          title
          imgSrc {
            childImageSharp {
              fluid(maxHeight: 100, maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
