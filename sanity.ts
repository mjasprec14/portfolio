import createImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'production',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2022-04-12' || '1',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
