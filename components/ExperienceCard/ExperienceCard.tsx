import React from 'react';
import { motion } from 'framer-motion';
import NextPay from '@/assets/Nextpay-Logo.jpg';
import Image from 'next/image';
import ReactIcon from '@/assets/react-icon.png';
import JavascriptIcon from '@/assets/js-icon.png';
import HtmlIcon from '@/assets/html-icon.png';
import CssIcon from '@/assets/css-icon.png';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-20 opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={NextPay.src}
        alt='NextPay Logo'
        className='h-32 w-32 rounded-full object-contain object-center xl:h-[160px] xl:w-[160px]'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Frontend Software Engineer</h4>
        <p className='mt-1 text-2xl font-bold'>NextPay</p>

        <div className='my-2 flex items-center space-x-2'>
          <Image
            src={ReactIcon}
            alt='React Icon'
            className='h-9 w-9 rounded-full'
          />

          <Image
            src={JavascriptIcon}
            alt='Javascript Icon'
            className='h-9 w-9 rounded-full'
          />

          <Image
            src={HtmlIcon}
            alt='HTML Icon'
            className='h-10 w-10 rounded-full'
          />

          <Image
            src={CssIcon}
            alt='CSS Icon'
            className='h-10 w-10 rounded-full'
          />
        </div>

        <p className='py-5 uppercase text-gray-300'>
          Started work... - Ended...
        </p>

        <ul className='ml-5 h-52 list-disc space-y-4 overflow-y-scroll px-4 text-lg scrollbar-thin'>
          <li>Proident magna velit tempor culpa.</li>
          <li>
            Dolor non nisi anim proident velit duis incididunt laborum aliqua
            consequat.
          </li>
          <li>Incididunt eiusmod adipisicing occaecat do nisi amet enim ex.</li>
          <li>Et qui sunt fugiat aliqua ullamco dolore id.</li>
          <li>
            Fugiat proident et excepteur cupidatat mollit proident minim ut
            fugiat eiusmod laboris reprehenderit.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
