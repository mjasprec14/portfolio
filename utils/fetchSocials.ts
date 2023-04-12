import { Social } from '@/typings';
import axios from 'axios';

const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  // axios
  //   .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  console.log('fetching socials...', socials);

  return socials;
};

export default fetchSocials;
