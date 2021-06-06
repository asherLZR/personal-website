import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { BlogDetails } from '../components/blog-details';
import { HorizontalRule } from '../components/horizontal-rule';
import { SEO } from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        article
      />
      <HorizontalRule />
      <Article>
        <Frontmatter>
          <h1>{frontmatter.title}</h1>
          <BlogDetails date={frontmatter.date} timeToRead={timeToRead} />
        </Frontmatter>
        <BlogContent
          className="blog-post-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Article>
    </>
  );
}

const Article = styled.article`
  h1 {
    font-size: 200%;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-top: 4rem;
    color: var(--color-primary);
  }

  ul,
  ol {
    font-family: var(--font-family-serif);
  }

  table {
    width: min(30rem, 100%);
  }
  table,
  th,
  td {
    border: 1px solid var(--grey);
    border-collapse: collapse;
  }
  td {
    padding: 0.25rem;
  }

  /* Credits: https://twitter.com/mishaheesakkers */
  a {
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 0 1px;
    transition: color ease 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--color-primary);
      z-index: -1;
      height: 2px;
    }

    &::before {
      width: 0%;
      left: 0;
      bottom: 0;
      transition: width ease 0.4s;
    }

    &::after {
      width: 100%;
      left: 0;
      bottom: 0;
      transition: all ease 0.6s;
    }

    &:hover {
      &::before {
        width: 100%;
      }

      &::after {
        left: 100%;
        width: 0%;
        transition: all ease 0.2s;
      }
    }
  }
`;

const Frontmatter = styled.header`
  margin-bottom: 2rem;
`;

const BlogContent = styled.div`
  max-width: 90vw; // FIXME: this should not be necessary to stop pre tags from overflowing

  p {
    font-family: var(--font-family-serif);
    line-height: 180%;

    margin: 1.5rem 0;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        summary
      }
    }
  }
`;
