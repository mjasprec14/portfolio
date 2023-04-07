import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        <motion.span
          initial={{ x: -200, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <SocialIcon
            url='https://www.linkedin.com/in/michael-joseph-asprec-254071251/'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>

        <motion.span
          initial={{ y: -200, scale: 0.5 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            url='https://github.com/mjasprec14'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
        >
          <SocialIcon
            url='https://www.facebook.com/MichaelJosephAsprec/'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SocialIcon
            url='https://twitter.com/MjAsprec'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 200, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            url='https://portfolio-git-main-mjasprec14.vercel.app/'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.span>
      </div>

      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <motion.span
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
        </motion.span>

        <motion.p
          className='hidden md:inline-flex text-sm text-gray-400 uppercase'
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
