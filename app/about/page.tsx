import React from 'react';
import { About, Header, Navbar } from '@/src/components';
import { getSocials, getPageInfo } from '@utils';
import { Social, PageInfo } from '@/src/typings/typings';

type Props = {};

const AboutPage = async (props: Props) => {
  const socials: Social[] = await getSocials();
  const pageInfo: PageInfo = await getPageInfo();
  return (
    <div className='h-screen relative'>
      <Header socials={socials} />
      <Navbar />
      <About pageInfo={pageInfo} />
    </div>
  );
};

export default AboutPage;
