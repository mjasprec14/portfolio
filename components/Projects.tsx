import React from 'react';
import Burger from '@/assets/projects/lidye-1Shk_PkNkNw-unsplash.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative h-screen flex flex-col text-left overflow-hidden md:flex-row max-w-full justify-evenly items-center mx-auto z-0 pb-6 px-10'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              src={Burger.src}
              alt='Sample project'
              className='rounded-xl h-64 w-fit'
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {idx + 1} of {projects.length}:
                </span>{' '}
                Boorger King
              </h4>

              <p className='text-lg text-center md:text-left'>
                Quis qui excepteur veniam eu. Dolore cillum sit id mollit in
                magna officia adipisicing adipisicing labore laboris
                exercitation irure. Reprehenderit id reprehenderit nostrud duis
                sunt ipsum voluptate ex ut enim exercitation id. Tempor occaecat
                aute sunt sint tempor commodo elit. Velit irure nulla eu esse et
                do commodo commodo.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
