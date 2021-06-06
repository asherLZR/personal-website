import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { animated, useTrail, config } from 'react-spring';
import { BlogDetails } from '../components/blog-details';
import { HorizontalRule } from '../components/horizontal-rule';
import { LAYOUT_BP } from '../styles/breakpoints';
import { useVisibility } from '../hooks/use-visibility';
import { SEO } from '../components/seo';

const renderBlogItem = (post, i) => <BlogItem key={i} post={post} />;

export default function Blog({ data }) {
  return (
    <>
      <SEO title="Blog" description="Bits and scraps of ideas" />
      <HorizontalRule />
      {data.allMarkdownRemark.edges.map(renderBlogItem)}
    </>
  );
}

const BlogItem = ({ post }) => {
  const [ref, isVisible] = useVisibility();
  const { title, date, summary, slug } = post.node.frontmatter;

  const trail = useTrail(3, {
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
  });

  return (
    <Article ref={ref}>
      <Link to={slug}>
        <Header style={trail[0]}>
          <h1>{title}</h1>
        </Header>
        <AnimatedBlogDetails
          date={date}
          timeToRead={post.node.timeToRead}
          style={trail[1]}
        />
        <Summary style={trail[2]}>{summary}</Summary>
      </Link>
    </Article>
  );
};

const AnimatedBlogDetails = animated(BlogDetails);

const Header = animated(styled.header`
  margin-bottom: 0.25rem;
  transition: color 200ms linear;

  h1 {
    font-weight: 900;

    margin: 0.5rem 0;
  }
`);

const Article = styled.article`
  margin-bottom: 2rem;
  ${LAYOUT_BP} {
    display: flex;
  }
`;

const Summary = animated(styled.p`
  margin-top: 0.7rem;
`);

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
