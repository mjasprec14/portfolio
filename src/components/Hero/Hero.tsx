import React from 'react';
import Image from 'next/image';
import { PageInfo } from '@/src/typings/typings';
import { urlFor } from '@/src/sanity/sanity.utils';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <section id='home'>
      <div className='h-screen flex flex-col -mt-16 items-center justify-center gap-10 md:flex-row md:-mt-32 md:px-12'>
        <div className='flex items-center justify-center'>
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            alt={`${pageInfo?.name} hero image`}
            height={100}
            width={100}
            className='h-32 w-32 rounded-full object-cover'
          />
        </div>

        <div className='flex flex-col justify-center items-center text-center md:space-y-5'>
          <h1 className='text-3xl md:text-7xl font-extrabold'>
            Hello I&apos;m{' '}
            <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent '>
              {pageInfo?.name}
            </span>
          </h1>
          <h3 className='text-xs tracking-[10px] md:text-sm md:tracking-[20px] uppercase text-gray-500 '>
            {pageInfo?.role}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
