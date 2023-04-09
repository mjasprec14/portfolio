import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    const { subject, name, message, email } = formData;
    window.location.href = `mailto:michaeljosephasprec1@gmail.com?subject=${subject}&body=Hi, I'm ${name}. ${message} (${email})`;
  };

  return (
    <div className='sectionContainer max-w-7xl text-center md:text-left'>
      <h3 className='sectionHeader'>Contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-center text-xl font-semibold'>
          Let&apos;s make something awesome!{' '}
          <span className='underline decoration-[#F7AB0A]/50'>
            Let&apos;s Talk.
          </span>
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center justify-start space-x-5'>
            <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]/50' />
            <p>+639151321954</p>
          </div>
          <div className='flex items-center justify-start space-x-5'>
            <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]/50' />
            <p>michaeljosephasprec1@gmail.com</p>
          </div>
          <div className='flex items-center justify-start space-x-5'>
            <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]/50' />
            <p>City of Malolos, Bulacan, 3000</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex w-fit flex-col space-y-2'
        >
          <div className='flex'>
            <input
              type='text'
              placeholder='Name'
              className='contactInput mr-2'
              {...register('name')}
            />
            {/* Added react hook form register method causes an error when you input something - see console log */}
            <input
              type='email'
              placeholder='Email'
              className='contactInput'
              {...register('email')}
            />
          </div>

          <input
            type='text'
            placeholder='Subject'
            className='contactInput'
            {...register('subject')}
          />

          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message')}
          />

          <button
            type='submit'
            className='rounded-md border border-transparent bg-[#F7AB0A] px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:border hover:border-[#F7AB0A] hover:bg-transparent hover:text-[#F7AB0A]'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
