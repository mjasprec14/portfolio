import { Project } from '@/typings';

const fetchProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log('fetching Projects...', projects);

    return projects;
  } catch (error: any) {
    return error;
  }
};

export default fetchProjects;
