import { getSocials } from '@utils';
import Head from 'next/head';
import { Header } from '@/src/components';

export default async function Home() {
  const socials = await getSocials();

  console.log(socials);
  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>MJ Asprec</title>
      </Head>
      <Header />
    </main>
  );
}
