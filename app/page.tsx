import { getSocials } from '@utils';

export default async function Home() {
  const socials = await getSocials();

  console.log(socials);
  return (
    <main>
      <h1>Socials</h1>
    </main>
  );
}
