import { createClient, groq } from 'next-sanity';

export default async function getPageInfo() {
  try {
    const client = createClient({
      projectId: 'd5grszkw',
      dataset: 'production',
      apiVersion: '2023-04-18',
    });

    const pageInfo = await client.fetch(groq`*[_type== 'pageInfo'][0]`);

    return pageInfo;
  } catch (error) {
    throw new Error(`Failed to fetch Page Info data: ${error}`);
  }
}
