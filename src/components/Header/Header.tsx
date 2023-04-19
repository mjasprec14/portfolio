'use client';
import React from 'react';
import { animationValues } from './Header.utils';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { Social } from '@/src/typings/typings';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center'>
      <div className='flex flex-row items-center'>
        {socials?.map((social, idx) => (
          <motion.span
            key={social?._id}
            initial={animationValues[idx]?.initial}
            animate={animationValues[idx]?.animate}
            transition={animationValues[idx]?.transition}
          >
            <SocialIcon
              url={social?.url}
              fgColor='gray'
              bgColor='transparent'
            />
          </motion.span>
        ))}
      </div>

      <div className='flex flex-row cursor-pointer gap-2 items-center text-gray-300'>
        <motion.i
          initial={{ opacity: 0, x: 200, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.i>

        {currentTheme === 'dark' ? (
          <motion.span
            className='hidden text-sm uppercase text-gray-400 md:inline-flex animate-bounce'
            initial={{ opacity: 0, x: -200, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={() => setTheme('light')}
              className='rounded-xl'
            >
              <i>
                <RiSunLine
                  size={20}
                  color='gray'
                />
              </i>
            </button>
          </motion.span>
        ) : (
          <motion.span
            className='hidden text-sm uppercase text-[#808080] md:inline-flex animate-bounce'
            initial={{ opacity: 0, x: -200, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={() => setTheme('dark')}
              className='rounded-xl'
            >
              <i>
                <RiMoonFill size={20} />
              </i>
            </button>
          </motion.span>
        )}
      </div>
    </header>
  );
};

export default Header;
