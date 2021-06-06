import React from 'react';
import { graphql } from 'gatsby';
import { SectionWithDivider } from '../components/section-divider';
import { BlogSection } from '../components/about-sections/blog-section';
import { IntroSection } from '../components/about-sections/intro-section';
import { ContactSection } from '../components/about-sections/contact-section';

const renderSection = ({ title, ui: Section }, i) => (
  <SectionWithDivider key={`section-${i}`} title={title}>
    <Section />
  </SectionWithDivider>
);

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

  return <>{sections.map(renderSection)}</>;
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
