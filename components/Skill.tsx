import React from 'react';
import { motion } from 'framer-motion';
import htmlIcon from '@/assets/html-icon.png';
import cssIcon from '@/assets/css-icon.png';

type Props = {
  directionLeft: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='relative group flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={htmlIcon.src}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-28 xl:w-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-black text-3xl font-bold opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}
