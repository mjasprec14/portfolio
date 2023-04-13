import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from '@/components';

import Link from 'next/link';
import Image from 'next/image';
import ArrowUp from '@/assets/icons8-up-arrow.gif';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { PageInfo, Experience, Skill, Project, Social } from '@/typings';
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '@/utils';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  error?: any;
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (event: any) => {
    setScroll(event.currentTarget.scrollTop);
  };

  return (
    <main
      onScroll={handleScroll}
      className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
    >
      <Head>
        <title>MJ Asprec Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section
        id='hero'
        className='snap-start'
      >
        <Hero pageInfo={pageInfo} />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About pageInfo={pageInfo} />
      </section>

      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience experiences={experiences} />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills skills={skills} />
      </section>

      <section
        id='projects'
        className='snap-center'
      >
        <Projects />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className='sticky bottom-5 w-full'>
        {scroll > 90 ? (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1.5 }}
            transition={{ duration: 1.5 }}
            className='flex items-center justify-end px-4'
          >
            <Link
              href='/#hero'
              className='z-40 cursor-pointer'
            >
              <Image
                src={ArrowUp}
                alt='Arrow Up'
                className='h-8 w-8 animate-pulse rounded-full object-cover grayscale filter hover:grayscale-0'
              />
            </Link>
          </motion.div>
        ) : null}
      </footer>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      error: null,
    },
    revalidate: 60,
  };
};
