'use client';
import { Skill } from '@/src/typings/typings';
import { motion } from 'framer-motion';
import { urlFor } from '@/src/sanity/sanity.utils';
import { singleWord } from '../../About/About.utils';
import { singleIcon } from '../Skills.utils';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Icon = ({ skill, directionLeft }: Props) => {
  return (
    <div className='cursor-pointer relative group flex rounded-full overflow-hidden h-16 w-16 md:h-24 md:w-24'>
      <motion.img
        variants={singleIcon}
        className='border border-gray-500 rounded-full h-16 w-16 md:h-24 md:w-24 object-cover object-center filter group-hover:grayscale transition duration-300 ease-in-out '
        src={urlFor(skill?.image).url()}
      />
      <div className='absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-24 md:w-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full '>
          <span className='text-xl font-semibold text-black opacity-100 '>
            {skill?.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Icon;
