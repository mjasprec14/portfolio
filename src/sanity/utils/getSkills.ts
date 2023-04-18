import { createClient, groq } from 'next-sanity';

export default async function getSkills() {
  try {
    const client = createClient({
      projectId: 'd5grszkw',
      dataset: 'production',
      apiVersion: '2023-04-18',
    });

    const skills = await client.fetch(groq`*[_type=='skill']`);

    return skills;
  } catch (error) {
    throw new Error(`Failed to fetch Skills data: ${error}`);
  }
}
