import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getExperience() {
  try {
    const client = createClient(config);

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
