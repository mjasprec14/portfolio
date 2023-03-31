import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Me from '@/assets/me.png';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's MJ Asprec",
      'I was on Hiatus..',
      "But, now I'm back..",
      "I'm back hungrier",
      'with more motivation',
      "let's go!",
      '<ShowMeTheMoney/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={Me}
        alt='MJ Asprec photo'
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
}
