import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: 'd5grszkw',
  dataset: 'production',
  apiVersion: '2023-04-18',
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
