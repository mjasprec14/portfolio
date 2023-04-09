import React from 'react';
import Burger from '@/assets/projects/lidye-1Shk_PkNkNw-unsplash.jpg';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='sectionContainer text-let z-20 max-w-full overflow-hidden'
    >
      <h3 className='sectionHeader'>Projects</h3>

      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='flex h-[96vh] w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={Burger.src}
              alt='Project image'
              className='md:h-64 md:w-auto  xl:h-96'
            />

            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {idx + 1} of {projects.length}
                </span>
                : BoorgerKing
              </h4>

              <p className='text-center text-lg md:text-left'>
                Lorem fugiat duis veniam ea cillum magna. Elit laboris
                exercitation cupidatat laborum id. Voluptate laborum laborum
                sunt ex duis excepteur consequat dolore. Occaecat pariatur in
                amet elit deserunt cillum officia voluptate.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10'></div>
    </motion.div>
  );
};

export default Projects;
