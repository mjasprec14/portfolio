'use client';
import { PageInfo, Social } from '@/src/typings/typings';
import { Header, Navbar, Footer, TransitionEffect } from '@components';

type Prop = {
  socials: Social[];
  pageInfo: PageInfo;
  children: React.ReactNode;
};

const Layout = ({ children, socials, pageInfo }: Prop) => {
  return (
    <>
      <TransitionEffect />
      <main className='z-0 h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80 dark:bg-[rgb(36,36,36)] dark:text-white'>
        <Header socials={socials} />
        <Navbar />
        {children}
        <Footer
          pageInfo={pageInfo}
          socials={socials}
        />
      </main>
    </>
  );
};

export default Layout;
