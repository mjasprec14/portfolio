'use client';
import { Social, PageInfo } from '@/src/typings/typings';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { useTheme } from 'next-themes';

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Footer = ({ socials, pageInfo }: Props) => {
  const { theme } = useTheme();

  let socmed = socials.filter(
    (item) =>
      item.title.toLowerCase() !== 'read.cv' &&
      item.title.toLowerCase() !== 'theorg'
  );

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-1 w-4/5 bg-gradient-to-r from-blue-600  via-red-500 to-[#F7AB0A]/80'
      />
      <footer
        id='footer'
        className='w-full md:h-1/6 grid md:grid-cols-3 md:items-center md:justify-between py-10 px-4 space-y-6 md:px-10 md:py-0'
      >
        <div className='space-y-2'>
          <h3 className='text-sm text-gray-500 uppercase font-semibold tracking-[2px] dark:text-neutral-200'>
            Come and say hello
          </h3>
          <p className='text-xs text-gray-400 uppercase tracking-[2px]'>
            {pageInfo?.address}
          </p>
        </div>

        <div className='flex flex-col md:items-center space-y-4'>
          <div className='space-y-4'>
            <h3 className='text-sm text-gray-500 uppercase font-semibold tracking-[2px] dark:text-neutral-200'>
              Get in touch with me
            </h3>
            <div className='flex items-center space-x-3'>
              {socmed?.map((social) => {
                if (
                  social.title.toLowerCase() !== 'read.cv' ||
                  social.title.toLowerCase() !== 'theorg'
                ) {
                  return (
                    <SocialIcon
                      key={social._id}
                      url={social?.url}
                      style={{ height: 36, width: 36 }}
                      aria-label={social?.title}
                      fgColor={'white'}
                    />
                  );
                }
              })}
            </div>
          </div>

          <div className='text-xs text-gray-400 uppercase tracking-[2px]'>
            <div className='flex items-center space-x-2'>
              <span className='inline-block'>
                <AiOutlineMail />
              </span>
              <p>{pageInfo?.email}</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='inline-block'>
                <AiFillPhone />
              </span>
              <p>{pageInfo?.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className='flex md:justify-end mt-16 md:mt-0 '>
          <p className='text-sm text-gray-500 uppercase font-semibold tracking-[5px] dark:text-neutral-200'>
            {new Date().getFullYear()} &copy; All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
