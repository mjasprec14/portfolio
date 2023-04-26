import { createClient, groq } from 'next-sanity';
import { config } from '../sanity.utils';

export default async function getPageInfo() {
  try {
    const client = createClient(config);

    const pageInfo = await client.fetch(groq`*[_type== 'pageInfo'][0]{
      ...,
      "cvPDF":cvPDF.asset->url
    }`);

    return pageInfo;
  } catch (error) {
    throw new Error(`Failed to fetch Page Info data: ${error}`);
  }
}
