import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://liruifengv.github.io',
	integrations: [mdx(), sitemap()],
  base: '/test-astro-build-for-ci/'
});