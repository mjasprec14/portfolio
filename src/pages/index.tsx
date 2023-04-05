import Head from 'next/head';
import { Header, Hero, About, WorkExperience, Skills } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  );
}
