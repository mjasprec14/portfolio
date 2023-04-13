import { Social } from '@/typings';

const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  if (!res.ok) {
    throw new Error('Failed to fetch data for Socials');
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log('fetching socials...', socials);

  return socials;
};

export default fetchSocials;
