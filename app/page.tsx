import {
  getSocials,
  getPageInfo,
  getExperience,
  getProjects,
  getSkills,
} from '@utils';
import {
  Social,
  PageInfo,
  Experience,
  Project,
  Skill,
} from '@/src/typings/typings';
import {
  Header,
  Navbar,
  Hero,
  About,
  WorkExperience,
  Footer,
  Projects,
  Skills as SkillsComponent,
} from '@/src/components';

export default async function Home() {
  const socials: Social[] = await getSocials();
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperience();
  const projects: Project[] = await getProjects();
  const skills: Skill[] = await getSkills();

  return (
    <main className='z-0 h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80 dark:bg-[rgb(36,36,36)] dark:text-white'>
      <Header socials={socials} />
      <Navbar />
      <Hero pageInfo={pageInfo} />
      <About pageInfo={pageInfo} />
      <WorkExperience experiences={experiences} />
      <Projects
        projects={projects}
        skills={skills}
      />
      <SkillsComponent skills={skills} />
      <Footer
        socials={socials}
        pageInfo={pageInfo}
      />
    </main>
  );
}
