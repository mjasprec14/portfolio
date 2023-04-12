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
  } catch (error: any) {
    return error;
  }
};

export default fetchSkills;
