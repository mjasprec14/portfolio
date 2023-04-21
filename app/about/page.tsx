'use client';
import { useState, useEffect } from 'react';
import { Layout } from '@components';
import { About as AboutComponent } from '@/src/components';
import { getSocials, getPageInfo } from '@utils';
import { Social, PageInfo } from '@/src/typings/typings';

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const page = async () => {
  const socials: Social[] = await getSocials();
  const pageInfo: PageInfo = await getPageInfo();

  return {
    socials,
    pageInfo,
  };
};

const About = (props: Props) => {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    page().then(setData);
  }, []);

  if (!data) {
    return null;
  }

  const { socials, pageInfo } = data;

  return (
    <Layout
      socials={socials}
      pageInfo={pageInfo}
    >
      <AboutComponent pageInfo={pageInfo} />
    </Layout>
  );
};

export default About;
