import Head from 'next/head';
import { Header, Hero } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
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

      <section id='hero'>
        <Hero />
      </section>

      {/* ABOUT */}

      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  );
}
