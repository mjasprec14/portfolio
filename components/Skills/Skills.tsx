import React from 'react';
import { motion } from 'framer-motion';
import Skill from '../Skill/Skill';

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='sectionContainer text-center mx-auto max-w-[2000px] min-h-screen justify-center md:text-left xl:px-10 xl:space-y-0 '
    >
      <h3 className='sectionHeader'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-3px text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
