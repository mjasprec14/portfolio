import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getSkills() {
  try {
    const client = createClient(config);

    const skills = await client.fetch(groq`*[_type=='skill']`);

    return skills;
  } catch (error) {
    throw new Error(`Failed to fetch Skills data: ${error}`);
  }
}
