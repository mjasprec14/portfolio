import Head from 'next/head';
import {
  Header,
  Hero,
  About,
  WorkExperience,
  Skills,
  Projects,
  ContactMe,
} from '@/components';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import ScrollUp from '@/assets/scroll-up-blue.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>MJ Asprec Portfolio</title>
        <meta
          name='description'
          content='MJ Asprec Portfolio'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
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
        className='snap-start'
      >
        <Skills />
      </section>

      <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <ContactMe />
      </section>

      <Link href='/#hero'>
        <footer className='sticky bottom-5 pr-3 w-full cursor-pointer flex items-center justify-end'>
          <Image
            src={ScrollUp}
            alt='Scroll up icon'
            className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          />
        </footer>
      </Link>
    </div>
  );
}
