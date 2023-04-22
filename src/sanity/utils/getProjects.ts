import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getProjects() {
  try {
    const client = createClient(config);
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
