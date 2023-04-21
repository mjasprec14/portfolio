'use client';
import { useState, useEffect } from 'react';
import { Layout } from '@components';
import { Experience, PageInfo, Social } from '@/src/typings/typings';
import { getExperience, getPageInfo, getSocials } from '@utils';
import { WorkExperience } from '@components';

type Props = {
  socials: Social[];
  experiences: Experience[];
  pageInfo: PageInfo;
};

const page = async () => {
  const socials: Social[] = await getSocials();
  const experiences: Experience[] = await getExperience();
  const pageInfo: PageInfo = await getPageInfo();

  return {
    socials,
    experiences,
    pageInfo,
  };
};

const PageWrapper = () => {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    page().then(setData);
  }, []);

  if (!data) {
    return null;
  }

  const { socials, experiences, pageInfo } = data;

  return (
    <Layout
      socials={socials}
      pageInfo={pageInfo}
    >
      <WorkExperience experiences={experiences} />
    </Layout>
  );
};

export default PageWrapper;
