import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className=''>
      <Head>
        <title>MJ Asprec Portfolio</title>
      </Head>

      <h1 className='text-red-500'>hello world</h1>
    </main>
  );
}
