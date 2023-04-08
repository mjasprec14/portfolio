import React from 'react';
import { motion } from 'framer-motion';
import AboutPhoto from '@/assets/about.jpg';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='sectionContainer'>
      <h3 className='sectionHeader'>About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={AboutPhoto.src}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:h-[600px] xl:w-[500px]'
      />
    </div>
  );
};

export default About;
