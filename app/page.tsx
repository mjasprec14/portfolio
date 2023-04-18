import { getSocials } from '@utils';
import { Header } from '@/src/components';

export default async function Home() {
  const socials = await getSocials();

  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header socials={socials} />
    </main>
  );
}
