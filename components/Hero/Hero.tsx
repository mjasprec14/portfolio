import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';

type HeroProps = {};

const Hero = (props: HeroProps) => {
  const [text, count] = useTypewriter({
    words: [
      '<FrontEnd/>',
      'Love',
      'Music',
      'Challenge',
      'Code',
      'Learn',
      'Humble',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <h1 className=''>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
