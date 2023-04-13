import { Project } from '@/typings';

const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data for Projects');
  }

  const data = await res.json();
  const projects: Project[] = data.projects;

  // console.log('fetching Projects...', projects);

  return projects;
};

export default fetchProjects;
