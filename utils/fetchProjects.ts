import { Project } from '@/typings';
import axios from 'axios';

const fetchProjects = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );

    const projects: Project[] = response.data.projects;

    // console.log('fetching Projects...', projects);

    return projects;
  } catch (error) {
    throw new Error('Failed to fetch data for Projects');
  }
};

export default fetchProjects;
