import Head from 'next/head';
import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from '@/components';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import ArrowUp from '@/assets/icons8-up-arrow.gif';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>MJ Asprec Portfolio</title>
      </Head>
      <Header />

      <section
        id='hero'
        className='snap-start'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About />
      </section>

      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience />
      </section>

      <section
        id='skills'
        className='snap-center'
      >
        <Skills />
      </section>

      <section
        id='projects'
        className='snap-center'
      >
        <Projects />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <ContactMe />
      </section>

      <footer className='sticky bottom-5 w-full'>
        <div className='flex items-center justify-end px-4'>
          <Link
            href='/#hero'
            className='cursor-pointer'
          >
            <Image
              src={ArrowUp}
              alt='Arrow Up'
              className='h-8 w-8 animate-pulse rounded-full object-cover grayscale filter hover:grayscale-0'
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}
