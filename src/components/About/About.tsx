'use client';
import React, { useState } from 'react';
import { PageInfo } from '@/src/typings/typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 10,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const About = ({ pageInfo }: Props) => {
  return (
    <section id='About'>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='h-screen max-w-7xl mx-auto flex flex-col px-8 items-center space-y-6 md:space-y-0 md:justify-between md:px-20 md:flex-row'
      >
        <div className='w-full md:w-1/2'>
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            alt={`${pageInfo.name} profile photo`}
            height={1200}
            width={1200}
            className='md:w-5/6 rounded-2xl'
          />
        </div>

        <div className='w-full md:w-1/2 space-y-4'>
          <h2 className='text-xl md:text-3xl text-gray-500 font-semibold'>
            Yes, I wear sunglasses in the middle of the night.{' '}
          </h2>
          <motion.p
            variants={quote}
            initial='initial'
            animate='animate'
            className='text-sm md:text-xl md:font-thin'
          >
            {pageInfo?.backgroundInformation.split(' ').map((word, idx) => (
              <motion.span
                variants={singleWord}
                key={idx}
                className='inline-block'
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;