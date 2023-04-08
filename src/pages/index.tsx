import Head from 'next/head';
import { About, Header, Hero } from '@/components';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0'>
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
      {/* WORK EXPERIENCE*/}
      {/* SKILLS */}
      {/* PROJECTS */}
      {/* CONTACT ME */}
    </main>
  );
}
