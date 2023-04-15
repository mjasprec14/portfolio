import { Experience } from '@/typings';
import axios from 'axios';

const fetchExperience = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );

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
