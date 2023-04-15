import { Skill } from '@/typings';

const fetchSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log('fetching..', skills);

    return skills;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data for Skills');
  }
};

export default fetchSkills;
