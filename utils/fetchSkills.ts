import { Skill } from '@/typings';

const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  if (!res.ok) {
    throw new Error('Failed to fetch data for Skills');
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // console.log('fetching..', skills);

  return skills;
};

export default fetchSkills;
