'use client';
import React from 'react';
import Image from 'next/image';
import { PageInfo } from '@/src/typings/typings';
import { urlFor } from '@/src/sanity/sanity.utils';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <section id='home'>
      <div className='h-screen flex flex-col -mt-16 items-center justify-center gap-10 md:flex-row md:-mt-32 md:mb-44 md:px-12'>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: [0, 0, 0.5, 0.8, 1], y: 0 }}
          transition={{ duration: 2 }}
          className='flex items-center justify-center'
        >
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            alt={`${pageInfo?.name} hero image`}
            height={450}
            width={450}
            className='h-32 w-32 rounded-full object-cover'
          />
        </motion.div>

        <div className='flex flex-col justify-center items-center text-center md:space-y-5'>
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: [0, 0, 0, 0.5, 1], x: 0 }}
            transition={{ duration: 3.5 }}
            className='text-3xl md:text-7xl font-extrabold'
          >
            Hello I&apos;m{' '}
            <span className='bg-gradient-to-r from-blue-600  via-red-500 to-[#F7AB0A]/80 bg-clip-text text-transparent '>
              {pageInfo?.name}
            </span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: [0, 0, 0, 0.5, 1], x: 0 }}
            transition={{ duration: 3.5 }}
            className='text-xs tracking-[10px] md:text-sm md:tracking-[20px] uppercase text-gray-500 '
          >
            {pageInfo?.role}
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
