import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '@/assets/about.jpg';

type Props = {};

export default function About({}: Props) {
  return (
    <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={AboutImg.src}
      />

      <div className='space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Yes, I wear{' '}
          <span className='underline decoration-[#F7AB0A]'>sunglasses</span> in
          the middle of the night.<span className='pt-2'>😎</span>
        </h4>

        <p className='text-base'>
          I&apos;m a Software Engineer with 2 years of experience in Front-end
          development using HTML, CSS, SCSS, Bootstrap, Javascript, React,
          Typescript, and Material-UI, writing tests Unit tests, and Automated
          tests using Cypress. I helped in creating new App features, fixed
          existing UI issues and other front-end related things.
        </p>
      </div>
    </div>
  );
}
