import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getSocials() {
  try {
    const client = createClient(config);

    const socials = await client.fetch(groq`*[_type=="social"]`);

    return socials;
  } catch (error) {
    throw new Error(`Failed to fetch Socials data: ${error}`);
  }
}
