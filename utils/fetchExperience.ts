import { Experience } from '@/typings';

const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data for Experiences');
  }

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log('fetching Experiences...', experiences);

  return experiences;
};

export default fetchExperience;
