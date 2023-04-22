'use client';
import { useState, useEffect } from 'react';
import { Layout } from '@components';
import { Skill, PageInfo, Social } from '@/src/typings/typings';
import { getSkills, getPageInfo, getSocials } from '@utils';
import { Skills as SkillsComponent } from '@components';

type Props = {
  skills: Skill[];
  pageInfo: PageInfo;
  socials: Social[];
};

const page = async () => {
  const skills: Skill[] = await getSkills();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();

  return {
    skills,
    pageInfo,
    socials,
  };
};

export default function Skills() {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    page().then(setData);
  }, []);

  if (!data) {
    return null;
  }

  const { skills, pageInfo, socials } = data;
  return (
    <Layout
      pageInfo={pageInfo}
      socials={socials}
    >
      <SkillsComponent skills={skills} />
    </Layout>
  );
}
