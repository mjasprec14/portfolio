import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div className='sectionContainer max-w-full space-y-12 overflow-hidden'>
      <h3 className='sectionHeader'>Experience</h3>

      <div className='flex h-5/6 w-full snap-x snap-mandatory flex-row space-x-5 overflow-x-scroll border-red-500 p-10 scrollbar-thin'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
