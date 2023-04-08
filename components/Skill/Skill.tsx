import React from 'react';
import { motion } from 'framer-motion';
import NextIcon from '@/assets/nextjs-4.png';
import ReactIcon from '@/assets/react-icon.png';

type Props = {
  directionLeft?: boolean;
};

const Skill = (directionLeft: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={ReactIcon.src}
        alt='NextJs Icon'
        className='h-16 w-16 rounded-full border border-gray-500 object-cover object-center xl:h-24 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </div>
  );
};

export default Skill;
