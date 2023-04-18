import { createClient, groq } from 'next-sanity';

export default async function getProjects() {
  try {
    const client = createClient({
      projectId: 'd5grszkw',
      dataset: 'production',
      apiVersion: '2023-04-18',
    });
    const projects = await client.fetch(groq`
        *[_type == "project"] {
        ...,
        technologies[] ->
        }
    `);

    return projects;
  } catch (error) {
    throw new Error(`Failed to fetch Projects data: ${error}`);
  }
}
