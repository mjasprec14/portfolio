import { Experience } from '@/typings';

const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log('fetching Experiences...', experiences);

  return experiences;
};

export default fetchExperience;
