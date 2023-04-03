import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NextPayLogo from '@/assets/Nextpay-Logo.jpg';
import htmlIcon from '@/assets/html-icon.png';
import cssIcon from '@/assets/css-icon.png';
import jsIcon from '@/assets/js-icon.png';
import reactIcon from '@/assets/react-icon.png';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] l:w-[900px] xl:w-[1250px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={NextPayLogo?.src}
        alt='NextPay Logo'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>NextPay</h4>
        <p className='font-bold text-2xl mt-1'>Front-end Engineer</p>

        <div className='flex space-x-2 my-2'>
          <Image
            className='h-10 w-10 rounded-full'
            src={htmlIcon}
            alt='HTML icon'
          />

          <Image
            className='h-10 w-10 rounded-full'
            src={cssIcon}
            alt='CSS icon'
          />

          <Image
            className='h-10 w-10 rounded-full'
            src={jsIcon}
            alt='JS icon'
          />

          <Image
            className='h-10 w-10 rounded-full'
            src={reactIcon}
            alt='React icon'
          />
        </div>

        <p className='uppercase py-5 text-gray-300'>Started work.. - Ended..</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
