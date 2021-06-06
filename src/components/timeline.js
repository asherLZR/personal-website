import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { useVisibility } from '../hooks/use-visibility';

const gridRow = (row) => css`
  grid-row: ${`${row + 1}`};
`;

const nGridRows = (rows) => css`
  grid-row: ${`1/${rows}`};
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  &:hover {
    color: var(--color-primary);
  }
`;

const Section = ({ content, ...rest }) => {
  const { title, subtitle, location, dates, description, link } = content;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SectionContent {...rest}>
      <h3>{title}</h3>
      <SmallFont>
        <ExternalLink href={link} rel="noopenner noreferrer" target="_blank">
          {subtitle}
        </ExternalLink>
        {` • ${location}\n`}
        {dates}
      </SmallFont>
      <p>{description}</p>
    </SectionContent>
  );
};

const renderSection = (content, { opacity }, i) => {
  return (
    <React.Fragment key={`${content.title}-${i}`}>
      <Bullet css={gridRow(i)} />
      <Section content={content} css={gridRow(i)} style={{ opacity }} />
    </React.Fragment>
  );
};

export const Timeline = ({ data, ...rest }) => {
  const [ref, isVisible] = useVisibility();

  const { height } = useSpring({
    height: isVisible ? '100%' : '0%',
    config: config.molasses,
  });

  const trail = useTrail(data.length, {
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TimelineContainer ref={ref} {...rest}>
      <VerticalLine css={nGridRows(data.length)} style={{ height }} />
      {data.map((content, i) => renderSection(content, trail[i], i))}
    </TimelineContainer>
  );
};

const SectionContent = animated(
  styled.div`
    grid-column: 2/-1;
    ${gridRow};

    padding: 0 0.5rem;

    h3 {
      margin: 0 0 0.5rem 0;
    }

    p {
      white-space: pre-wrap;
    }
  `
);

const SmallFont = styled.div`
  font-size: var(--font-size-small);
  white-space: pre;
  line-height: 150%;
`;

const TimelineContainer = styled.article`
  width: 100%;

  display: grid;
  grid-template-columns: 2rem 1fr;
  position: relative;
`;

const Bullet = styled.div`
  width: 15px;
  height: 15px;

  border: 3px solid var(--grey);
  border-radius: 50%;

  background-color: var(--color-background);
  transition: var(--transition-background);
`;

const VerticalLine = animated(styled.div`
  z-index: -1;

  grid-column: 1;
  ${nGridRows};

  position: absolute;
  left: 9px;

  background-color: var(--grey);
  width: 3px;
`);
