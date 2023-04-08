import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div className='sectionContainer overflow-hidden max-w-full'>
      <h3 className='sectionHeader'>Experience</h3>

      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
