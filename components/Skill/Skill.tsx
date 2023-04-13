import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft
            ? Math.floor(Math.random() * -200)
            : Math.floor(Math.random() * 200),
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill?.image).url()}
        alt={`${skill?.title}`}
        className='h-14 w-14 rounded-full border border-gray-500 object-cover object-center xl:h-20 xl:w-20  filter group-hover:grayscale transition duration-300 ease-in'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 xl:h-20 xl:w-20  rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
