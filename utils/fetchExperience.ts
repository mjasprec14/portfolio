import { Experience } from '@/typings';
import axios from 'axios';

const fetchExperience = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );

    const experiences: Experience[] = response.data.experiences;

    // console.log('fetching Experiences...', experiences);

    return experiences;
  } catch (error) {
    throw new Error('Failed to fetch data for Experiences');
  }
};

export default fetchExperience;
