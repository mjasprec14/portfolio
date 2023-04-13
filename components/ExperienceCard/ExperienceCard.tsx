import React from 'react';
import { motion } from 'framer-motion';
import NextPay from '@/assets/Nextpay-Logo.jpg';
import Image from 'next/image';
import ReactIcon from '@/assets/react-icon.png';
import JavascriptIcon from '@/assets/js-icon.png';
import HtmlIcon from '@/assets/html-icon.png';
import CssIcon from '@/assets/css-icon.png';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const {
    company,
    companyImage,
    dateEnded,
    dateStarted,
    jobTitle,
    points,
    technologies,
    isCurrentlyWorkingHere,
  } = experience;
  return (
    <article className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-20 opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(companyImage).url()}
        alt='NextPay Logo'
        className='h-32 w-32 rounded-full object-contain object-center xl:h-[160px] xl:w-[160px]'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{jobTitle}</h4>
        <p className='mt-1 text-2xl font-bold'>{company}</p>

        <div className='my-2 flex items-center space-x-2 pt-5'>
          {technologies?.map(({ image, title }, idx) => (
            <Image
              key={title + idx}
              src={urlFor(image).url()}
              alt={title}
              height={36}
              width={36}
              className='rounded-full'
            />
          ))}
        </div>

        <p className='text-[18px] font-semibold py-5 uppercase text-gray-500'>
          {new Date(dateStarted).toDateString()} -{' '}
          {isCurrentlyWorkingHere
            ? 'Present'
            : new Date(dateEnded).toDateString()}
        </p>

        <ul className='ml-5 h-52 list-disc space-y-4 overflow-y-scroll px-4 text-lg scrollbar-thin'>
          {points?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
