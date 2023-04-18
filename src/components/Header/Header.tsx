'use client';
import React from 'react';
import { animationValues } from './Header.utils';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = ({ socials }: any) => {
  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center'>
      <div className='flex flex-row items-center'>
        {socials?.map((social: any, idx: any) => (
          <motion.span
            key={social._id}
            initial={animationValues[idx].initial}
            animate={animationValues[idx].animate}
            transition={animationValues[idx].transition}
          >
            <SocialIcon
              url={social.url}
              fgColor='gray'
              bgColor='transparent'
            />
          </motion.span>
        ))}
      </div>

      <div className='flex cursor-pointer flex-row items-center text-gray-300'>
        <motion.span
          initial={{ opacity: 0, x: 200, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            url='/#contact'
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>

        <motion.p
          className='hidden text-sm uppercase text-gray-400 md:inline-flex'
          initial={{ opacity: 0, x: -200, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          get in touch
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
