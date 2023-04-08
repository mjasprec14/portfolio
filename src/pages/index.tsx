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

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden bg-[rgb(36,36,36)] text-white'>
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
    </main>
  );
}
