'use client';
import { useState, useEffect } from 'react';
import { Layout } from '@components';
import { Project, PageInfo, Social, Skill } from '@/src/typings/typings';
import { getPageInfo, getProjects, getSkills, getSocials } from '@utils';
import { Projects as ProjectsComponent } from '@components';

type Props = {
  projects: Project[];
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
};

const page = async () => {
  const projects: Project[] = await getProjects();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();
  const skills: Skill[] = await getSkills();

  return {
    projects,
    pageInfo,
    socials,
    skills,
  };
};

export default function Projects() {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    page().then(setData);
  }, []);

  if (!data) {
    return null;
  }

  const { projects, pageInfo, socials, skills } = data;
  return (
    <Layout
      socials={socials}
      pageInfo={pageInfo}
    >
      <ProjectsComponent
        projects={projects}
        skills={skills}
      />
    </Layout>
  );
}
