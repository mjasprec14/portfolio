import { getSocials, getPageInfo } from '@utils';
import { Social, PageInfo } from '@/src/typings/typings';
import { Header, Navbar, Hero, About } from '@/src/components';

export default async function Home() {
  const socials: Social[] = await getSocials();
  const pageInfo: PageInfo = await getPageInfo();

  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 dark:bg-[rgb(36,36,36)] dark:text-white'>
      <Header socials={socials} />
      <Navbar />
      <Hero pageInfo={pageInfo} />
      <About />
    </main>
  );
}
