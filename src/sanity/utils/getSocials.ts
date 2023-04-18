import { createClient, groq } from 'next-sanity';

export default async function getSocials() {
  try {
    const client = createClient({
      projectId: 'd5grszkw',
      dataset: 'production',
      apiVersion: '2023-04-18',
    });

    const socials = await client.fetch(groq`*[_type=="social"]`);

    return socials;
  } catch (error) {
    throw new Error(`Failed to fetch Socials data: ${error}`);
  }
}
