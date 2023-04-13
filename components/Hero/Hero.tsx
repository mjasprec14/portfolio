import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = { pageInfo: PageInfo };

const Hero = ({ pageInfo }: Props) => {
  const { heroImage, role } = pageInfo;
  const text = {
    words: [
      '<FrontEnd/>',
      'Love',
      'Music',
      'Challenge',
      'Code',
      'Learn',
      'Humble',
    ],
    loop: true,
    delaySpeed: 2000,
  };

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        priority
        src={urlFor(heroImage).url()}
        height={317}
        width={245}
        alt='Landing page profile photo'
        className='relative h-32 w-32 rounded-full object-cover mx-auto'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 font-semibold tracking-[15px] pb-2'>
          {role}
        </h2>
        <h1 className='text-3xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>
            <Typewriter {...text} />
          </span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 5 }}
          >
            <Link href='/#about'>
              <button className='heroButton'>About</button>
            </Link>
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 3 }}
          >
            <Link href='/#experience'>
              <button className='heroButton'>Experience</button>
            </Link>
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
          >
            <Link href='/#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 3 }}
          >
            <Link href='/#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 5 }}
          >
            <Link href='/#certifications'>
              <button className='heroButton'>Certifications</button>
            </Link>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
