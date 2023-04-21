'use client';
import React from 'react';
import { PageInfo } from '@/src/typings/typings';
import Image from 'next/image';
import { urlFor } from '@/src/sanity/sanity.utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { quote, singleWord } from './About.utils';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <section id='about'>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='h-screen max-w-7xl mx-auto flex flex-col px-8 items-center justify-center  md:space-y-0 md:justify-between md:px-20 md:flex-row'
      >
        <div className='w-full flex items-center justify-center pt-8 md:pt-0 md:w-1/2'>
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            alt={`${pageInfo.name} profile photo`}
            height={1200}
            width={1200}
            className='w-full h-5/6 object-cover md:w-5/6 rounded-2xl'
          />
        </div>

        <div className='w-full md:w-1/2 space-y-4'>
          <h2 className='text-xl md:text-3xl text-gray-500 font-semibold dark:text-neutral-200'>
            Yes, I wear sunglasses in the middle of the night. 😎😂
          </h2>
          <motion.p
            variants={quote}
            initial='initial'
            whileInView='animate'
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

          <div className='flex'>
            <Link
              href='/public/mjcv.pdf'
              target='_blank'
              download={true}
              className='flex items-center bg-[rgb(36,36,36)] text-sm p-1.5 px-3 text-white/80 md:p-2.5 md:px-6 rounded-lg md:text-lg font-semibold hover:bg-white/80 hover:text-[rgb(36,36,36)] border-2 border-solid border-transparent hover:border-[rgb(36,36,36)] dark:border-2 dark:border-solid dark:border-white/80 transition space-x-2'
            >
              <span>CV</span> <FiDownload size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
