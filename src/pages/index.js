import React from 'react';
import { graphql } from 'gatsby';
import { animated, useTrail, config } from 'react-spring';
import { SectionWithDivider } from '../components/section-divider';
import { BlogSection } from '../components/about-sections/blog-section';
import { IntroSection } from '../components/about-sections/intro-section';
import { ContactSection } from '../components/about-sections/contact-section';
import { useVisibility } from '../hooks/use-visibility';

const renderSections = (trail) => ({ title, ui: Section }, index) => {
  return (
    <SectionWithDivider key={`section-${index}`} title={title}>
      <animated.div style={trail[index]}>
        <Section />
      </animated.div>
    </SectionWithDivider>
  );
};

export default ({ data }) => {
  const sections = [
    {
      title: 'Hello!',
      ui: IntroSection,
    },
    {
      title: 'Latest blog posts',
      ui: () => <BlogSection posts={data.allMarkdownRemark.edges} />,
    },
    {
      title: 'Get in touch',
      ui: ContactSection,
    },
  ];

  const [ref, isVisible] = useVisibility();

  const trail = useTrail(sections.length, {
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
  });

  return <div ref={ref}>{sections.map(renderSections(trail))}</div>;
};

export const query = graphql`
  query BlogSummaryQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 2
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM YY")
            summary
          }
        }
      }
    }
  }
`;
