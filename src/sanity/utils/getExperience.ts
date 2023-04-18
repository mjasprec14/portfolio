import { createClient, groq } from 'next-sanity';

export default async function getExperience() {
  try {
    const client = createClient({
      projectId: 'd5grszkw',
      dataset: 'production',
      apiVersion: '2023-04-18',
    });

    const experience = await client.fetch(groq`
        *[_type == "experience"] {
        ...,
        technologies[] ->
        }
    `);

    return experience;
  } catch (error) {
    throw new Error(`Failed to fetch Experience data: ${error}`);
  }
}
