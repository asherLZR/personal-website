import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { BlogDetails } from '../blog-details';
import ROUTES from '../../routes.json';
import { BREAKPOINT_MIN_WIDTH } from '../../styles/breakpoints';
import { LinkButton } from '../link-button';

const renderBlogItem = (post, i) => {
  const { title, date, summary, slug } = post.node.frontmatter;

  return (
    <Article key={`blog-${i}`}>
      <Link to={slug}>
        <div>
          <header>
            <h3>{title}</h3>
          </header>
          <BlogDetails date={date} timeToRead={post.node.timeToRead} />
          <p>{summary}</p>
        </div>
      </Link>
    </Article>
  );
};

export const BlogSection = ({ posts }) => {
  return (
    <SectionContainer>
      <PostsContainer>{posts.map(renderBlogItem)}</PostsContainer>
      <LinkButton
        css={css`
          margin-left: auto;
        `}
        to={ROUTES.blog.path}
        label="See all"
      />
    </SectionContainer>
  );
};

const Article = styled.article`
  width: 100%;
  margin: 0.5rem 0;

  ${BREAKPOINT_MIN_WIDTH[2]} {
    width: 47%;
  }

  h3 {
    margin: 0.5rem 0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 1rem;
`;
