import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: 'd5grszkw',
  dataset: 'production',
  title: 'MJ Asprec Portfolio',
  apiVersion: '2023-18-04',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
});

export default config;
