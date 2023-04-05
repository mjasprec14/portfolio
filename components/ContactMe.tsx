import React from 'react';

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>
      </div>
    </div>
  );
}
