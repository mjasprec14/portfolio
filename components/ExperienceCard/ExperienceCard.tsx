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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={NextPay.src}
        alt='NextPay Logo'
        className='h-32 w-32 rounded-full xl:h-[160px] xl:w-[160px] object-contain object-center'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Frontend Software Engineer</h4>
        <p className='font-bold text-2xl mt-1'>NextPay</p>

        <div className='flex space-x-2 my-2 items-center'>
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

        <p className='uppercase py-5 text-gray-300'>
          Started work... - Ended...
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg h-52 overflow-y-scroll'>
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
