import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div className='sectionContainer overflow-hidden max-w-full'>
      <h3 className='sectionHeader'>Experience</h3>

      <div className='w-full mt-4 h-5/6 flex flex-row space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll border-red-500'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
