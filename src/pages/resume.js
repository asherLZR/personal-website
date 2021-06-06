import React from 'react';
import { css } from '@emotion/core';
import { SectionWithDivider } from '../components/section-divider';
import { Timeline } from '../components/timeline';
import EXPERIENCES from '../content/experiences.json';
import EDUCATION from '../content/education.json';
import EXTERNAL_ROUTES from '../external-routes.json';
import { ExternalLinkButton } from '../components/link-button';
import { SEO } from '../components/seo';

const experiences = EXPERIENCES.map(
  ({ title, company, location, dates, description, link }) => ({
    title,
    subtitle: company,
    location,
    dates: `${dates.from} - ${dates.to}`,
    description,
    link,
  })
);

const education = EDUCATION.map(
  ({ title, school, location, dates, description, link }) => ({
    title,
    subtitle: school,
    location,
    dates: `${dates.from} - ${dates.to}`,
    description,
    link,
  })
);

const resumeContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const margin = css`
  margin-top: 1rem;
`;

const Resume = () => {
  return (
    <div css={resumeContainer}>
      <SectionWithDivider title="Experience">
        <Timeline data={experiences} css={margin} />
      </SectionWithDivider>
      <SectionWithDivider title="Education">
        <Timeline data={education} css={margin} />
      </SectionWithDivider>
      <ExternalLinkButton
        href={EXTERNAL_ROUTES.resume}
        css={css`
          margin-left: auto;
        `}
        label="Full resume"
      />
    </div>
  );
};

export default () => (
  <>
    <SEO title="Resume" description="Experiences and education" />
    <Resume />
  </>
);
