import React from 'react';
import { motion } from 'framer-motion';
import AboutPhoto from '@/assets/about.jpg';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const { profilePic, backgroundInformation } = pageInfo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='sectionContainer max-w-7xl px-10 text-center md:text-left'
    >
      <h3 className='sectionHeader'>About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(profilePic).url()}
        className='-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
      />

      <div className='space-y-10 px-10 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Yes, I wear{' '}
          <span className='underline decoration-[#F7AB0A]/50'>sunglasses</span>{' '}
          in the middle of the night.😎
        </h4>
        <p className='text-base'>{backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
