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
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={htmlIcon.src}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:h-24 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:h-24 xl:w-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-black text-3xl font-bold opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}
