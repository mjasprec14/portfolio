import { getSocials, getPageInfo, getExperience } from '@utils';
import { Social, PageInfo, Experience } from '@/src/typings/typings';
import {
  Header,
  Navbar,
  Hero,
  About,
  WorkExperience,
  Footer,
} from '@/src/components';

export default async function Home() {
  const socials: Social[] = await getSocials();
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperience();

  return (
    <main className='z-0 h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80 dark:bg-[rgb(36,36,36)] dark:text-white'>
      <Header socials={socials} />
      <Navbar />
      <Hero pageInfo={pageInfo} />
      <About pageInfo={pageInfo} />
      <WorkExperience experiences={experiences} />
      <Footer
        socials={socials}
        pageInfo={pageInfo}
      />
    </main>
  );
}
