import { Social } from '@/typings';
import { assetPrefix } from '../next.config';

const fetchSocials = async () => {
  try {
    const res = await fetch(`${assetPrefix}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log('fetching socials...', socials);

    return socials;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data for Socials');
  }
};

export default fetchSocials;
