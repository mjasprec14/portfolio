import React from 'react';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeOpenIcon,
} from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  console.log(errors);

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

        <div className='space-y-10'>
          <div className='flex items-center justify-start space-x-5'>
            <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p className='text-2xl'>+639151321954</p>
          </div>
          <div className='flex items-center justify-start space-x-5'>
            <EnvelopeOpenIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p className='text-2xl'>michaeljosephasprec1@gmail.com</p>
          </div>
          <div className='flex items-center justify-start space-x-5'>
            <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p className='text-2xl'>
              Domsal Subdivision, Bulihan, City of Malolos Bulacan.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name', { required: true })}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email', { required: true })}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />

          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
            name=''
            id=''
          />

          <button
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
