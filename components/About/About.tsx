import React from 'react';
import { motion } from 'framer-motion';
import AboutPhoto from '@/assets/about.jpg';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='sectionContainer text-center md:text-left max-w-7xl'
    >
      <h3 className='sectionHeader'>About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={AboutPhoto.src}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:h-[600px] xl:w-[500px]'
      />

      <div className='space-y-10 px-10 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Yes, I wear{' '}
          <span className='underline decoration-[#F7AB0A]/50'>sunglasses</span>{' '}
          in the middle of the night.😎
        </h4>
        <p className='text-base'>
          I&apos;m a Software Engineer with 2 years of experience in Front-end
          development using HTML, CSS, SCSS, Bootstrap, Javascript, React,
          Typescript, and Material-UI, writing tests Unit tests, and Automated
          tests using Cypress. I helped in creating new App features, fixed
          existing UI issues and other front-end related things.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
