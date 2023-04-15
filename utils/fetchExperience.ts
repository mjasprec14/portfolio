import { Experience } from '@/typings';
import { assetPrefix } from '../next.config';

const fetchExperience = async () => {
  try {
    const res = await fetch(`${assetPrefix}/api/getExperience`);

    const data = await res.json();

    const experiences: Experience[] = data.experiences;
    // console.log('fetching Experiences...', experiences);

    return experiences;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data for Experiences');
  }
};

export default fetchExperience;
